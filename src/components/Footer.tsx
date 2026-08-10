import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoWhite from '../assets/images/kiddokompas-logo-white.png'
import { scrollToCategories } from '../utils/scrollToElement'
import AddActivityModal from './AddActivityModal'

const Footer = () => {
    const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)
    const location = useLocation()

    const handleCategoriesClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === '/') {
            event.preventDefault()
            scrollToCategories()
            window.history.replaceState(null, '', '/#kategorije')
        }
    }

    return (
        <>
            <footer className="site-footer">
                <div className="site-footer-inner">
                    <div className="site-footer-top">
                        <div className="site-footer-brand">
                            <Link to="/" className="site-footer-logo-link">
                                <img
                                    src={logoWhite}
                                    alt="KiddoKompas"
                                    className="site-footer-logo"
                                />
                            </Link>
                            <p className="site-footer-description">
                                KiddoKompas pomaže roditeljima da brže pronađu aktivnosti koje odgovaraju
                                uzrastu, lokaciji i interesovanjima deteta.
                            </p>
                        </div>

                        <div className="site-footer-links">
                            <div className="site-footer-links-title" id="footer-links-label">
                                Linkovi
                            </div>
                            <nav className="site-footer-nav" aria-labelledby="footer-links-label">
                                <Link
                                    to="/#kategorije"
                                    onClick={handleCategoriesClick}
                                    className="site-footer-link"
                                >
                                    Kategorije
                                </Link>
                                <Link to="/o-nama" className="site-footer-link">
                                    O nama
                                </Link>
                                <button
                                    type="button"
                                    className="site-footer-link"
                                    onClick={() => setIsAddActivityOpen(true)}
                                >
                                    Dodaj aktivnost
                                </button>
                                <Link to="/politika-privatnosti" className="site-footer-link">
                                    Politika privatnosti
                                </Link>
                            </nav>
                        </div>
                    </div>

                    <div className="site-footer-divider" aria-hidden="true" />

                    <div className="site-footer-bottom">
                        <p className="site-footer-copyright">© 2026 KiddoKompas. Sva prava zadržana.</p>
                        <p className="site-footer-disclaimer">
                            Svi podaci su informativni — za tačne termine, cene i grupe kontaktirajte direktno školu ili organizatora.
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
