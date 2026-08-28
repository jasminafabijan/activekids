import { VERIFIED_SCHOOL_IDS } from './verifiedSchoolIds'

export const CONTACTED_STORAGE_KEY = 'kiddokompas-admin-contacted'
export const VERIFIED_STORAGE_KEY = 'kiddokompas-admin-verified'

export const loadAdminFlags = (key: string): Record<string, boolean> => {
  if (typeof localStorage === 'undefined') {
    return {}
  }

  try {
    const stored = localStorage.getItem(key)
    return stored ? (JSON.parse(stored) as Record<string, boolean>) : {}
  } catch {
    return {}
  }
}

export const verifiedIdsFromFlags = (flags: Record<string, boolean>) =>
  Object.entries(flags)
    .filter(([, on]) => on)
    .map(([id]) => id)

const sameIdList = (a: string[], b: Iterable<string>) => {
  const left = [...new Set(a)].sort()
  const right = [...new Set(b)].sort()
  return left.length === right.length && left.every((id, index) => id === right[index])
}

/** Writes Provera to `verifiedSchoolIds.ts` so the live site can use the same list. */
export const persistVerifiedSchoolIds = (ids: string[]) => {
  if (!import.meta.env.DEV) {
    return
  }

  void fetch('/__dev/verified-schools', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ids),
  })
}

/** Once on localhost: copy existing Provera checkboxes into the committed list. */
export const syncVerifiedSchoolsFromBrowser = () => {
  if (!import.meta.env.DEV) {
    return
  }

  const ids = verifiedIdsFromFlags(loadAdminFlags(VERIFIED_STORAGE_KEY))

  if (ids.length === 0 || sameIdList(ids, VERIFIED_SCHOOL_IDS)) {
    return
  }

  persistVerifiedSchoolIds(ids)
}
