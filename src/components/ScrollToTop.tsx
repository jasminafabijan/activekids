import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import {
  restoreScroll,
  saveScroll,
  setManualScrollRestoration,
} from '../utils/scrollRestoration'

const ScrollToTop = () => {
    const location = useLocation()
    const navigationType = useNavigationType()
    const prevPathRef = useRef(location.pathname)
    const keyRef = useRef(location.key)

    keyRef.current = location.key

    useLayoutEffect(() => {
        setManualScrollRestoration()
    }, [])

    useLayoutEffect(() => {
        const onScroll = () => {
            saveScroll(keyRef.current)
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
        const { key, pathname, hash } = location
        const prevPath = prevPathRef.current
        prevPathRef.current = pathname

        if (navigationType === 'POP') {
            restoreScroll(key)
            return () => saveScroll(key)
        }

        const isSamePathReplace = navigationType === 'REPLACE' && pathname === prevPath
        const shouldJumpToCategories = pathname === '/' && hash === '#kategorije'

        if (!isSamePathReplace && !shouldJumpToCategories) {
            window.scrollTo(0, 0)
        }

        return () => saveScroll(key)
    }, [location, navigationType])

    return null
}

export default ScrollToTop
