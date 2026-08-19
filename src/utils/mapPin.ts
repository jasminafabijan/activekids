import L from 'leaflet'

export const mapPinIcon = L.divIcon({
  className: 'school-map-pin',
  html: '<span class="school-map-pin-outer" aria-hidden="true"><span class="school-map-pin-dot"></span></span>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
})

export const attachActivePinState = (map: L.Map) => {
  const setActiveMarker = (active: L.Marker | null) => {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.getElement()?.classList.toggle('is-active', layer === active)
      }
    })
  }

  const onPopupOpen = (event: L.PopupEvent) => {
    const source = (event.popup as L.Popup & { _source?: L.Layer })._source
    setActiveMarker(source instanceof L.Marker ? source : null)
  }

  const onPopupClose = () => {
    setActiveMarker(null)
  }

  map.on('popupopen', onPopupOpen)
  map.on('popupclose', onPopupClose)

  return () => {
    map.off('popupopen', onPopupOpen)
    map.off('popupclose', onPopupClose)
  }
}
