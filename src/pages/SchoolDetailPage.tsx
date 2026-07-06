import { type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SchoolMap from '../components/SchoolMap'
import { getCategoryBySlug } from '../data/categories'
import { formatSchoolAddress, formatPhoneHref, getMapsHref, getSchoolBySlug } from '../data/schools'

const ContactLocationIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const UsersIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-tag-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const PhoneIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const GlobeIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

const FacebookIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon school-detail-contact-icon--facebook"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      fill="#fff"
      d="M13.4 20.5v-6.2h2.1l.3-2.5h-2.1V9.1c0-.7.2-1.2 1.1-1.2h1.2V5.4h-2.1c-2.2 0-3.2 1.1-3.2 2.9v1.6H8.5v2.5h1.7v6.2h2.2z"
    />
  </svg>
)

const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-contact-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

type ContactLink = {
  label: string
  href: string
  icon: ReactNode
  external: boolean
}

const isContactLink = (link: ContactLink | undefined): link is ContactLink =>
  link !== undefined

const SchoolDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const school = slug ? getSchoolBySlug(slug) : undefined
  const category = school ? getCategoryBySlug(school.categorySlug) : undefined

  if (!school) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <p className="text-muted">Škola nije pronađena.</p>
          <Link to="/" className="mt-4 inline-block text-sm font-semibold text-primary">
            ← Nazad na početnu
          </Link>
        </div>
      </div>
    )
  }

  const formatWebsiteLabel = (url: string) => url.replace(/^https?:\/\//, '')

  const formatFacebookLabel = (url: string) => {
    try {
      const pathname = new URL(url).pathname.replace(/\/$/, '')
      return pathname || url
    } catch {
      return url
    }
  }

  const formatInstagramLabel = (url: string) => {
    try {
      const username = new URL(url).pathname.replace(/\//g, '')
      return username ? `@${username}` : url
    } catch {
      return url
    }
  }

  const contactLinkItems: Array<ContactLink | undefined> = [
    school.contact?.phone
      ? {
          label: school.contact.phone,
          href: formatPhoneHref(school.contact.phone),
          icon: <PhoneIcon />,
          external: false,
        }
      : undefined,
    school.contact?.email
      ? {
          label: school.contact.email,
          href: `mailto:${school.contact.email}`,
          icon: <MailIcon />,
          external: false,
        }
      : undefined,
    school.contact?.website
      ? {
          label: formatWebsiteLabel(school.contact.website),
          href: school.contact.website,
          icon: <GlobeIcon />,
          external: true,
        }
      : undefined,
    school.contact?.facebook
      ? {
          label: formatFacebookLabel(school.contact.facebook),
          href: school.contact.facebook,
          icon: <FacebookIcon />,
          external: true,
        }
      : undefined,
    school.contact?.instagram
      ? {
          label: formatInstagramLabel(school.contact.instagram),
          href: school.contact.instagram,
          icon: <InstagramIcon />,
          external: true,
        }
      : undefined,
  ]

  const contactLinks = contactLinkItems.filter(isContactLink)

  const mapAddresses =
    school.addresses?.filter((address) => address.lat != null && address.lng != null) ?? []

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {category && (
          <Link to={`/kategorija/${category.slug}`} className="category-page-back">
            ← Nazad na {category.name}
          </Link>
        )}

        <article className="school-detail">
          <header className="school-detail-header">
            <h1 className="school-detail-title">{school.name}</h1>

            <div className="school-detail-tags">
              <span className="school-detail-tag school-detail-tag--age">
                <UsersIcon />
                {school.ageRange}
              </span>
            </div>
          </header>

          <div className="school-detail-grid">
            <div className="school-detail-main">
              <div className="school-detail-image-frame">
                <span aria-hidden="true" className="school-detail-deco school-detail-deco--circle" />
                <span aria-hidden="true" className="school-detail-deco school-detail-deco--square" />
                <div className="school-detail-image-wrap">
                  <picture>
                    <source srcSet={school.imageWebp} type="image/webp" />
                    <img
                      src={school.imageFallback}
                      alt={school.name}
                      loading="eager"
                      decoding="async"
                      width={680}
                      height={400}
                      className="school-detail-image"
                    />
                  </picture>
                </div>
              </div>

              {school.description && school.description.length > 0 && (
                <section className="school-detail-section" aria-labelledby="school-description">
                  <h2 id="school-description" className="school-detail-section-title">
                    O programu
                  </h2>
                  <div className="school-detail-description">
                    {school.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <aside className="school-detail-sidebar">
              {contactLinks.length > 0 && (
                <section className="school-detail-section" aria-labelledby="school-contact">
                  <h2 id="school-contact" className="school-detail-section-title">
                    Kontakt
                  </h2>
                  <ul className="school-detail-contact">
                    {contactLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          {...(link.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="school-detail-contact-link"
                        >
                          <span className="school-detail-contact-icon-wrap">{link.icon}</span>
                          <span className="school-detail-contact-label">{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {(school.addresses?.length || mapAddresses.length > 0) && (
                <section className="school-detail-section" aria-labelledby="school-location">
                  <h2 id="school-location" className="school-detail-section-title">
                    Lokacija
                  </h2>
                  {school.addresses && school.addresses.length > 0 && (
                    <div className="school-detail-contact mb-4">
                      {school.addresses.map((address) => {
                        const label = formatSchoolAddress(address)

                        return (
                          <a
                            key={label}
                            href={getMapsHref(address)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="school-detail-contact-link"
                          >
                            <span className="school-detail-contact-icon-wrap">
                              <ContactLocationIcon />
                            </span>
                            <span className="school-detail-contact-label">{label}</span>
                          </a>
                        )
                      })}
                    </div>
                  )}
                  {mapAddresses.length > 0 && <SchoolMap addresses={mapAddresses} />}
                </section>
              )}
            </aside>
          </div>
        </article>
      </main>
    </div>
  )
}

export default SchoolDetailPage
