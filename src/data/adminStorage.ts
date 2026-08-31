import { CONTACTED_SCHOOL_IDS } from './contactedSchoolIds'
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

export const flagsFromIds = (ids: Iterable<string>) => {
  const flags: Record<string, boolean> = {}

  for (const id of ids) {
    flags[id] = true
  }

  return flags
}

export const verifiedIdsFromFlags = (flags: Record<string, boolean>) =>
  Object.entries(flags)
    .filter(([, on]) => on)
    .map(([id]) => id)

const mergeOnFlags = (...records: Record<string, boolean>[]) => {
  const merged: Record<string, boolean> = {}

  for (const record of records) {
    for (const [id, on] of Object.entries(record)) {
      if (on) {
        merged[id] = true
      }
    }
  }

  return merged
}

/** Provera: committed list plus any extra checks still only in this browser. */
export const loadVerifiedFlags = () =>
  mergeOnFlags(flagsFromIds(VERIFIED_SCHOOL_IDS), loadAdminFlags(VERIFIED_STORAGE_KEY))

/** Kontakt: committed list plus any extra checks still only in this browser. */
export const loadContactedFlags = () =>
  mergeOnFlags(flagsFromIds(CONTACTED_SCHOOL_IDS), loadAdminFlags(CONTACTED_STORAGE_KEY))

const postAdminIds = (path: string, ids: string[]) => {
  if (!import.meta.env.DEV) {
    return
  }

  void fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ids),
  })
}

/** Writes Provera to `verifiedSchoolIds.ts` so the live site can use the same list. */
export const persistVerifiedSchoolIds = (ids: string[]) => {
  postAdminIds('/__dev/verified-schools', ids)
}

/** Writes Kontakt to `contactedSchoolIds.ts` so checkboxes survive a cleared browser. */
export const persistContactedSchoolIds = (ids: string[]) => {
  postAdminIds('/__dev/contacted-schools', ids)
}
