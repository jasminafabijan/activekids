import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="ActiveKids logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <button
            type="button"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Kategorije
          </button>
        </div>

        <div className="flex justify-end flex-1">
          <button
            type="button"
            className="btn btn-primary"
          >
            Dodaj aktivnost
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

