import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoWhite from '../assets/images/kiddokompas-logo-white.png'
import { isHomePath } from '../i18n/routes'
import { useI18n } from '../i18n/useI18n'
import { scrollToCategories } from '../utils/scrollToElement'
import AddActivityModal from './AddActivityModal'

const Footer = () => {
    const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)
    const location = useLocation()
    const { t, path } = useI18n()

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
                            <Link to={path.home} className="site-footer-logo-link">
                                <img
                                    src={logoWhite}
                                    alt="KiddoKompas"
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
