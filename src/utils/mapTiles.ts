import type { TileLayerOptions } from 'leaflet'

const CARTO_KEY = import.meta.env.VITE_CARTO_API_KEY?.trim()

const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

/** Carto Voyager when a key is set; OSM otherwise (Carto watermarks raster tiles without a key). */
export const MAP_TILE_URL = CARTO_KEY
  ? `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${encodeURIComponent(CARTO_KEY)}`
  : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

export const MAP_TILE_OPTIONS: TileLayerOptions = CARTO_KEY
  ? {
      attribution: `${OSM_ATTRIBUTION} &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      subdomains: 'abcd',
      maxZoom: 20,
    }
  : {
      attribution: OSM_ATTRIBUTION,
      subdomains: 'abc',
      maxZoom: 19,
    }
