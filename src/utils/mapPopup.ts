import type { PopupOptions } from 'leaflet'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export const formatPopupAge = (ageLabel: string) =>
  ageLabel.replace(/\s*godina|\s*godine/g, ' god.').replace(/\s+/g, ' ').trim()

export const schoolMapHref = (school: { slug: string; categorySlugs: string[] }) =>
  school.categorySlugs[0]
    ? `/skola/${school.slug}?kategorija=${school.categorySlugs[0]}`
    : `/skola/${school.slug}`

export const schoolMapPopupOptions: PopupOptions = {
  maxWidth: 260,
  minWidth: 168,
  closeButton: true,
  className: 'school-map-popup-wrap',
}

type PopupSchool = {
  name: string
  ageLabel: string
  href?: string
}

export const buildSchoolMapPopupHtml = (street: string, schools: PopupSchool[]) => {
  if (schools.length === 0) {
    return `<div class="school-map-popup"><p class="school-map-popup-meta">${escapeHtml(street)}</p></div>`
  }

  const schoolsHtml = schools
    .map((school) => {
      const button = school.href
        ? `<a class="school-map-popup-button" href="${escapeHtml(school.href)}">Vidi detalje</a>`
        : ''

      return `<div class="school-map-popup-school">
        <p class="school-map-popup-title">${escapeHtml(school.name)}</p>
        <p class="school-map-popup-meta">${escapeHtml(formatPopupAge(school.ageLabel))}</p>
        <p class="school-map-popup-meta">${escapeHtml(street)}</p>
        ${button}
      </div>`
    })
    .join('')

  return `<div class="school-map-popup">${schoolsHtml}</div>`
}
