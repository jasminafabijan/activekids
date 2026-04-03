import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="ActiveKids logo"
            className="h-12 w-auto object-contain"
          />
        </div>

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

