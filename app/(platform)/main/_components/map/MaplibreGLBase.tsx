"use client";

import "maplibre-gl/dist/maplibre-gl.css";

import { Ref, forwardRef, useEffect, useRef, useState } from "react";

import MapLibreGL, { Map as MaplibreGL, Marker, NavigationControl, Point } from "maplibre-gl";
import Box, { BoxProps } from "@mui/material/Box";

import defaultStyle from "./styles/default";

interface MapProps extends BoxProps { }

const Map = ({ children, ...props }: MapProps, ref: Ref<HTMLDivElement>) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [instanceState, setInstanceState] = useState<MaplibreGL | null>(null);

  useEffect(() => {
    if (!mapContainerRef?.current || Boolean(instanceState)) return;

    const initialState = {
      lng: 126.8320201,
      lat: 37.6583599,
      zoom: 8,
    };

    const map = new MaplibreGL({
      container: mapContainerRef.current,
      style: defaultStyle,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      attributionControl: false,
      maxBounds: [
        [126.7320201, 37.5583599],
        [126.9320201, 37.7583599]
      ]
    });
    map.addControl(new NavigationControl());

    fetch('/map/goyang.geojson')
      .then(response => response.json())
      .then(data => {
        map.on('load', () => {
          map.addSource('goyang', {
            type: 'geojson',
            data: data
          });
          
          map.addLayer({
            'id': 'area-labels',
            'type': 'symbol',
            'source': 'goyang',
            'layout': {
                'text-field': ['get', 'adm_nm'],
                'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                'text-radial-offset': 0.5,
                'text-justify': 'auto',
                'text-size': 14
            },
            'paint': {
                'text-color': '#000000',
                'text-halo-color': '#ffffff',
                'text-halo-width': 2
            }
        });


          map.addLayer({
            id: 'goyang-fill',
            type: 'fill',
            source: 'goyang',
            layout: {},
            paint: {
              'fill-color': '#888888',
              'fill-opacity': 0.2
            }
          });
        });
      })
    const mag1: any = ['<', ['get', 'mag'], 2];
    const mag2: any = ['all', ['>=', ['get', 'mag'], 2], ['<', ['get', 'mag'], 3]];
    const mag3: any = ['all', ['>=', ['get', 'mag'], 3], ['<', ['get', 'mag'], 4]];
    const mag4: any = ['all', ['>=', ['get', 'mag'], 4], ['<', ['get', 'mag'], 5]];
    const mag5: any = ['>=', ['get', 'mag'], 5];
    const colors: string[] = ['#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c'];

    fetch('/map/goyangData.geojson')
      .then(response => response.json())
      .then(data => {
        map.on('load', () => {

          map.addSource('earthquakes', {
            'type': 'geojson',
            'data': data,
            'cluster': true,
            'clusterRadius': 80,
            'clusterProperties': {
              // keep separate counts for each magnitude category in a cluster
              'mag1': ['+', ['case', mag1, 1, 0]],
              'mag2': ['+', ['case', mag2, 1, 0]],
              'mag3': ['+', ['case', mag3, 1, 0]],
              'mag4': ['+', ['case', mag4, 1, 0]],
              'mag5': ['+', ['case', mag5, 1, 0]]
            }
          });
          // circle and symbol layers for rendering individual earthquakes (unclustered points)
          map.addLayer({
            'id': 'earthquake_circle',
            'type': 'circle',
            'source': 'earthquakes',
            'filter': ['!=', 'cluster', true],
            'paint': {
              'circle-color': [
                'case',
                mag1,
                colors[0],
                mag2,
                colors[1],
                mag3,
                colors[2],
                mag4,
                colors[3],
                colors[4]
              ],
              'circle-opacity': 0.6,
              'circle-radius': 12
            }
          });
          map.addLayer({
            'id': 'earthquake_label',
            'type': 'symbol',
            'source': 'earthquakes',
            'filter': ['!=', 'cluster', true],
            'layout': {
              'text-field': [
                'number-format',
                ['get', 'mag'],
                { 'min-fraction-digits': 1, 'max-fraction-digits': 1 }
              ],
              'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
              'text-size': 10
            },
            'paint': {
              'text-color': [
                'case',
                ['<', ['get', 'mag'], 3],
                'black',
                'white'
              ]
            }
          });

          function isCoordsArray(coords: any): coords is [number, number] | [number, number, number] {
            return Array.isArray(coords) && (coords.length === 2 || coords.length === 3) &&
              typeof coords[0] === 'number' && typeof coords[1] === 'number' &&
              (coords.length === 2 || typeof coords[2] === 'number');
          }
          const markers: { [id: string]: any } = {};
          let markersOnScreen: { [id: string]: any } = {};

          function updateMarkers() {
            const newMarkers: { [id: string]: any } = {};
            const features = map.querySourceFeatures('earthquakes');
            for (let i = 0; i < features.length; i++) {
              const geometry = features[i].geometry;
              // 여기서 geometry가 Point 타입인지 확인
              if (geometry.type === 'Point' && isCoordsArray(geometry.coordinates)) {
                const coords = geometry.coordinates;
                // coords에서 고도값을 제외하고 경도와 위도만 추출
                const lngLat: [number, number] = [coords[0], coords[1]];
                const props = features[i].properties;
                if (!props.cluster) continue;
                const id: string = props.cluster_id;

                let marker = markers[id];
                if (!marker) {
                  const el = createDonutChart(props);
                  marker = markers[id] = new Marker({
                    element: el
                  }).setLngLat(lngLat);
                }
                newMarkers[id] = marker;

                if (!markersOnScreen[id]) marker.addTo(map);
              }
            }
            for (const id in markersOnScreen) {
              if (!newMarkers[id]) markersOnScreen[id].remove();
            }
            markersOnScreen = newMarkers;
          }
          map.on('data', (e: any) => {
            if (e.sourceId !== 'earthquakes' || !e.isSourceLoaded) return;

            map.on('move', updateMarkers);
            map.on('moveend', updateMarkers);
            updateMarkers();
          });
        });

      });
    // code for creating an SVG donut chart from feature properties
    function createDonutChart(props: any) {
      const offsets = [];
      const counts = [
        props.mag1,
        props.mag2,
        props.mag3,
        props.mag4,
        props.mag5
      ];
      let total = 0;
      for (let i = 0; i < counts.length; i++) {
        offsets.push(total);
        total += counts[i];
      }
      const fontSize =
        total >= 1000 ? 22 : total >= 100 ? 20 : total >= 10 ? 18 : 16;
      const r = total >= 1000 ? 50 : total >= 100 ? 32 : total >= 10 ? 24 : 18;
      const r0 = Math.round(r * 0.6);
      const w = r * 2;

      let html =
        `<div><svg width="${w
        }" height="${w
        }" viewbox="0 0 ${w
        } ${w
        }" text-anchor="middle" style="font: ${fontSize
        }px sans-serif; display: block">`;

      for (let i = 0; i < counts.length; i++) {
        html += donutSegment(
          offsets[i] / total,
          (offsets[i] + counts[i]) / total,
          r,
          r0,
          colors[i]
        );
      }
      html +=
        `<circle cx="${r
        }" cy="${r
        }" r="${r0
        }" fill="white" /><text dominant-baseline="central" transform="translate(${r
        }, ${r
        })">${total.toLocaleString()
        }</text></svg></div>`;

      const el = document.createElement('div');
      el.innerHTML = html;
      return el.firstChild as HTMLElement;
    }
    function donutSegment(start: number, end: number, r: number, r0: number, color: string): string {
      if (end - start === 1) end -= 0.00001;
      const a0 = 2 * Math.PI * (start - 0.25);
      const a1 = 2 * Math.PI * (end - 0.25);
      const x0 = Math.cos(a0),
        y0 = Math.sin(a0);
      const x1 = Math.cos(a1),
        y1 = Math.sin(a1);
      const largeArc = end - start > 0.5 ? 1 : 0;

      return [
        '<path d="M',
        r + r0 * x0,
        r + r0 * y0,
        'L',
        r + r * x0,
        r + r * y0,
        'A',
        r,
        r,
        0,
        largeArc,
        1,
        r + r * x1,
        r + r * y1,
        'L',
        r + r0 * x1,
        r + r0 * y1,
        'A',
        r0,
        r0,
        0,
        largeArc,
        0,
        r + r0 * x0,
        r + r0 * y0,
        `" fill="${color}" />`
      ].join(' ');
    }
    setInstanceState(map);
  }, [mapContainerRef, instanceState]);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      {...props}
    >
      <Box ref={mapContainerRef} sx={{ flexGrow: 1 }}></Box>
    </Box>
  );
};

export const Component = forwardRef(Map);
