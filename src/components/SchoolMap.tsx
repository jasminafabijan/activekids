import L from 'leaflet'
import { useEffect, useMemo, useRef } from 'react'
import type { School, SchoolAddress } from '../data/schools'
import { getGoogleMapsOpenHref } from '../data/schools'
import { attachActivePinState, mapPinIcon } from '../utils/mapPin'
import { attachMarkerOverlapZoom } from '../utils/mapOverlapZoom'
import { buildSchoolMapPopupHtml, schoolMapPopupOptions } from '../utils/mapPopup'
import 'leaflet/dist/leaflet.css'

const MAP_TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

const getMapZoom = (pointCount: number) => {
  if (pointCount === 1) return 16
  if (pointCount === 2) return 15
  return 13
}

interface SchoolMapProps {
  addresses: SchoolAddress[]
  school?: Pick<School, 'name' | 'ageLabel'>
}

const SchoolMap = ({ addresses, school }: SchoolMapProps) => {
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
      const marker = L.marker([address.lat, address.lng], { icon: mapPinIcon })
      marker.bindPopup(
        school
          ? buildSchoolMapPopupHtml(address.street, [
              { name: school.name, ageLabel: school.ageLabel },
            ])
          : buildSchoolMapPopupHtml(address.street, []),
        schoolMapPopupOptions
      )
      marker.addTo(map)
      return marker
    })

    const detachOverlapZoom = attachMarkerOverlapZoom(map, markers)
    const detachActivePin = attachActivePinState(map)

    const applyView = () => {
      map.invalidateSize()

      if (markers.length === 1) {
        map.setView([points[0].lat, points[0].lng], getMapZoom(1))
        return
      }

      const bounds = L.featureGroup(markers).getBounds()
      map.fitBounds(bounds, {
        padding: [24, 24],
        maxZoom: getMapZoom(points.length),
      })
    }

    map.whenReady(applyView)
    requestAnimationFrame(applyView)

    mapInstanceRef.current = map

    return () => {
      detachOverlapZoom()
      detachActivePin()
      map.remove()
      mapInstanceRef.current = null
    }
  }, [points, school])

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
