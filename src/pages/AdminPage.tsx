import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatSchoolCategoryNames, formatPhoneHref, getActivityOptions, getContactPhones, getSchoolNameSr, schools } from '../data/schools'
import './admin.css'

const CONTACTED_STORAGE_KEY = 'kiddokompas-admin-contacted'
const VERIFIED_STORAGE_KEY = 'kiddokompas-admin-verified'

const loadFlagState = (key: string): Record<string, boolean> => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? (JSON.parse(stored) as Record<string, boolean>) : {}
  } catch {
    return {}
  }
}

const toggleFlag = (schoolId: string, current: Record<string, boolean>) => ({
  ...current,
  [schoolId]: !current[schoolId],
})

const AdminPage = () => {
  const [sportFilter, setSportFilter] = useState('')
  const [contacted, setContacted] = useState<Record<string, boolean>>(() =>
    loadFlagState(CONTACTED_STORAGE_KEY)
  )
  const [verified, setVerified] = useState<Record<string, boolean>>(() =>
    loadFlagState(VERIFIED_STORAGE_KEY)
  )

  useEffect(() => {
    localStorage.setItem(CONTACTED_STORAGE_KEY, JSON.stringify(contacted))
  }, [contacted])

  useEffect(() => {
    localStorage.setItem(VERIFIED_STORAGE_KEY, JSON.stringify(verified))
  }, [verified])

  const sportOptions = getActivityOptions()

  const rows = useMemo(() => {
    const filtered =
      sportFilter === ''
        ? schools
        : schools.filter((school) => school.categorySlugs.includes(sportFilter))

    return [...filtered].sort((a, b) => {
      const sportA = formatSchoolCategoryNames(a)
      const sportB = formatSchoolCategoryNames(b)
      const bySport = sportA.localeCompare(sportB, 'sr')

      if (bySport !== 0) {
        return bySport
      }

      return getSchoolNameSr(a).localeCompare(getSchoolNameSr(b), 'sr')
    })
  }, [sportFilter])

  const contactedCount = rows.filter((school) => contacted[school.id]).length
  const verifiedCount = rows.filter((school) => verified[school.id]).length

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <Link to="/" className="admin-page-back">
            ← Nazad na sajt
          </Link>
          <h1 className="admin-page-title">Admin — škole</h1>
          <p className="admin-page-subtitle">
            Označi koga si kontaktirala, pa red kada su podaci potvrđeni.
          </p>
        </div>

        <div className="admin-page-stats">
          <span className="admin-page-stat">
            Kontaktirano: <strong>{contactedCount}</strong> / {rows.length}
          </span>
          <span className="admin-page-stat">
            Provereno: <strong>{verifiedCount}</strong> / {rows.length}
          </span>
        </div>
      </header>

      <div className="admin-page-toolbar">
        <label className="admin-filter">
          <select
            className="admin-filter-select"
            value={sportFilter}
            onChange={(event) => setSportFilter(event.target.value)}
          >
            <option value="">Sve aktivnosti</option>
            {sportOptions.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th className="admin-table-col-check" scope="col">
                Kontakt
              </th>
              <th className="admin-table-col-check" scope="col">
                Provera
              </th>
              <th scope="col">Aktivnost</th>
              <th scope="col">Škola</th>
              <th scope="col">Websajt</th>
              <th scope="col">Email</th>
              <th scope="col">Telefon</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((school) => {
              const sportName = formatSchoolCategoryNames(school)
              const schoolName = getSchoolNameSr(school)
              const isContacted = Boolean(contacted[school.id])
              const isVerified = Boolean(verified[school.id])
              const rowClass = isVerified
                ? 'admin-table-row--verified'
                : isContacted
                  ? 'admin-table-row--contacted'
                  : ''

              const phones = getContactPhones(school.contact?.phone)

              return (
                <tr key={school.id} className={rowClass}>
                  <td className="admin-table-col-check">
                    <input
                      type="checkbox"
                      className="admin-table-checkbox"
                      checked={isContacted}
                      onChange={() => setContacted((current) => toggleFlag(school.id, current))}
                      aria-label={`Kontaktirano — ${schoolName}`}
                    />
                  </td>
                  <td className="admin-table-col-check">
                    <input
                      type="checkbox"
                      className="admin-table-checkbox"
                      checked={isVerified}
                      onChange={() => setVerified((current) => toggleFlag(school.id, current))}
                      aria-label={`Provereno sa vlasnikom — ${schoolName}`}
                    />
                  </td>
                  <td>{sportName}</td>
                  <td>
                    <Link to={`/skola/${school.slug}`} className="admin-table-school-link">
                      {schoolName}
                    </Link>
                  </td>
                  <td>
                    {school.contact?.website ? (
                      <a
                        href={school.contact.website}
                        className="admin-table-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {school.contact.website.replace(/^https?:\/\/(www\.)?/, '')}
                      </a>
                    ) : (
                      <span className="admin-table-empty">—</span>
                    )}
                  </td>
                  <td>
                    {school.contact?.email ? (
                      <a href={`mailto:${school.contact.email}`} className="admin-table-link">
                        {school.contact.email}
                      </a>
                    ) : (
                      <span className="admin-table-empty">—</span>
                    )}
                  </td>
                  <td>
                    {phones.length > 0 ? (
                      <span className="admin-table-phones">
                        {phones.map((phone, index) => (
                          <span key={phone}>
                            {index > 0 ? ', ' : null}
                            <a href={formatPhoneHref(phone)} className="admin-table-link">
                              {phone}
                            </a>
                          </span>
                        ))}
                      </span>
                    ) : (
                      <span className="admin-table-empty">—</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {rows.length === 0 && (
          <p className="admin-table-empty-state">Nema škola za izabrani sport.</p>
        )}
      </div>
    </div>
  )
}

export default AdminPage
