import { useEffect, useRef } from 'react'
import viberIcon from '../assets/icons/viber.svg'

const CONTACT_EMAIL = 'jf@jasminafabijan.com'
const VIBER_PHONE = '38163590020'

const EMAIL_SUBJECT = 'Dodavanje aktivnosti na ActiveKids'
const EMAIL_BODY = `Zdravo,

Želeo/la bih da dodam svoju školu/aktivnost na ActiveKids.

Naziv:
Adresa / deo grada:
Uzrast dece:
Telefon:
Sajt / Instagram / Facebook:
Kratak opis:

(Hvala!)`

const submitItems = [
    {
        label: 'Naziv škole ili aktivnosti',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M10 12h4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 8h4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 21v-3a2 2 0 0 0-4 0v3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Adresa(e) na kojoj se održavaju aktivnosti',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: 'Za koji uzrast primate decu',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Telefon',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Link do sajta, Instagrama ili Facebooka',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        ),
    },
    {
        label: 'Kratak opis',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Fotografija koju smemo da koristimo',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

const getEmailHref = () => {
    const subject = encodeURIComponent(EMAIL_SUBJECT)
    const body = encodeURIComponent(EMAIL_BODY)

    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

const getViberHref = () => `viber://chat?number=${VIBER_PHONE}`

interface AddActivityModalProps {
    isOpen: boolean
    onClose: () => void
}

const AddActivityModal = ({ isOpen, onClose }: AddActivityModalProps) => {
    const closeButtonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!isOpen) {
            return
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        closeButtonRef.current?.focus()

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)

        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) {
        return null
    }

    return (
        <div className="add-activity-modal" role="presentation">
            <button
                type="button"
                className="add-activity-modal-backdrop"
                aria-label="Zatvori prozor"
                onClick={onClose}
            />

            <div
                className="add-activity-modal-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="add-activity-modal-title"
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    className="add-activity-modal-close"
                    aria-label="Zatvori"
                    onClick={onClose}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <h2 id="add-activity-modal-title" className="add-activity-modal-title">
                    Dodajte svoju školicu na ActiveKids
                </h2>

                <div className="add-activity-modal-intro">
                    <p>
                        Vodite školu, klub, radionicu ili aktivnost za decu? Pošaljite nam osnovne podatke i
                        rado ćemo ih dodati u katalog. Cilj nam je da roditelji na jednom mestu lakše pronađu
                        aktivnosti u svom gradu.
                    </p>
                    <p>
                        <strong>Unos osnovnih podataka je besplatan.</strong>
                    </p>
                </div>

                <div className="add-activity-modal-checklist">
                    <h3 className="add-activity-modal-checklist-title">Šta da pošaljete</h3>
                    <ul className="add-activity-modal-checklist-list">
                        {submitItems.map((item) => (
                            <li key={item.label} className="add-activity-modal-checklist-item">
                                <span className="add-activity-modal-checklist-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="add-activity-modal-note">
                    Ne mora sve biti savršeno pripremljeno — dovoljno je da pošaljete osnovne informacije, a
                    mi ćemo ih urediti za prikaz na sajtu.
                </p>

                <div className="add-activity-modal-actions">
                    <a href={getEmailHref()} className="add-activity-modal-btn add-activity-modal-btn--email">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Pošalji email
                    </a>
                    <a
                        href={getViberHref()}
                        className="add-activity-modal-btn add-activity-modal-btn--viber"
                    >
                        <img src={viberIcon} alt="" className="add-activity-modal-btn-icon" aria-hidden="true" />
                        Pošalji poruku na Viber
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AddActivityModal
