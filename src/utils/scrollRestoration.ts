const positions = new Map<string, number>()

export const setManualScrollRestoration = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
}

export const saveScroll = (key: string) => {
  positions.set(key, window.scrollY)
}

export const hasSavedScroll = (key: string) => positions.has(key)

export const restoreScroll = (key: string) => {
  const y = positions.get(key)

  if (y == null) {
    return false
  }

  const apply = () => {
    window.scrollTo(0, y)
  }

  apply()
  requestAnimationFrame(apply)
  window.setTimeout(apply, 50)
  window.setTimeout(apply, 150)

  return true
}
