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

/** True when the admin Provera checkbox is on for this school. */
export const isAdminVerified = (schoolId: string) =>
  Boolean(loadAdminFlags(VERIFIED_STORAGE_KEY)[schoolId])
