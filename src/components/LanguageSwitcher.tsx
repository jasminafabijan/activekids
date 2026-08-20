import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'
import type { Lang } from '../i18n/types'

const LANG_LABEL: Record<Lang, string> = { sr: 'SR', en: 'EN' }

type LanguageSwitcherProps = {
  className?: string
}

const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const { lang, t, path } = useI18n()

  return (
    <div
      className={`lang-switch${className ? ` ${className}` : ''}`}
      role="group"
      aria-label={t('nav.language')}
    >
      {(['sr', 'en'] as const).map((itemLang, index) => {
        const label = LANG_LABEL[itemLang]
        const isActive = itemLang === lang

        return (
          <span key={itemLang} className="lang-switch-item">
            {index > 0 ? (
              <span className="lang-switch-sep" aria-hidden="true">
                /
              </span>
            ) : null}
            {isActive ? (
              <span className="lang-switch-option is-active" aria-current="true">
                {label}
              </span>
            ) : (
              <Link
                to={path.forLang[itemLang]}
                className="lang-switch-option"
                lang={itemLang}
                hrefLang={itemLang}
              >
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
