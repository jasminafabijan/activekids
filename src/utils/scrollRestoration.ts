const positions = new Map<string, number>()

/** Shared by `/` and `/en` so “back to home” restores the same place after a language switch. */
export const HOME_SCROLL_KEY = 'home'

export const RESET_SCROLL_STATE = { resetScroll: true } as const

let pendingRaf = 0
let pendingTimers: number[] = []

const cancelPendingScroll = () => {
  if (pendingRaf) {
    window.cancelAnimationFrame(pendingRaf)
    pendingRaf = 0
  }

  pendingTimers.forEach((id) => window.clearTimeout(id))
  pendingTimers = []
}

const applyScroll = (y: number) => {
  cancelPendingScroll()

  const apply = () => {
    window.scrollTo(0, y)
  }

  apply()
  pendingRaf = window.requestAnimationFrame(apply)
  pendingTimers.push(window.setTimeout(apply, 50))
  pendingTimers.push(window.setTimeout(apply, 150))
}

export const setManualScrollRestoration = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
}

export const saveScroll = (key: string, y = window.scrollY) => {
  positions.set(key, y)
}

export const hasSavedScroll = (key: string) => positions.has(key)

export const restoreScroll = (key: string) => {
  const y = positions.get(key)

  if (y == null) {
    return false
  }

  applyScroll(y)
  return true
}

export const resetScroll = () => {
  applyScroll(0)
}

export const shouldResetScroll = (state: unknown) =>
  typeof state === 'object' &&
  state != null &&
  'resetScroll' in state &&
  Boolean((state as { resetScroll?: boolean }).resetScroll)
