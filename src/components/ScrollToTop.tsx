import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (pathname === '/' && hash === '#kategorije') {
            return
        }

        window.scrollTo(0, 0)
    }, [pathname, hash])

    return null
}

export default ScrollToTop
