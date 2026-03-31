import heroImg1 from '../assets/images/atletika.png'
import heroImg2 from '../assets/images/fudbal.jpg'
import heroImg3 from '../assets/images/IMG_2980.jpeg'
import heroImg4 from '../assets/images/tenis.jpg'

const Hero = () => {
  return (
    <div className="bg-white text-blue-700 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800">
              Pronađite savršene aktivnosti za vašu decu
            </h1>
            <p className="text-lg md:text-xl text-blue-600 max-w-xl">
              Sport, ples, muzika, umetnost i još mnogo toga — na jednom mestu, prilagođeno uzrastu i interesovanjima vaše dece.
            </p>
          </div>

          <div className="relative h-72 md:h-80 lg:h-96">
            <div className="absolute inset-y-0 left-6 right-10 flex items-center justify-center gap-4">
              <div className="space-y-4">
                <img
                  src={heroImg1}
                  alt="Aktivnost za decu"
                  className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-3xl object-cover shadow-xl border border-white/20 transform -rotate-3 hover:-rotate-1 transition-transform duration-300"
                />
                <img
                  src={heroImg2}
                  alt="Deca u pokretu"
                  className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-3xl object-cover shadow-xl border border-white/20 transform rotate-3 hover:rotate-1 transition-transform duration-300 translate-x-4"
                />
              </div>

              <div className="space-y-4 translate-y-6">
                <img
                  src={heroImg3}
                  alt="Kreativne radionice"
                  className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-3xl object-cover shadow-xl border border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-300 -translate-x-2"
                />
                <img
                  src={heroImg4}
                  alt="Zabavne aktivnosti"
                  className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-3xl object-cover shadow-xl border border-white/20 transform -rotate-2 hover:rotate-0 transition-transform duration-300 -translate-x-4"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-white/5 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
