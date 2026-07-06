import L from 'leaflet'
import { useEffect, useMemo, useRef } from 'react'
import type { SchoolAddress } from '../data/schools'
import { formatSchoolAddress, getGoogleMapsOpenHref } from '../data/schools'
import 'leaflet/dist/leaflet.css'

const MAP_TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

const pinIcon = L.divIcon({
  className: 'school-map-pin',
  html: '<span class="school-map-pin-dot" aria-hidden="true"></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
})

const getMapCenter = (points: Array<{ lat: number; lng: number }>) => ({
  lat: points.reduce((sum, point) => sum + point.lat, 0) / points.length,
  lng: points.reduce((sum, point) => sum + point.lng, 0) / points.length,
})

const getMapZoom = (pointCount: number) => {
  if (pointCount === 1) return 16
  if (pointCount === 2) return 15
  return 13
}

interface SchoolMapProps {
  addresses: SchoolAddress[]
}

const SchoolMap = ({ addresses }: SchoolMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  const points = useMemo(
    () =>
      addresses.filter(
        (address): address is SchoolAddress & { lat: number; lng: number } =>
          address.lat != null && address.lng != null
      ),
    [addresses]
  )

  useEffect(() => {
    if (!mapRef.current || points.length === 0) return

    mapInstanceRef.current?.remove()
    mapInstanceRef.current = null

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    })

    L.tileLayer(MAP_TILE_URL, {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map)

    const markers = points.map((address) => {
      const marker = L.marker([address.lat, address.lng], { icon: pinIcon })
      marker.bindPopup(formatSchoolAddress(address))
      marker.addTo(map)
      return marker
    })

    const applyView = () => {
      map.invalidateSize()

      if (markers.length === 1) {
        map.setView([points[0].lat, points[0].lng], getMapZoom(1))
        return
      }

      const center = getMapCenter(points)
      map.setView([center.lat, center.lng], getMapZoom(points.length))
    }

    map.whenReady(applyView)
    requestAnimationFrame(applyView)

    mapInstanceRef.current = map

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [points])

  if (points.length === 0) return null

  return (
    <div className="school-detail-map">
      <div ref={mapRef} className="school-detail-map-canvas" />
      <div className="school-detail-map-footer">
        <a
          href={getGoogleMapsOpenHref(points)}
          target="_blank"
          rel="noopener noreferrer"
          className="school-detail-map-open-link"
        >
          Otvori u Google Maps
        </a>
      </div>
    </div>
  )
}

export default SchoolMap
