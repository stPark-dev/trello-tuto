"use client";

import "maplibre-gl/dist/maplibre-gl.css";

import { Ref, forwardRef, useEffect, useRef, useState } from "react";

import MapLibreGL, { Map as MaplibreGL } from "maplibre-gl";
import Box, { BoxProps } from "@mui/material/Box";

import defaultStyle from "./styles/default"

interface MapProps extends BoxProps {}

const Map = ({ children, ...props }: MapProps, ref: Ref<HTMLDivElement>) => {
  const mapContainerRef = useRef<HTMLDivElement>();
  const [instanceState, setInstanceState] = useState<MaplibreGL>();

  useEffect(() => {
    if (!mapContainerRef?.current || Boolean(instanceState)) return;

    const initialState = {
      lng: 126.7770556,
      lat: 37.65590833,
      zoom: 12,
    };

    const map = new MaplibreGL({
      container: mapContainerRef.current,
      style: defaultStyle,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      attributionControl: false,
    });

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
