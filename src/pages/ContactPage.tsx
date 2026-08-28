import { useId, useState, type FormEvent } from 'react'
import AddActivityModal from '../components/AddActivityModal'
import Navbar from '../components/Navbar'
import { CONTACT_EMAIL } from '../i18n/config'
import { useI18n } from '../i18n/useI18n'
import { isEmailJsConfigured, sendContactMessage } from '../utils/sendContactMessage'

const REASONS = [
  { id: 'question', labelKey: 'contact.reasonQuestion' },
  { id: 'site', labelKey: 'contact.reasonSite' },
  { id: 'data', labelKey: 'contact.reasonData' },
  { id: 'activity', labelKey: 'contact.reasonActivity' },
] as const

type ContactStatus = 'idle' | 'sending' | 'success' | 'error'

const ContactPage = () => {
  const { t } = useI18n()
  const formId = useId()
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reasonId, setReasonId] = useState<(typeof REASONS)[number]['id']>('question')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<ContactStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (honeypot.trim()) {
      setStatus('success')
      return
    }

    if (!isEmailJsConfigured()) {
      setStatus('error')
      return
    }

    const reason = REASONS.find((item) => item.id === reasonId) ?? REASONS[0]

    setStatus('sending')

    try {
      await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        topic: t(reason.labelKey),
        message: message.trim(),
      })
      setName('')
      setEmail('')
      setReasonId('question')
      setMessage('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-shell page-shell--fill contact-page">
      <Navbar />

      <main className="contact-inner">
        <div className="contact-layout">
          <div className="contact-intro">
            <h1 className="contact-title">{t('contact.title')}</h1>
            <p className="contact-lead">{t('contact.lead')}</p>

            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
              {CONTACT_EMAIL}
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17 17 7M8 7h9v9"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <hr className="contact-divider" />

            <p className="contact-add-intro">{t('contact.addIntro')}</p>
            <p className="contact-add-lead">{t('contact.addLead')}</p>
            <button
              type="button"
              className="btn contact-add-btn"
              onClick={() => setIsAddActivityOpen(true)}
            >
              {t('nav.addActivity')}
            </button>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label className="contact-field" htmlFor={`${formId}-name`}>
                <span className="contact-label">{t('contact.name')}</span>
                <input
                  id={`${formId}-name`}
                  name="from_name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={120}
                  placeholder={t('contact.namePlaceholder')}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>

              <label className="contact-field" htmlFor={`${formId}-email`}>
                <span className="contact-label">{t('contact.email')}</span>
                <input
                  id={`${formId}-email`}
                  name="from_email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={160}
                  placeholder={t('contact.emailPlaceholder')}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
            </div>

            <label className="contact-field" htmlFor={`${formId}-reason`}>
              <span className="contact-label">{t('contact.reason')}</span>
              <span className="contact-select-wrap">
                <select
                  id={`${formId}-reason`}
                  name="reason"
                  value={reasonId}
                  onChange={(event) =>
                    setReasonId(event.target.value as (typeof REASONS)[number]['id'])
                  }
                >
                  {REASONS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {t(item.labelKey)}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            <label className="contact-field" htmlFor={`${formId}-message`}>
              <span className="contact-label">{t('contact.message')}</span>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                rows={6}
                maxLength={4000}
                placeholder={t('contact.messagePlaceholder')}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </label>

            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor={`${formId}-company`}>
                Company
                <input
                  id={`${formId}-company`}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-navy contact-submit"
              disabled={status === 'sending'}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22 2 11 13M22 2 15 22 11 13 2 9l20-7Z"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {status === 'sending' ? t('contact.sending') : t('contact.submit')}
            </button>

            <p
              className={`contact-status${status === 'success' ? ' is-success' : ''}${status === 'error' ? ' is-error' : ''}`}
              role="status"
              aria-live="polite"
            >
              {status === 'success'
                ? t('contact.success')
                : status === 'error'
                  ? t('contact.error', { email: CONTACT_EMAIL })
                  : null}
            </p>

            <p className="contact-note">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('contact.note')}
            </p>
          </form>
        </div>
      </main>

      <AddActivityModal isOpen={isAddActivityOpen} onClose={() => setIsAddActivityOpen(false)} />
    </div>
  )
}

export default ContactPage
