import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { scrollToCategories } from '../utils/scrollToElement'
import AddActivityModal from './AddActivityModal'

const Navbar = () => {
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
            <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="ActiveKids logo"
                            className="h-14 w-auto object-contain"
                        />
                    </Link>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link
                            to="/#kategorije"
                            onClick={handleCategoriesClick}
                            className="navbar-categories-link"
                        >
                            Kategorije
                        </Link>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setIsAddActivityOpen(true)}
                        >
                            Dodaj aktivnost
                        </button>
                    </div>
                </div>
            </nav>

            <AddActivityModal
                isOpen={isAddActivityOpen}
                onClose={() => setIsAddActivityOpen(false)}
            />
        </>
    )
}

export default Navbar

