import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useI18n } from '../i18n/useI18n'
import { RESET_SCROLL_STATE } from '../utils/scrollRestoration'

const NotFoundPage = () => {
  const { path, t } = useI18n()

  return (
    <div className="page-shell page-shell--fill">
      <Navbar />
      <main className="not-found" aria-labelledby="not-found-title">
        <h1 id="not-found-title" className="not-found-title">
          {t('notFound.title')}
        </h1>
        <p className="not-found-text">{t('notFound.text')}</p>
        <Link to={path.home} state={RESET_SCROLL_STATE} className="btn btn-primary not-found-home">
          {t('notFound.button')}
        </Link>
      </main>
    </div>
  )
}

export default NotFoundPage
