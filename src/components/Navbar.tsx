import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="ActiveKids logo"
            className="h-9 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <button
            type="button"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            kategorije
          </button>
        </div>

        <div className="flex justify-end flex-1">
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors"
          >
            Dodaj aktivnost
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

