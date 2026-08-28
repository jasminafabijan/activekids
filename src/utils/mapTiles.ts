import type { TileLayerOptions } from 'leaflet'

/**
 * Public Carto basemap key (it is embedded in the client bundle either way).
 * Override with VITE_CARTO_API_KEY when rotating the key.
 */
const CARTO_KEY =
  import.meta.env.VITE_CARTO_API_KEY?.trim() || 'cb1_2gm0_1_8ead21add422c9d387070e8e'

const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

export const MAP_TILE_URL = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${encodeURIComponent(CARTO_KEY)}`

export const MAP_TILE_OPTIONS: TileLayerOptions = {
  attribution: `${OSM_ATTRIBUTION} &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  subdomains: 'abcd',
  maxZoom: 20,
}
