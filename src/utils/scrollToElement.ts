const getScrollOffset = (element: HTMLElement) => {
    const marginTop = parseFloat(getComputedStyle(element).scrollMarginTop)

    return Number.isFinite(marginTop) ? marginTop : 0
}

const getScrollTarget = (element: HTMLElement) =>
    element.getBoundingClientRect().top + window.scrollY - getScrollOffset(element)

export const scrollToElement = (elementId: string, duration = 900) => {
    const element = document.getElementById(elementId)

    if (!element) {
        return
    }

    const target = getScrollTarget(element)

    if (duration <= 0) {
        window.scrollTo(0, target)
        return
    }

    const start = window.scrollY
    const distance = target - start

    if (Math.abs(distance) < 2) {
        return
    }

    const startTime = performance.now()

    const step = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        window.scrollTo(0, start + distance * progress)

        if (progress < 1) {
            requestAnimationFrame(step)
        }
    }

    requestAnimationFrame(step)
}

export const scrollToCategories = () => scrollToElement('kategorije')

export const jumpToCategories = () => scrollToElement('kategorije', 0)

export const isHomeCategoriesSectionActive = () => {
    const categories = document.getElementById('kategorije')

    if (!categories) {
        return false
    }

    const offset = getScrollOffset(categories) + 8
    const categoriesTop = categories.getBoundingClientRect().top

    if (categoriesTop > offset) {
        return false
    }

    const recentlyAdded = document.querySelector('.recently-added-section')

    if (
        recentlyAdded instanceof HTMLElement &&
        recentlyAdded.getBoundingClientRect().top <= offset
    ) {
        return false
    }

    return true
}
