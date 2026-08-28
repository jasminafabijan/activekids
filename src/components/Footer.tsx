import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoWhite from '../assets/images/kiddokompas-logo-white.png'
import { isHomePath } from '../i18n/routes'
import { useI18n } from '../i18n/useI18n'
import { HOME_SCROLL_KEY, RESET_SCROLL_STATE, saveScroll } from '../utils/scrollRestoration'
import { scrollToCategories } from '../utils/scrollToElement'
import AddActivityModal from './AddActivityModal'

const Footer = () => {
    const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { t, path } = useI18n()

    const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isHomePath(location.pathname)) {
            return
        }

        event.preventDefault()

        if (location.hash) {
            navigate(path.home, { replace: true, state: RESET_SCROLL_STATE })
        }

        saveScroll(HOME_SCROLL_KEY, 0)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleCategoriesClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHomePath(location.pathname)) {
            event.preventDefault()
            scrollToCategories()
            window.history.replaceState(null, '', path.homeCategories)
        }
    }

    return (
        <>
            <footer className="site-footer">
                <div className="site-footer-inner">
                    <div className="site-footer-top">
                        <div className="site-footer-brand">
                            <Link
                                to={path.home}
                                state={RESET_SCROLL_STATE}
                                className="site-footer-logo-link"
                                onClick={handleHomeClick}
                            >
                                <img
                                    src={logoWhite}
                                    alt="KiddoKompas"
                                    width={400}
                                    height={160}
                                    decoding="async"
                                    className="site-footer-logo"
                                />
                            </Link>
                            <p className="site-footer-description">
                                {t('footer.description')}
                            </p>
                        </div>

                        <div className="site-footer-links">
                            <div className="site-footer-links-group">
                                <div className="site-footer-links-title" id="footer-explore-label">
                                    {t('footer.explore')}
                                </div>
                                <nav className="site-footer-nav" aria-labelledby="footer-explore-label">
                                    <Link
                                        to={path.home}
                                        state={RESET_SCROLL_STATE}
                                        onClick={handleHomeClick}
                                        className="site-footer-link"
                                    >
                                        {t('nav.home')}
                                    </Link>
                                    <Link
                                        to={path.homeCategories}
                                        onClick={handleCategoriesClick}
                                        className="site-footer-link"
                                    >
                                        {t('nav.categories')}
                                    </Link>
                                    <Link to={path.map} className="site-footer-link">
                                        {t('nav.map')}
                                    </Link>
                                    <Link to={path.about} className="site-footer-link">
                                        {t('nav.about')}
                                    </Link>
                                </nav>
                            </div>
                            <div className="site-footer-links-group">
                                <div className="site-footer-links-title" id="footer-info-label">
                                    {t('footer.info')}
                                </div>
                                <nav className="site-footer-nav" aria-labelledby="footer-info-label">
                                    <Link to={path.contact} className="site-footer-link">
                                        {t('footer.contact')}
                                    </Link>
                                    <button
                                        type="button"
                                        className="site-footer-link"
                                        onClick={() => setIsAddActivityOpen(true)}
                                    >
                                        {t('nav.addActivity')}
                                    </button>
                                    <Link to={path.privacy} className="site-footer-link">
                                        {t('footer.privacy')}
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="site-footer-divider" aria-hidden="true" />

                    <div className="site-footer-bottom">
                        <p className="site-footer-copyright">{t('footer.copyright')}</p>
                        <p className="site-footer-disclaimer">
                            {t('footer.disclaimer')}
                        </p>
                    </div>
                </div>
            </footer>

            <AddActivityModal
                isOpen={isAddActivityOpen}
                onClose={() => setIsAddActivityOpen(false)}
            />
        </>
    )
}

export default Footer
