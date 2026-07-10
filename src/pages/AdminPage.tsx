import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatSchoolCategoryNames, getActivityOptions, schools } from '../data/schools'
import './admin.css'

const VERIFIED_STORAGE_KEY = 'activekids-admin-verified'

const loadVerifiedState = (): Record<string, boolean> => {
  try {
    const stored = localStorage.getItem(VERIFIED_STORAGE_KEY)
    return stored ? (JSON.parse(stored) as Record<string, boolean>) : {}
  } catch {
    return {}
  }
}

const AdminPage = () => {
  const [sportFilter, setSportFilter] = useState('')
  const [verified, setVerified] = useState<Record<string, boolean>>(loadVerifiedState)

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

      return a.name.localeCompare(b.name, 'sr')
    })
  }, [sportFilter])

  const verifiedCount = rows.filter((school) => verified[school.id]).length

  const toggleVerified = (schoolId: string) => {
    setVerified((current) => ({
      ...current,
      [schoolId]: !current[schoolId],
    }))
  }

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <Link to="/" className="admin-page-back">
            ← Nazad na sajt
          </Link>
          <h1 className="admin-page-title">Admin — škole</h1>
          <p className="admin-page-subtitle">
            Proveri kontakt podatke sa vlasnicima i označi red kada je sve potvrđeno.
          </p>
        </div>

        <div className="admin-page-stats">
          <span className="admin-page-stat">
            Provereno: <strong>{verifiedCount}</strong> / {rows.length}
          </span>
        </div>
      </header>

      <div className="admin-page-toolbar">
        <label className="admin-filter">
          <span className="admin-filter-label">Sport</span>
          <select
            className="admin-filter-select"
            value={sportFilter}
            onChange={(event) => setSportFilter(event.target.value)}
          >
            <option value="">Svi sportovi</option>
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
                <span className="sr-only">Provereno</span>
              </th>
              <th scope="col">Sport</th>
              <th scope="col">Škola</th>
              <th scope="col">Websajt</th>
              <th scope="col">Email</th>
              <th scope="col">Telefon</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((school) => {
              const sportName = formatSchoolCategoryNames(school)
              const isVerified = Boolean(verified[school.id])

              return (
                <tr key={school.id} className={isVerified ? 'admin-table-row--verified' : ''}>
                  <td className="admin-table-col-check">
                    <input
                      type="checkbox"
                      className="admin-table-checkbox"
                      checked={isVerified}
                      onChange={() => toggleVerified(school.id)}
                      aria-label={`Provereno sa vlasnikom — ${school.name}`}
                    />
                  </td>
                  <td>{sportName}</td>
                  <td>
                    <Link to={`/skola/${school.slug}`} className="admin-table-school-link">
                      {school.name}
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
                    {school.contact?.phone ? (
                      <a href={`tel:${school.contact.phone.replace(/\s/g, '')}`} className="admin-table-link">
                        {school.contact.phone}
                      </a>
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
