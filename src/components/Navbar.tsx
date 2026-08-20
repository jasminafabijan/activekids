import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/kiddokompas-logo.png'
import { isHomePath } from '../i18n/routes'
import { useI18n } from '../i18n/useI18n'
import { scrollToCategories } from '../utils/scrollToElement'
import AddActivityModal from './AddActivityModal'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
    const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const { t, path } = useI18n()
    const menuId = useId()

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname, location.hash])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 640px)')
        const closeOnDesktop = () => {
            if (mediaQuery.matches) {
                setIsMenuOpen(false)
            }
        }

        mediaQuery.addEventListener('change', closeOnDesktop)
        return () => mediaQuery.removeEventListener('change', closeOnDesktop)
    }, [])

    useEffect(() => {
        if (!isMenuOpen) {
            return
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('keydown', onKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const handleCategoriesClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setIsMenuOpen(false)

        if (isHomePath(location.pathname)) {
            event.preventDefault()
            scrollToCategories()
            window.history.replaceState(null, '', path.homeCategories)
        }
    }

    return (
        <>
            <nav className="site-navbar">
                <div className="site-navbar-inner">
                    <Link to={path.home} className="site-navbar-brand" onClick={() => setIsMenuOpen(false)}>
                        <img
                            src={logo}
                            alt="KiddoKompas logo"
                            className="site-navbar-logo"
                        />
                    </Link>

                    <div className="site-navbar-tools">
                        <LanguageSwitcher />
                        <button
                            type="button"
                            className="site-navbar-toggle"
                            aria-expanded={isMenuOpen}
                            aria-controls={menuId}
                            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                            onClick={() => setIsMenuOpen((open) => !open)}
                        >
                            <span className="site-navbar-toggle-icon" aria-hidden="true">
                                <span className="site-navbar-toggle-bar" />
                                <span className="site-navbar-toggle-bar site-navbar-toggle-bar--short" />
                                <span className="site-navbar-toggle-bar" />
                            </span>
                        </button>
                    </div>

                    <div
                        id={menuId}
                        className={`site-navbar-menu${isMenuOpen ? ' is-open' : ''}`}
                    >
                        <span className="site-navbar-menu-accent" aria-hidden="true" />
                        <Link
                            to={path.homeCategories}
                            onClick={handleCategoriesClick}
                            className="navbar-categories-link site-navbar-menu-link"
                        >
                            {t('nav.categories')}
                        </Link>
                        <NavLink
                            to={path.map}
                            end
                            onClick={() => setIsMenuOpen(false)}
                            className="navbar-categories-link site-navbar-menu-link"
                        >
                            {t('nav.map')}
                        </NavLink>
                        <NavLink
                            to={path.about}
                            end
                            onClick={() => setIsMenuOpen(false)}
                            className="navbar-categories-link site-navbar-menu-link"
                        >
                            {t('nav.about')}
                        </NavLink>
                        <LanguageSwitcher className="site-navbar-lang-menu" />
                        <span className="site-navbar-divider" aria-hidden="true" />
                        <button
                            type="button"
                            className="btn btn-primary site-navbar-cta"
                            onClick={() => {
                                setIsMenuOpen(false)
                                setIsAddActivityOpen(true)
                            }}
                        >
                            {t('nav.addActivity')}
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen ? (
                <button
                    type="button"
                    className="site-navbar-backdrop"
                    aria-label={t('nav.closeMenu')}
                    onClick={() => setIsMenuOpen(false)}
                />
            ) : null}

            <AddActivityModal
                isOpen={isAddActivityOpen}
                onClose={() => setIsAddActivityOpen(false)}
            />
        </>
    )
}

export default Navbar
