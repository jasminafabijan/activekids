import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { CONTACT_EMAIL } from '../i18n/config'
import { useI18n } from '../i18n/useI18n'

const PrivacyPolicyPage = () => {
  const { path, t } = useI18n()

  return (
    <div className="page-shell legal-page">
      <Navbar />

      <article className="legal-inner">
        <header className="legal-header">
          <p className="legal-eyebrow">KiddoKompas</p>
          <h1 className="legal-title">{t('privacy.title')}</h1>
          <p className="legal-updated">{t('privacy.updated')}</p>
        </header>

        <div className="legal-body">
          <p>
            {t('privacy.intro')} (
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            ).
          </p>

          <h2>{t('privacy.h1')}</h2>
          <p>{t('privacy.p1')}</p>

          <h2>{t('privacy.h2')}</h2>
          <p>{t('privacy.p2intro')}</p>
          <ul>
            <li>
              <strong>{t('privacy.dataVoluntaryLabel')}</strong>
              {t('privacy.dataVoluntary')}
            </li>
            <li>
              <strong>{t('privacy.dataPublicLabel')}</strong>
              {t('privacy.dataPublic')}
            </li>
            <li>
              <strong>{t('privacy.dataPhotosLabel')}</strong>
              {t('privacy.dataPhotos')}
            </li>
          </ul>
          <p>{t('privacy.p2note')}</p>

          <h2>{t('privacy.h3')}</h2>
          <p>{t('privacy.p3intro')}</p>
          <ul>
            <li>{t('privacy.purpose1')}</li>
            <li>{t('privacy.purpose2')}</li>
            <li>{t('privacy.purpose3')}</li>
            <li>{t('privacy.purpose4')}</li>
          </ul>

          <h2>{t('privacy.h4')}</h2>
          <p>{t('privacy.p4')}</p>

          <h2>{t('privacy.h5')}</h2>
          <p>{t('privacy.p5a')}</p>
          <p>{t('privacy.p5b')}</p>
          <p>{t('privacy.p5c')}</p>
          <p>{t('privacy.p5d')}</p>
          <p>{t('privacy.p5e')}</p>

          <h2>{t('privacy.h6')}</h2>
          <p>{t('privacy.p6')}</p>

          <h2>{t('privacy.h7')}</h2>
          <p>{t('privacy.p7')}</p>

          <h2>{t('privacy.h8')}</h2>
          <p>{t('privacy.p8a')}</p>
          <p>
            {t('privacy.p8bBefore')}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. {t('privacy.p8bAfter')}
          </p>

          <h2>{t('privacy.h9')}</h2>
          <p>{t('privacy.p9')}</p>

          <h2>{t('privacy.h10')}</h2>
          <p>{t('privacy.p10')}</p>

          <h2>{t('privacy.h11')}</h2>
          <p>
            {t('privacy.p11a')}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            <br />
            {t('privacy.p11b')}{' '}
            <Link to={path.about}>{t('nav.about')}</Link>
            {t('privacy.p11bAfter')}
          </p>
        </div>
      </article>
    </div>
  )
}

export default PrivacyPolicyPage
