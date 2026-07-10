import heroImg1Webp from '../assets/images/atletika.webp'
import heroImg1 from '../assets/images/atletika.png'
import heroImg2Webp from '../assets/images/fudbal.webp'
import heroImg2 from '../assets/images/fudbal.jpg'
import heroImg3Webp from '../assets/images/balet.webp'
import heroImg3 from '../assets/images/balet.jpg'
import heroImg4Webp from '../assets/images/tenis.webp'
import heroImg4 from '../assets/images/tenis.jpg'

const imageSize = 'w-[278px] max-w-full'

type HeroImageProps = {
    webp: string
    fallback: string
    alt: string
    className: string
}

const HeroImage = ({ webp, fallback, alt, className }: HeroImageProps) => (
    <picture>
        <source srcSet={webp} type="image/webp" />
        <img src={fallback} alt={alt} decoding="async" className={className} />
    </picture>
)

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 -right-40 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
                style={{ background: 'var(--mint)' }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
                style={{ background: 'var(--peach)' }}
            />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:py-28 lg:grid-cols-2">
                <div className="space-y-6">
                    <div className="tag tag--pill tag--mint">
                        <span className="tag-dot" aria-hidden="true" />
                        Platforma za roditelje
                    </div>

                    <h1 className="hero-title font-extrabold text-primary">
                        <span className="block">Pronađite savršene</span>
                        <span className="block">
                            <span className="relative inline-block">
                                aktivnosti
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none"><path d="M2 8C50 2 150 2 298 8" stroke="var(--peach)" strokeWidth="4" strokeLinecap="round" /></svg>
                            </span>{' '}
                            <span>za</span>
                        </span>
                        <span>vašu decu</span>
                    </h1>
                    <p className="max-w-xl text-lg text-muted md:text-xl">
                        Sport, ples, muzika, umetnost i još mnogo toga — sve na jednom mestu, uz jednostavno filtriranje po lokaciji,{' '}
                        <br />
                        uzrastu i interesovanju.
                    </p>
                </div>

                <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:mx-0">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-[50px] -right-4 z-20 hidden h-16 w-16 rounded-full md:block"
                        style={{ background: 'var(--peach)' }}
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-6 -left-6 z-20 hidden h-24 w-24 rounded-2xl md:block"
                        style={{ background: 'var(--mint)' }}
                    />

                    <div className="relative z-10 grid w-fit grid-cols-[278px_278px] gap-x-[30px] gap-y-[30px]">
                        <div className="flex flex-col gap-[30px]">
                            <HeroImage
                                webp={heroImg1Webp}
                                fallback={heroImg1}
                                alt="Atletika za decu"
                                className={`aspect-[5/4] ${imageSize} rounded-3xl object-cover shadow-card ring-4 ring-mint-soft`}
                            />
                            <HeroImage
                                webp={heroImg2Webp}
                                fallback={heroImg2}
                                alt="Fudbal za decu"
                                className={`aspect-square ${imageSize} rounded-3xl object-cover shadow-card ring-4 ring-peach-soft`}
                            />
                        </div>

                        <div className="flex flex-col gap-[30px] -mt-[30px]">
                            <HeroImage
                                webp={heroImg3Webp}
                                fallback={heroImg3}
                                alt="Ples i balet za decu"
                                className={`${imageSize} h-[334px] rounded-3xl object-cover shadow-card ring-4 ring-peach-soft`}
                            />
                            <HeroImage
                                webp={heroImg4Webp}
                                fallback={heroImg4}
                                alt="Tenis za decu"
                                className={`${imageSize} h-[222px] rounded-3xl object-cover shadow-card ring-4 ring-mint-soft`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
