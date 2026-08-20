import { lazy, Suspense, useSyncExternalStore } from 'react'
import { useI18n } from '../i18n/useI18n'

const HeroMedia = lazy(() => import('./HeroMedia'))

const HERO_MEDIA_QUERY = '(min-width: 1024px)'

const subscribeHeroMedia = (onChange: () => void) => {
    const mediaQuery = window.matchMedia(HERO_MEDIA_QUERY)
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
}

const getHeroMediaSnapshot = () => window.matchMedia(HERO_MEDIA_QUERY).matches

const useShowHeroMedia = () =>
    useSyncExternalStore(subscribeHeroMedia, getHeroMediaSnapshot, () => false)

const Hero = () => {
    const showMedia = useShowHeroMedia()
    const { t } = useI18n()

    return (
        <section className="hero">
            <div className="hero-gradients" aria-hidden="true">
                <div className="hero-gradient hero-gradient--mint" />
                <div className="hero-gradient hero-gradient--peach" />
            </div>

            <div className="hero-inner">
                <div className="hero-copy">
                    <div className="tag tag--pill tag--mint self-start">
                        <span className="tag-dot" aria-hidden="true" />
                        {t('hero.tag')}
                    </div>

                    <h1 className="hero-title text-primary">
                        <span className="hero-title-line">{t('hero.titleLine1')}</span>
                        <span className="hero-title-line hero-title-line--accent">
                            <span className="hero-title-underline">
                                {t('hero.titleAccent')}
                                <svg viewBox="0 0 300 12" fill="none" aria-hidden="true">
                                    <path
                                        d="M2 8C50 2 150 2 298 8"
                                        stroke="var(--peach)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>{' '}
                            {t('hero.titleLine2')}
                        </span>
                    </h1>
                    <p className="hero-lead">
                        {t('hero.lead')}
                    </p>
                </div>

                {showMedia ? (
                    <Suspense fallback={null}>
                        <HeroMedia />
                    </Suspense>
                ) : null}
            </div>
        </section>
    )
}

export default Hero
