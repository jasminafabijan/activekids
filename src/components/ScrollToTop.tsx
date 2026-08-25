import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import {
  HOME_SCROLL_KEY,
  resetScroll,
  restoreScroll,
  saveScroll,
  setManualScrollRestoration,
  shouldResetScroll,
} from '../utils/scrollRestoration'
import { isCategoriesHash, isHomePath } from '../i18n/routes'

const persistScroll = (historyKey: string, pathname: string) => {
  saveScroll(historyKey)

  if (isHomePath(pathname)) {
    saveScroll(HOME_SCROLL_KEY)
  }
}

const ScrollToTop = () => {
    const location = useLocation()
    const navigationType = useNavigationType()
    const prevPathRef = useRef(location.pathname)
    const keyRef = useRef(location.key)
    const pathRef = useRef(location.pathname)

    keyRef.current = location.key
    pathRef.current = location.pathname

    useLayoutEffect(() => {
        setManualScrollRestoration()
    }, [])

    useLayoutEffect(() => {
        const onScroll = () => {
            persistScroll(keyRef.current, pathRef.current)
        }

        const onPageShow = (event: PageTransitionEvent) => {
            if (event.persisted) {
                restoreScroll(keyRef.current)
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('pageshow', onPageShow)

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('pageshow', onPageShow)
        }
    }, [])

    useLayoutEffect(() => {
        const { key, pathname, hash, state } = location
        const prevPath = prevPathRef.current
        prevPathRef.current = pathname

        if (navigationType === 'POP') {
            if (!restoreScroll(key) && isHomePath(pathname)) {
                restoreScroll(HOME_SCROLL_KEY)
            }

            return () => persistScroll(key, pathname)
        }

        const isSamePathReplace = navigationType === 'REPLACE' && pathname === prevPath
        const shouldJumpToCategories = isHomePath(pathname) && isCategoriesHash(hash)
        const resetToTop = shouldResetScroll(state)

        if (resetToTop) {
            resetScroll()

            if (isHomePath(pathname)) {
                saveScroll(HOME_SCROLL_KEY, 0)
            }
        } else if (shouldJumpToCategories) {
            // HomePage jumps to the categories heading.
        } else if (isHomePath(pathname) && restoreScroll(HOME_SCROLL_KEY)) {
            // “Nazad na početnu” — same scroll the user left, not the top.
        } else if (!isSamePathReplace) {
            resetScroll()
        }

        return () => persistScroll(key, pathname)
    }, [location, navigationType])

    return null
}

export default ScrollToTop
