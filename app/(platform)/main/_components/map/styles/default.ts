import { StyleSpecification } from "maplibre-gl";

const textFont = ["Roboto Condensed Italic", "Noto Sans Italic"];

const style: StyleSpecification = {
  version: 8,
  id: "streets",
  name: "Streets",
  metadata: {
    "mapbox:type": "template",
    "maptiler:copyright":
      "This style was generated on MapTiler Cloud. Usage outside of MapTiler Cloud requires valid OpenMapTiles Production Package: https://openmaptiles.com/production-package/ -- please contact us.",
    "openmaptiles:version": "3.x",
  },
  sources: {
    openmaptiles: {
      url: "https://api.maptiler.com/tiles/v3/tiles.json?key=8hmX4uYofs4vgqyantJZ",
      type: "vector",
    },
    maptiler_attribution: {
      type: "vector",
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    },
  },
  sprite: "https://api.maptiler.com/maps/streets/sprite",
  glyphs: "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=8hmX4uYofs4vgqyantJZ",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": {
          stops: [
            [6, "rgba(252, 247, 229, 1)"],
            [10, "rgba(252, 247, 229, 1)"],
            [14, "rgba(246, 241, 229, 1)"],
            [15, "rgba(246, 241, 229, 1)"],
          ],
        },
      },
      layout: {
        visibility: "visible",
      },
    },
    {
      id: "landcover_cropland",
      type: "fill",
      paint: {
        "fill-color": "rgba(243, 235, 195, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      filter: ["all", ["==", "class", "crop"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      "source-layer": "globallandcover",
    },
    {
      id: "landcover_grassland",
      type: "fill",
      paint: {
        "fill-color": "rgba(226, 236, 197, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      filter: ["all", ["==", "class", "grass"]],
      source: "openmaptiles",
      "source-layer": "globallandcover",
    },
    {
      id: "landcover_scrubland",
      type: "fill",
      paint: {
        "fill-color": "rgba(199, 230, 179, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      filter: ["all", ["==", "class", "scrub"]],
      source: "openmaptiles",
      "source-layer": "globallandcover",
    },
    {
      id: "landcover_treeland",
      type: "fill",
      paint: {
        "fill-color": "rgba(190, 222, 173, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      filter: ["all", ["==", "class", "tree"]],
      source: "openmaptiles",
      "source-layer": "globallandcover",
    },
    {
      id: "landcover_forestland",
      type: "fill",
      paint: {
        "fill-color": "rgba(171, 217, 170, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      filter: ["all", ["==", "class", "forest"]],
      source: "openmaptiles",
      "source-layer": "globallandcover",
    },
    {
      id: "landcover_snowland",
      type: "fill",
      paint: {
        "fill-color": "hsl(0, 0%, 100%)",
        "fill-opacity": {
          base: 1,
          stops: [
            [4, 1],
            [8, 0],
          ],
        },
      },
      filter: ["all", ["==", "class", "snow"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      "source-layer": "globallandcover",
    },
    {
      id: "park_outline",
      type: "line",
      paint: {
        "line-color": "rgba(228, 241, 215, 1)",
        "line-opacity": 1,
        "line-dasharray": [1, 1.5],
      },
      filter: ["all"],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      "source-layer": "park",
    },
    {
      id: "landuse_residential",
      type: "fill",
      paint: {
        "fill-color": {
          base: 1,
          stops: [
            [9, "rgba(233, 227, 210, 0.80)"],
            [12, "rgba(233, 227, 210, 0.55)"],
            [16, "rgba(233, 227, 210, 0.35)"],
          ],
        },
      },
      filter: ["all", ["in", "class", "residential", "suburbs", "neighbourhood"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      maxzoom: 24,
      metadata: {},
      "source-layer": "landuse",
    },
    {
      id: "landcover_wood",
      type: "fill",
      paint: {
        "fill-color": "hsla(98, 61%, 72%, 0.7)",
        "fill-opacity": 0.4,
        "fill-antialias": false,
      },
      filter: ["all", ["==", "class", "wood"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landcover",
    },
    {
      id: "landcover_grass",
      type: "fill",
      paint: {
        "fill-color": "rgba(224, 232, 201, 1)",
        "fill-opacity": 0.3,
        "fill-antialias": false,
      },
      filter: ["all", ["==", "class", "grass"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landcover",
    },
    {
      id: "landuse_cemetery",
      type: "fill",
      paint: {
        "fill-color": "hsl(75, 37%, 81%)",
      },
      filter: ["==", "class", "cemetery"],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landuse",
    },
    {
      id: "landuse_hospital",
      type: "fill",
      paint: {
        "fill-color": "rgba(249, 225, 220, 1)",
      },
      filter: ["==", "class", "hospital"],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landuse",
    },
    {
      id: "landuse_school",
      type: "fill",
      paint: {
        "fill-color": "rgb(236,238,204)",
      },
      filter: ["==", "class", "school"],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landuse",
    },
    {
      id: "landuse_stadium",
      type: "fill",
      paint: {
        "fill-color": "rgb(236,238,204)",
      },
      filter: ["all", ["in", "class", "stadium", "pitch", "track"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landuse",
    },
    {
      id: "landuse_garages",
      type: "fill",
      paint: {
        "fill-color": "rgba(236, 236, 236, 1)",
      },
      filter: ["all", ["in", "class", "garages"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landuse",
    },
    {
      id: "landuse_dam",
      type: "fill",
      paint: {
        "fill-color": "rgba(209, 212, 190, 1)",
      },
      filter: ["all", ["in", "class", "dam"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landuse",
    },
    {
      id: "waterway_tunnel",
      type: "line",
      paint: {
        "line-color": "#a0c8f0",
        "line-width": {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
        "line-dasharray": [2, 4],
      },
      filter: ["all", ["==", "brunnel", "tunnel"]],
      layout: {
        "line-cap": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 14,
      "source-layer": "waterway",
    },
    {
      id: "waterway_river",
      type: "line",
      paint: {
        "line-color": "#a0c8f0",
        "line-width": {
          base: 1.2,
          stops: [
            [11, 0.5],
            [20, 6],
          ],
        },
      },
      filter: [
        "all",
        ["==", "class", "river"],
        ["!=", "brunnel", "tunnel"],
        ["!=", "intermittent", 1],
      ],
      layout: {
        "line-cap": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "waterway",
    },
    {
      id: "waterway_river_intermittent",
      type: "line",
      paint: {
        "line-color": "#a0c8f0",
        "line-width": {
          base: 1.2,
          stops: [
            [11, 0.5],
            [20, 6],
          ],
        },
        "line-dasharray": [3, 2],
      },
      filter: [
        "all",
        ["==", "class", "river"],
        ["!=", "brunnel", "tunnel"],
        ["==", "intermittent", 1],
      ],
      layout: {
        "line-cap": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "waterway",
    },
    {
      id: "waterway_other",
      type: "line",
      paint: {
        "line-color": "#a0c8f0",
        "line-width": {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
      },
      filter: [
        "all",
        ["!=", "class", "river"],
        ["!=", "brunnel", "tunnel"],
        ["!=", "intermittent", 1],
      ],
      layout: {
        "line-cap": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "waterway",
    },
    {
      id: "waterway_other_intermittent",
      type: "line",
      paint: {
        "line-color": "#a0c8f0",
        "line-width": {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
        "line-dasharray": [4, 3],
      },
      filter: [
        "all",
        ["!=", "class", "river"],
        ["!=", "brunnel", "tunnel"],
        ["==", "intermittent", 1],
      ],
      layout: {
        "line-cap": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "waterway",
    },
    {
      id: "water_intermittent",
      type: "fill",
      paint: {
        "fill-color": "rgba(172, 218, 251, 1)",
        "fill-opacity": 0.85,
      },
      filter: ["all", ["==", "intermittent", 1]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "water",
    },
    {
      id: "water",
      type: "fill",
      paint: {
        "fill-color": "rgba(134, 204, 250, 1)",
      },
      filter: ["all", ["!=", "intermittent", 1], ["!=", "brunnel", "tunnel"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "water",
    },
    {
      id: "landcover_sand",
      type: "fill",
      paint: {
        "fill-color": "#f2e9ac",
        "fill-opacity": 1,
        "fill-antialias": false,
      },
      filter: ["all", ["in", "class", "sand"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landcover",
    },
    {
      id: "landcover_sand_outline",
      type: "line",
      paint: {
        "line-color": "#f2e9ac",
        "line-width": 2,
      },
      filter: ["all", ["in", "class", "sand"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landcover",
    },
    {
      id: "aeroway_fill",
      type: "fill",
      paint: {
        "fill-color": "rgba(229, 228, 224, 1)",
        "fill-opacity": 0.7,
      },
      filter: ["==", "$type", "Polygon"],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 11,
      metadata: {},
      "source-layer": "aeroway",
    },
    {
      id: "aeroway_runway",
      type: "line",
      paint: {
        "line-color": "#f0ede9",
        "line-width": {
          base: 1.2,
          stops: [
            [11, 3],
            [20, 16],
          ],
        },
      },
      filter: ["all", ["==", "$type", "LineString"], ["==", "class", "runway"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 11,
      metadata: {},
      "source-layer": "aeroway",
    },
    {
      id: "aeroway_taxiway",
      type: "line",
      paint: {
        "line-color": "#f0ede9",
        "line-width": {
          base: 1.2,
          stops: [
            [11, 0.5],
            [20, 6],
          ],
        },
      },
      filter: ["all", ["==", "$type", "LineString"], ["==", "class", "taxiway"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 11,
      metadata: {},
      "source-layer": "aeroway",
    },
    {
      id: "ferry",
      type: "line",
      paint: {
        "line-color": "rgba(108, 159, 182, 1)",
        "line-width": 1.1,
        "line-dasharray": [2, 2],
      },
      filter: ["all", ["in", "class", "ferry"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      "source-layer": "transportation",
    },
    {
      id: "tunnel_motorway_link_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
        "line-opacity": 1,
        "line-dasharray": [0.5, 0.25],
      },
      filter: ["all", ["==", "class", "motorway"], ["==", "ramp", 1], ["==", "brunnel", "tunnel"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_service_track_casing",
      type: "line",
      paint: {
        "line-color": "#cfcdca",
        "line-width": {
          base: 1.2,
          stops: [
            [15, 1],
            [16, 4],
            [20, 11],
          ],
        },
        "line-dasharray": [0.5, 0.25],
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "service", "track"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_link_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "ramp", "1"], ["==", "brunnel", "tunnel"], [">", "layer", 0]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_street_casing",
      type: "line",
      paint: {
        "line-color": "#cfcdca",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 0.5],
            [13, 1],
            [14, 4],
            [20, 15],
          ],
        },
        "line-opacity": {
          stops: [
            [12, 0],
            [12.5, 1],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "street", "street_limited"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_secondary_tertiary_casing",
      type: "line",
      paint: {
        "line-color": "rgba(195, 189, 187, 1)",
        "line-width": {
          base: 1.2,
          stops: [
            [8, 1.5],
            [20, 17],
          ],
        },
        "line-opacity": 1,
        "line-dasharray": [0.5, 0.25],
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "secondary", "tertiary"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_trunk_primary_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
        "line-dasharray": [0.5, 0.25],
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "primary", "trunk"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_motorway_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
        "line-dasharray": [0.5, 0.25],
      },
      filter: ["all", ["==", "class", "motorway"], ["==", "brunnel", "tunnel"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_path_pedestrian",
      type: "line",
      paint: {
        "line-color": "rgba(204, 196, 176, 0.45)",
        "line-width": {
          base: 1.2,
          stops: [
            [14, 0.5],
            [20, 6],
          ],
        },
        "line-dasharray": [1, 0.75],
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"],
        ["in", "class", "path", "pedestrian"],
      ],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_motorway_link",
      type: "line",
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      filter: [
        "all",
        ["==", "class", "motorway_link"],
        ["==", "ramp", 1],
        ["==", "brunnel", "tunnel"],
      ],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_service_track",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "service", "track"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_service_track_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "service_construction", "track_construction"],
      ],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_link",
      type: "line",
      paint: {
        "line-color": "#fff4c6",
        "line-width": {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      filter: ["all", ["==", "ramp", "1"], ["==", "brunnel", "tunnel"], [">", "layer", 0]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_minor",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 11.5],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "minor"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_minor_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 11.5],
          ],
        },
        "line-opacity": 1,
        "line-dasharray": [2, 2],
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "minor_construction"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_secondary_tertiary",
      type: "line",
      paint: {
        "line-color": "rgba(245, 245, 243, 1)",
        "line-width": {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "secondary", "tertiary"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_secondary_tertiary_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "secondary_construction", "tertiary_construction"],
      ],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_trunk_primary",
      type: "line",
      paint: {
        "line-color": "#fff4c6",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "primary", "trunk"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_trunk_primary_construction",
      type: "line",
      paint: {
        "line-color": "#fff4c6",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "primary_construction", "trunk_construction"],
      ],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_motorway",
      type: "line",
      paint: {
        "line-color": "#ffdaa6",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      filter: ["all", ["==", "class", "motorway"], ["==", "brunnel", "tunnel"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_motorway_construction",
      type: "line",
      paint: {
        "line-color": "#ffdaa6",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: ["all", ["==", "class", "motorway_construction"], ["==", "brunnel", "tunnel"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_major_rail",
      type: "line",
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [
            [14, 0.4],
            [15, 0.75],
            [20, 2],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["in", "class", "rail"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "tunnel_major_rail_hatching",
      type: "line",
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [
            [14.5, 0],
            [15, 3],
            [20, 8],
          ],
        },
        "line-dasharray": [0.2, 8],
      },
      filter: ["all", ["==", "brunnel", "tunnel"], ["==", "class", "rail"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_area_pier",
      type: "fill",
      paint: {
        "fill-color": "rgba(246, 241, 229, 1)",
        "fill-antialias": true,
      },
      filter: ["all", ["==", "$type", "Polygon"], ["==", "class", "pier"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_pier",
      type: "line",
      paint: {
        "line-color": "rgba(246, 241, 229, 1)",
        "line-width": {
          base: 1.2,
          stops: [
            [15, 1],
            [17, 4],
          ],
        },
      },
      filter: ["all", ["==", "$type", "LineString"], ["in", "class", "pier"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_area_bridge",
      type: "fill",
      paint: {
        "fill-color": "rgba(246, 241, 229, 0.6)",
        "fill-antialias": true,
      },
      filter: ["all", ["==", "$type", "Polygon"], ["==", "brunnel", "bridge"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_area_pattern",
      type: "fill",
      paint: {
        "fill-pattern": "pedestrian_polygon",
      },
      filter: [
        "all",
        ["==", "$type", "Polygon"],
        ["!has", "brunnel"],
        ["!in", "class", "bridge", "pier"],
      ],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_service_track_casing",
      type: "line",
      paint: {
        "line-color": "#cfcdca",
        "line-width": {
          base: 1.2,
          stops: [
            [15, 1],
            [16, 4],
            [20, 11],
          ],
        },
      },
      filter: ["all", ["!in", "brunnel", "bridge", "tunnel"], ["in", "class", "service", "track"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_link_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
        "line-opacity": 1,
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["!in", "class", "motorway", "trunk", "primary", "pedestrian", "path", "track", "service"],
        ["==", "ramp", 1],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 13,
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_trunk_primary_link_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 0.7],
            [20, 14],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "ramp", 1],
        ["in", "class", "primary", "trunk"],
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_motorway_link_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
        "line-opacity": 1,
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
        ["==", "ramp", 1],
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 12,
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_minor_casing",
      type: "line",
      paint: {
        "line-color": "#cfcdca",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 0.5],
            [13, 1],
            [14, 4],
            [20, 20],
          ],
        },
        "line-opacity": {
          stops: [
            [12, 0],
            [12.5, 1],
          ],
        },
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "minor"],
        ["!=", "ramp", "1"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_secondary_tertiary_casing-copy",
      type: "line",
      paint: {
        "line-color": "rgba(195, 189, 187, 1)",
        "line-width": {
          base: 1.2,
          stops: [
            [8, 1.5],
            [20, 17],
          ],
        },
        "line-opacity": 1,
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "secondary", "tertiary"],
        ["!=", "ramp", 1],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_trunk_primary_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
        "line-opacity": 1,
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["!=", "ramp", 1],
        ["in", "class", "primary", "trunk"],
        ["!=", "ramp", 1],
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_motorway_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
        ["!=", "ramp", 1],
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 5,
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_path_pedestrian",
      type: "line",
      paint: {
        "line-color": "rgba(204, 196, 176, 0.45)",
        "line-width": {
          base: 1.2,
          stops: [
            [14, 1],
            [20, 6],
          ],
        },
        "line-dasharray": [1, 1],
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "path", "pedestrian"],
      ],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 14,
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_link",
      type: "line",
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "ramp", 1],
        ["!in", "class", "motorway", "trunk", "primary", "pedestrian", "path", "track", "service"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 13,
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_trunk_primary_link",
      type: "line",
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 0.5],
            [20, 10],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "ramp", 1],
        ["in", "class", "primary", "trunk"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_motorway_link",
      type: "line",
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
        ["==", "ramp", 1],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 12,
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_service_track",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      filter: ["all", ["!in", "brunnel", "bridge", "tunnel"], ["in", "class", "service", "track"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_service_track_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "service_construction", "track_construction"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_minor",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
        "line-opacity": 1,
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["!in", "brunnel", "bridge", "tunnel"], ["in", "class", "minor"]],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_minor_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
        "line-opacity": 1,
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["!in", "brunnel", "bridge", "tunnel"], ["in", "class", "minor_construction"]],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_secondary_tertiary",
      type: "line",
      paint: {
        "line-color": "rgba(245, 245, 243, 1)",
        "line-width": {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "secondary", "tertiary"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_secondary_tertiary_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "secondary_construction", "tertiary_construction"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_trunk_primary",
      type: "line",
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["!=", "ramp", 1],
        ["in", "class", "primary", "trunk"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_trunk_primary_construction",
      type: "line",
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["!=", "ramp", 1],
        ["in", "class", "primary_construction", "trunk_construction"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_motorway",
      type: "line",
      paint: {
        "line-color": {
          base: 1,
          stops: [
            [5, "hsl(26, 87%, 62%)"],
            [6, "#fc8"],
          ],
        },
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"],
        ["!=", "ramp", 1],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 5,
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_motorway_construction",
      type: "line",
      paint: {
        "line-color": {
          base: 1,
          stops: [
            [5, "hsl(26, 87%, 62%)"],
            [6, "#fc8"],
          ],
        },
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway_construction"],
        ["!=", "ramp", 1],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 5,
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_major_rail",
      type: "line",
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [
            [14, 0.4],
            [15, 0.75],
            [20, 2],
          ],
        },
      },
      filter: ["all", ["!in", "brunnel", "bridge", "tunnel"], ["in", "class", "rail"]],
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_major_rail_hatching",
      type: "line",
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [
            [14.5, 0],
            [15, 3],
            [20, 8],
          ],
        },
        "line-dasharray": [0.2, 8],
      },
      filter: ["all", ["!in", "brunnel", "bridge", "tunnel"], ["==", "class", "rail"]],
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_minor_rail",
      type: "line",
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [
            [14, 0.4],
            [15, 0.75],
            [20, 2],
          ],
        },
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "subclass", "tram", "light_rail"],
      ],
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "road_minor_rail_hatching",
      type: "line",
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [
            [14.5, 0],
            [15, 2],
            [20, 6],
          ],
        },
        "line-dasharray": [0.2, 4],
      },
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "subclass", "tram", "light_rail"],
      ],
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "building",
      type: "fill",
      paint: {
        "fill-color": "rgba(189, 185, 181, 0.3)",
        "fill-outline-color": {
          base: 1,
          stops: [
            [13, "hsla(35, 6%, 79%, 0.32)"],
            [14, "hsl(35, 6%, 79%)"],
          ],
        },
      },
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      maxzoom: 14,
      minzoom: 13,
      metadata: {},
      "source-layer": "building",
    },
    {
      id: "building-3d",
      type: "fill-extrusion",
      paint: {
        "fill-extrusion-base": {
          type: "identity",
          property: "render_min_height",
        },
        "fill-extrusion-color": "rgba(189, 185, 181, 1)",
        "fill-extrusion-height": {
          type: "identity",
          property: "render_height",
        },
        "fill-extrusion-opacity": 0.3,
      },
      filter: ["all", ["!has", "hide_3d"]],
      layout: {
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 14,
      metadata: {},
      "source-layer": "building",
    },
    {
      id: "waterway-bridge-case",
      type: "line",
      paint: {
        "line-color": "#bbbbbb",
        "line-width": {
          base: 1.6,
          stops: [
            [12, 0.5],
            [20, 5],
          ],
        },
        "line-gap-width": {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
      },
      filter: ["all", ["==", "$type", "LineString"], ["==", "brunnel", "bridge"]],
      layout: {
        "line-cap": "butt",
        "line-join": "miter",
      },
      source: "openmaptiles",
      "source-layer": "waterway",
    },
    {
      id: "waterway-bridge",
      type: "line",
      paint: {
        "line-color": "rgba(134, 204, 250, 1)",
        "line-width": {
          base: 1.3,
          stops: [
            [13, 0.5],
            [20, 6],
          ],
        },
      },
      filter: ["all", ["==", "$type", "LineString"], ["==", "brunnel", "bridge"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      source: "openmaptiles",
      "source-layer": "waterway",
    },
    {
      id: "bridge_motorway_link_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "class", "motorway"], ["==", "ramp", 1], ["==", "brunnel", "bridge"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_service_track_casing",
      type: "line",
      paint: {
        "line-color": "#cfcdca",
        "line-width": {
          base: 1.2,
          stops: [
            [15, 1],
            [16, 4],
            [20, 11],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "service", "track"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_link_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 1],
            [13, 3],
            [14, 4],
            [20, 15],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "class", "link"], ["==", "brunnel", "bridge"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_street_casing",
      type: "line",
      paint: {
        "line-color": "hsl(36, 6%, 74%)",
        "line-width": {
          base: 1.2,
          stops: [
            [12, 0.5],
            [13, 1],
            [14, 4],
            [20, 25],
          ],
        },
        "line-opacity": {
          stops: [
            [12, 0],
            [12.5, 1],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "street", "street_limited"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_path_pedestrian_casing",
      type: "line",
      paint: {
        "line-color": "hsl(35, 6%, 80%)",
        "line-width": {
          base: 1.2,
          stops: [
            [14, 1.5],
            [20, 18],
          ],
        },
        "line-dasharray": [1, 0],
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["in", "class", "path", "pedestrian"],
      ],
      layout: {
        "line-join": "miter",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_secondary_tertiary_casing",
      type: "line",
      paint: {
        "line-color": "rgba(195, 189, 187, 1)",
        "line-width": {
          base: 1.2,
          stops: [
            [8, 1.5],
            [20, 17],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "secondary", "tertiary"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_trunk_primary_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "primary", "trunk"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_motorway_casing",
      type: "line",
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0.4],
            [6, 0.7],
            [7, 1.75],
            [20, 22],
          ],
        },
      },
      filter: ["all", ["==", "class", "motorway"], ["==", "brunnel", "bridge"], ["!=", "ramp", 1]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_path_pedestrian",
      type: "line",
      paint: {
        "line-color": "hsl(0, 0%, 100%)",
        "line-width": {
          base: 1.2,
          stops: [
            [14, 0.5],
            [20, 10],
          ],
        },
        "line-dasharray": [1, 0.3],
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["in", "class", "path", "pedestrian"],
      ],
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_motorway_link",
      type: "line",
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      filter: ["all", ["==", "class", "motorway"], ["==", "ramp", 1], ["==", "brunnel", "bridge"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_service_track",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "service", "track"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_service_track_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [15.5, 0],
            [16, 2],
            [20, 7.5],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "service_construction", "track_construction"],
      ],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_link",
      type: "line",
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [
            [12.5, 0],
            [13, 1.5],
            [14, 2.5],
            [20, 11.5],
          ],
        },
      },
      filter: ["all", ["==", "class", "link"], ["==", "brunnel", "bridge"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_minor",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "minor"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_minor_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [13.5, 0],
            [14, 2.5],
            [20, 18],
          ],
        },
        "line-opacity": 1,
        "line-dasharray": [2, 2],
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "minor_construction"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_secondary_tertiary",
      type: "line",
      paint: {
        "line-color": "rgba(245, 245, 243, 1)",
        "line-width": {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "secondary", "tertiary"]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_secondary_tertiary_construction",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [
            [6.5, 0],
            [8, 0.5],
            [20, 13],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "secondary_construction", "tertiary_construction"],
      ],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_trunk_primary",
      type: "line",
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      filter: ["all", ["==", "brunnel", "bridge"], ["in", "class", "primary", "trunk"]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_trunk_primary_construction",
      type: "line",
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary_construction", "trunk_construction"],
      ],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_motorway",
      type: "line",
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
      },
      filter: ["all", ["==", "class", "motorway"], ["==", "brunnel", "bridge"], ["!=", "ramp", 1]],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_motorway_construction",
      type: "line",
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [
            [5, 0],
            [7, 1],
            [20, 18],
          ],
        },
        "line-dasharray": [2, 2],
      },
      filter: [
        "all",
        ["==", "class", "motorway_construction"],
        ["==", "brunnel", "bridge"],
        ["!=", "ramp", 1],
      ],
      layout: {
        "line-join": "round",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_major_rail",
      type: "line",
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [
            [14, 0.4],
            [15, 0.75],
            [20, 2],
          ],
        },
      },
      filter: ["all", ["==", "class", "rail"], ["==", "brunnel", "bridge"]],
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "bridge_major_rail_hatching",
      type: "line",
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [
            [14.5, 0],
            [15, 3],
            [20, 8],
          ],
        },
        "line-dasharray": [0.2, 8],
      },
      filter: ["all", ["==", "class", "rail"], ["==", "brunnel", "bridge"]],
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation",
    },
    {
      id: "cablecar",
      type: "line",
      paint: {
        "line-color": "hsl(0, 0%, 70%)",
        "line-width": {
          base: 1,
          stops: [
            [11, 1],
            [19, 2.5],
          ],
        },
      },
      filter: ["==", "class", "aerialway"],
      layout: {
        "line-cap": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 13,
      "source-layer": "transportation",
    },
    {
      id: "cablecar-dash",
      type: "line",
      paint: {
        "line-color": "hsl(0, 0%, 70%)",
        "line-width": {
          base: 1,
          stops: [
            [11, 3],
            [19, 5.5],
          ],
        },
        "line-dasharray": [2, 3],
      },
      filter: ["==", "class", "aerialway"],
      layout: {
        "line-cap": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 13,
      "source-layer": "transportation",
    },
    {
      id: "boundary_3",
      type: "line",
      paint: {
        "line-color": "#9e9cab",
        "line-width": {
          base: 1,
          stops: [
            [4, 0.4],
            [5, 0.7],
            [12, 1.6],
          ],
        },
        "line-dasharray": [5, 3],
      },
      filter: ["all", ["in", "admin_level", 3, 4], ["==", "maritime", 0]],
      layout: {
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 3,
      metadata: {},
      "source-layer": "boundary",
    },
    {
      id: "boundary_2_z0-4",
      type: "line",
      paint: {
        "line-color": "rgba(139, 139, 139, 1)",
        "line-width": {
          base: 1,
          stops: [
            [3, 1],
            [5, 1.2],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "admin_level", 2], ["==", "maritime", 0], ["!has", "claimed_by"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      maxzoom: 5,
      minzoom: 0,
      metadata: {},
      "source-layer": "boundary",
    },
    {
      id: "boundary_2_z0-4_maritime",
      type: "line",
      paint: {
        "line-color": "rgba(98,185,229,1)",
        "line-width": {
          base: 1,
          stops: [
            [3, 1],
            [5, 1.2],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "admin_level", 2], ["!has", "claimed_by"], ["==", "maritime", 1]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      maxzoom: 5,
      minzoom: 0,
      metadata: {},
      "source-layer": "boundary",
    },
    {
      id: "boundary_2_z5",
      type: "line",
      paint: {
        "line-color": "rgba(139, 139, 139, 1)",
        "line-width": {
          base: 1,
          stops: [
            [5, 1.2],
            [12, 3],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "admin_level", 2], ["==", "disputed", 0], ["==", "maritime", 0]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 5,
      metadata: {},
      "source-layer": "boundary",
    },
    {
      id: "boundary_2_z5_disputed",
      type: "line",
      paint: {
        "line-color": "rgba(120, 120, 120, 1)",
        "line-width": {
          base: 1,
          stops: [
            [5, 1.2],
            [12, 3],
          ],
        },
        "line-opacity": 1,
        "line-dasharray": [4, 3],
      },
      filter: ["all", ["==", "admin_level", 2], ["==", "disputed", 1], ["==", "maritime", 0]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 5,
      metadata: {},
      "source-layer": "boundary",
    },
    {
      id: "boundary_2_z5_disputed_maritime",
      type: "line",
      paint: {
        "line-color": "rgba(98,185,229,1)",
        "line-width": {
          base: 1,
          stops: [
            [5, 1.2],
            [12, 3],
          ],
        },
        "line-opacity": 1,
        "line-dasharray": [4, 3],
      },
      filter: ["all", ["==", "admin_level", 2], ["==", "disputed", 1], ["==", "maritime", 1]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 5,
      metadata: {},
      "source-layer": "boundary",
    },
    {
      id: "boundary_2_z5_maritime",
      type: "line",
      paint: {
        "line-color": "rgba(98,185,229,1)",
        "line-width": {
          base: 1,
          stops: [
            [5, 1.2],
            [12, 3],
          ],
        },
        "line-opacity": 1,
      },
      filter: ["all", ["==", "admin_level", 2], ["==", "disputed", 0], ["==", "maritime", 1]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "openmaptiles",
      minzoom: 5,
      metadata: {},
      "source-layer": "boundary",
    },
    {
      id: "water_name_line",
      type: "symbol",
      paint: {
        "text-color": "#5d60be",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1,
      },
      filter: ["all", ["==", "$type", "LineString"]],
      layout: {
        "text-font": ["Roboto Regular", "Noto Sans Regular"],
        "text-size": 12,
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-max-width": 5,
        "symbol-placement": "line",
      },
      source: "openmaptiles",
      minzoom: 0,
      metadata: {},
      "source-layer": "water_name",
    },
    {
      id: "water_name_point",
      type: "symbol",
      paint: {
        "text-color": "rgba(76, 125, 173, 1)",
        "text-halo-color": "rgba(255,255,255,0)",
        "text-halo-width": 1,
      },
      filter: ["all", ["==", "$type", "Point"], ["!=", "class", "ocean"]],
      layout: {
        "text-font": ["Roboto Regular", "Noto Sans Regular"],
        "text-size": 12,
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-max-width": 5,
      },
      source: "openmaptiles",
      maxzoom: 24,
      minzoom: 2,
      metadata: {},
      "source-layer": "water_name",
    },
    {
      id: "water_ocean_name_point",
      type: "symbol",
      paint: {
        "text-color": "rgba(76, 125, 173, 1)",
        "text-halo-color": "rgba(255,255,255,0)",
        "text-halo-width": 1,
      },
      filter: ["all", ["==", "$type", "Point"], ["==", "class", "ocean"]],
      layout: {
        "text-font": ["Roboto Regular", "Noto Sans Regular"],
        "text-size": 12,
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-max-width": 5,
      },
      source: "openmaptiles",
      minzoom: 0,
      metadata: {},
      "source-layer": "water_name",
    },
    {
      id: "poi_z16_subclass",
      type: "symbol",
      paint: {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
      },
      filter: [
        "all",
        ["==", "$type", "Point"],
        [">=", "rank", 20],
        [
          "any",
          [
            "all",
            ["in", "class", "pitch"],
            ["in", "subclass", "soccer", "tennis", "baseball", "basketball", "swimming", "golf"],
          ],
        ],
        ["any", ["!has", "level"], ["==", "level", 0]],
      ],
      layout: {
        "text-font": textFont,
        "text-size": 12,
        "icon-image": "{subclass}_11",
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "top",
        "text-offset": [0, 0.6],
        "text-padding": 2,
        "text-max-width": 9,
      },
      source: "openmaptiles",
      minzoom: 16,
      metadata: {},
      "source-layer": "poi",
    },
    {
      id: "poi_z16",
      type: "symbol",
      paint: {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
      },
      filter: [
        "all",
        ["==", "$type", "Point"],
        [">=", "rank", 20],
        [
          "none",
          [
            "all",
            ["in", "class", "pitch"],
            ["in", "subclass", "soccer", "tennis", "baseball", "basketball", "swimming", "golf"],
          ],
        ],
        ["any", ["!has", "level"], ["==", "level", 0]],
      ],
      layout: {
        "text-font": textFont,
        "text-size": 12,
        "icon-image": "{class}_11",
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "top",
        "text-offset": [0, 0.6],
        "text-padding": 2,
        "text-max-width": 9,
      },
      source: "openmaptiles",
      minzoom: 16,
      metadata: {},
      "source-layer": "poi",
    },
    {
      id: "poi_z15",
      type: "symbol",
      paint: {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
      },
      filter: [
        "all",
        ["==", "$type", "Point"],
        [">=", "rank", 7],
        ["<", "rank", 20],
        ["any", ["!has", "level"], ["==", "level", 0]],
      ],
      layout: {
        "text-font": textFont,
        "text-size": 12,
        "icon-image": "{class}_11",
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "top",
        "text-offset": [0, 0.6],
        "text-padding": 2,
        "text-max-width": 9,
      },
      source: "openmaptiles",
      minzoom: 15,
      metadata: {},
      "source-layer": "poi",
    },
    {
      id: "poi_z14",
      type: "symbol",
      paint: {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
      },
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["any", ["<", "rank", 7]],
        ["any", ["!has", "level"], ["==", "level", 0]],
      ],
      layout: {
        "icon-size": 0.9,
        "text-font": textFont,
        "text-size": 12,
        "icon-image": "{class}_11",
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "top",
        "text-offset": [0, 0.6],
        "text-padding": 2,
        "text-max-width": 9,
      },
      source: "openmaptiles",
      minzoom: 14.2,
      metadata: {},
      "source-layer": "poi",
    },
    {
      id: "poi_transit",
      type: "symbol",
      paint: {
        "text-color": "rgba(102, 102, 102, 1)",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
      },
      filter: ["all", ["in", "class", "bus", "railway", "airport"], ["==", "subclass", "station"]],
      layout: {
        "icon-size": 0.9,
        "text-font": textFont,
        "text-size": 12,
        "icon-image": "{class}_11",
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "left",
        "text-offset": [0.9, 0],
        "text-padding": 2,
        "text-max-width": 9,
      },
      source: "openmaptiles",
      minzoom: 15,
      metadata: {},
      "source-layer": "poi",
    },
    {
      id: "road_oneway",
      type: "symbol",
      paint: {
        "icon-opacity": 0.5,
      },
      filter: [
        "all",
        ["==", "oneway", 1],
        [
          "in",
          "class",
          "motorway",
          "trunk",
          "primary",
          "secondary",
          "tertiary",
          "minor",
          "service",
        ],
      ],
      layout: {
        "icon-size": {
          stops: [
            [15, 0.5],
            [19, 1],
          ],
        },
        "icon-image": "oneway",
        visibility: "visible",
        "icon-rotate": 90,
        "icon-padding": 2,
        "symbol-spacing": 75,
        "symbol-placement": "line",
        "icon-rotation-alignment": "map",
      },
      source: "openmaptiles",
      minzoom: 15,
      "source-layer": "transportation",
    },
    {
      id: "road_oneway_opposite",
      type: "symbol",
      paint: {
        "icon-opacity": 0.5,
      },
      filter: [
        "all",
        ["==", "oneway", -1],
        [
          "in",
          "class",
          "motorway",
          "trunk",
          "primary",
          "secondary",
          "tertiary",
          "minor",
          "service",
        ],
      ],
      layout: {
        "icon-size": {
          stops: [
            [15, 0.5],
            [19, 1],
          ],
        },
        "icon-image": "oneway",
        "icon-rotate": -90,
        "icon-padding": 2,
        "symbol-spacing": 75,
        "symbol-placement": "line",
        "icon-rotation-alignment": "map",
      },
      source: "openmaptiles",
      minzoom: 15,
      "source-layer": "transportation",
    },
    {
      id: "road_label",
      type: "symbol",
      paint: {
        "text-color": "#765",
        "text-halo-blur": 0.5,
        "text-halo-width": 1,
      },
      filter: ["all"],
      layout: {
        "text-font": ["Roboto Regular", "Noto Sans Regular"],
        "text-size": {
          base: 1,
          stops: [
            [13, 12],
            [14, 13],
          ],
        },
        "text-field": "{name:ko} {name:nonlatin}",
        "text-anchor": "center",
        "text-offset": [0, 0.15],
        "symbol-placement": "line",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation_name",
    },
    {
      id: "highway-shield",
      type: "symbol",
      paint: {
        "text-color": "rgba(37, 36, 36, 1)",
      },
      filter: [
        "all",
        ["<=", "ref_length", 6],
        ["==", "$type", "LineString"],
        ["!in", "network", "us-interstate", "us-highway", "us-state"],
      ],
      layout: {
        "icon-size": 1,
        "text-font": ["Noto Sans Regular"],
        "text-size": 10,
        "icon-image": "road_{ref_length}",
        "text-field": "{ref}",
        "symbol-spacing": 200,
        "symbol-placement": {
          base: 1,
          stops: [
            [10, "point"],
            [11, "line"],
          ],
        },
        "symbol-avoid-edges": true,
        "icon-rotation-alignment": "viewport",
        "text-rotation-alignment": "viewport",
      },
      source: "openmaptiles",
      minzoom: 8,
      "source-layer": "transportation_name",
    },
    {
      id: "highway-shield-us-interstate",
      type: "symbol",
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
      },
      filter: [
        "all",
        ["<=", "ref_length", 6],
        ["==", "$type", "LineString"],
        ["in", "network", "us-interstate"],
      ],
      layout: {
        "icon-size": 1,
        "text-font": ["Noto Sans Regular"],
        "text-size": 9,
        "icon-image": "{network}_{ref_length}",
        "text-field": "{ref}",
        "symbol-spacing": 200,
        "symbol-placement": {
          base: 1,
          stops: [
            [7, "point"],
            [7, "line"],
            [8, "line"],
          ],
        },
        "symbol-avoid-edges": true,
        "icon-rotation-alignment": "viewport",
        "text-rotation-alignment": "viewport",
      },
      source: "openmaptiles",
      minzoom: 7,
      "source-layer": "transportation_name",
    },
    {
      id: "highway-shield-us-other",
      type: "symbol",
      paint: {
        "text-color": "rgba(37, 36, 36, 1)",
      },
      filter: [
        "all",
        ["<=", "ref_length", 6],
        ["==", "$type", "LineString"],
        ["in", "network", "us-highway", "us-state"],
      ],
      layout: {
        "icon-size": 1,
        "text-font": ["Noto Sans Regular"],
        "text-size": 9,
        "icon-image": "{network}_{ref_length}",
        "text-field": "{ref}",
        "symbol-spacing": 200,
        "symbol-placement": {
          base: 1,
          stops: [
            [10, "point"],
            [11, "line"],
          ],
        },
        "symbol-avoid-edges": true,
        "icon-rotation-alignment": "viewport",
        "text-rotation-alignment": "viewport",
      },
      source: "openmaptiles",
      minzoom: 9,
      "source-layer": "transportation_name",
    },
    {
      id: "airport-label-major",
      type: "symbol",
      paint: {
        "text-color": "#666",
        "text-halo-blur": 0.5,
        "text-halo-color": "#ffffff",
        "text-halo-width": 1,
      },
      filter: ["all", ["has", "iata"]],
      layout: {
        "icon-size": 1,
        "text-font": ["Noto Sans Regular"],
        "text-size": 12,
        "icon-image": "airport_11",
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "top",
        "text-offset": [0, 0.6],
        "text-padding": 2,
        "text-optional": true,
        "text-max-width": 9,
      },
      source: "openmaptiles",
      minzoom: 10,
      "source-layer": "aerodrome_label",
    },
    {
      id: "airport_gate",
      type: "symbol",
      paint: {
        "text-color": "rgba(135, 135, 135, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1.5,
      },
      filter: ["all", ["==", "class", "gate"]],
      layout: {
        "text-font": ["Roboto Medium", "Noto Sans Regular"],
        "text-size": {
          stops: [
            [17, 9],
            [19, 15],
          ],
        },
        "text-field": "{ref}",
      },
      source: "openmaptiles",
      minzoom: 16.5,
      "source-layer": "aeroway",
    },
    {
      id: "place_other",
      type: "symbol",
      paint: {
        "text-color": "rgba(66, 62, 62, 1)",
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1.2,
      },
      filter: ["all", ["in", "class", "hamlet", "island", "islet", "neighbourhood", "suburb"]],
      layout: {
        "text-font": textFont,
        "text-size": {
          base: 1.2,
          stops: [
            [12, 10],
            [15, 14],
          ],
        },
        "text-field": "{name:ko}\n{name:nonlatin}",
        visibility: "visible",
        "text-max-width": 9,
        "text-transform": "uppercase",
        "text-letter-spacing": 0.1,
      },
      source: "openmaptiles",
      minzoom: 8,
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "place_village",
      type: "symbol",
      paint: {
        "text-color": "#333",
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1.2,
      },
      filter: ["all", ["==", "class", "village"]],
      layout: {
        "text-font": ["Roboto Regular", "Noto Sans Regular"],
        "text-size": {
          base: 1.2,
          stops: [
            [10, 12],
            [15, 22],
          ],
        },
        "text-field": "{name:ko}\n{name:nonlatin}",
        "text-max-width": 8,
      },
      source: "openmaptiles",
      minzoom: 8,
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "place_town",
      type: "symbol",
      paint: {
        "text-color": "#333",
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1.2,
      },
      filter: ["all", ["==", "class", "town"]],
      layout: {
        "text-font": ["Roboto Regular", "Noto Sans Regular"],
        "text-size": {
          base: 1.2,
          stops: [
            [7, 12],
            [11, 16],
          ],
        },
        "icon-image": {
          base: 1,
          stops: [
            [0, "circle-stroked_16"],
            [10, ""],
          ],
        },
        "text-field": "{name:ko}\n{name:nonlatin}",
        "text-anchor": "bottom",
        "text-offset": [0, 0],
        "text-max-width": 8,
      },
      source: "openmaptiles",
      minzoom: 6,
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "place_city",
      type: "symbol",
      paint: {
        "text-color": "#333",
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1.2,
      },
      filter: ["all", ["==", "class", "city"]],
      layout: {
        "text-font": ["Roboto Medium", "Noto Sans Regular"],
        "text-size": {
          base: 1.2,
          stops: [
            [7, 14],
            [11, 24],
          ],
        },
        "icon-image": {
          base: 1,
          stops: [
            [0, "circle-stroked_16"],
            [10, ""],
          ],
        },
        "text-field": "{name:ko}\n{name:nonlatin}",
        "text-anchor": "bottom",
        "text-offset": [0, 0],
        "icon-optional": false,
        "text-max-width": 8,
        "icon-allow-overlap": true,
      },
      source: "openmaptiles",
      minzoom: 5,
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "place_state",
      type: "symbol",
      paint: {
        "text-color": "rgba(74, 72, 66, 1)",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 0.8,
      },
      filter: ["all", ["==", "class", "state"]],
      layout: {
        "text-font": ["Roboto Medium", "Noto Sans Regular"],
        "text-size": {
          stops: [
            [3, 10],
            [6, 14],
          ],
        },
        "text-field": "{name:ko}\n{name:nonlatin}",
        "text-padding": 2,
        "text-transform": "uppercase",
        "text-letter-spacing": 0.1,
      },
      source: "openmaptiles",
      maxzoom: 6,
      minzoom: 3,
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "country_other",
      type: "symbol",
      paint: {
        "text-color": "#334",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 0.8,
      },
      filter: ["all", ["==", "class", "country"], ["!has", "iso_a2"]],
      layout: {
        "text-font": textFont,
        "text-size": {
          stops: [
            [3, 9],
            [7, 15],
          ],
        },
        "text-field": "{name:ko}",
        "text-max-width": 6.25,
        "text-transform": "none",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "country_3",
      type: "symbol",
      paint: {
        "text-color": "#334",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 0.8,
      },
      filter: ["all", [">=", "rank", 3], ["==", "class", "country"], ["has", "iso_a2"]],
      layout: {
        "text-font": textFont,
        "text-size": {
          stops: [
            [3, 11],
            [7, 17],
          ],
        },
        "text-field": "{name:ko}",
        "text-max-width": 6.25,
        "text-transform": "none",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "country_2",
      type: "symbol",
      paint: {
        "text-color": "#334",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 0.8,
      },
      filter: ["all", ["==", "rank", 2], ["==", "class", "country"], ["has", "iso_a2"]],
      layout: {
        "text-font": textFont,
        "text-size": {
          stops: [
            [2, 11],
            [5, 17],
          ],
        },
        "text-field": "{name:ko}",
        "text-max-width": 6.25,
        "text-transform": "none",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "country_1",
      type: "symbol",
      paint: {
        "text-color": "#334",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 0.8,
      },
      filter: ["all", ["==", "rank", 1], ["==", "class", "country"], ["has", "iso_a2"]],
      layout: {
        "text-font": textFont,
        "text-size": {
          stops: [
            [1, 11],
            [4, 17],
            [6, 19],
          ],
        },
        "text-field": "{name:ko}",
        "text-max-width": 6.25,
        "text-transform": "none",
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "continent",
      type: "symbol",
      paint: {
        "text-color": "#633",
        "text-halo-color": "rgba(255,255,255,0.7)",
        "text-halo-width": 1,
      },
      filter: ["all", ["==", "class", "continent"]],
      layout: {
        "text-font": textFont,
        "text-size": 13,
        "text-field": "{name:ko}",
        "text-justify": "center",
        "text-transform": "uppercase",
      },
      source: "openmaptiles",
      maxzoom: 1,
      metadata: {},
      "source-layer": "place",
    },
    {
      id: "housenumber",
      type: "symbol",
      paint: {
        "text-color": "rgba(119, 102, 85, 0.69)",
      },
      layout: {
        "text-font": ["Roboto Medium", "Noto Sans Regular"],
        "text-size": 10,
        "text-field": "{housenumber}",
      },
      source: "openmaptiles",
      minzoom: 17.5,
      "source-layer": "housenumber",
    },
  ],
};

export default style;
