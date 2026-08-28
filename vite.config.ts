import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const verifiedSchoolsFile = path.join(rootDir, 'src/data/verifiedSchoolIds.ts')

const writeVerifiedSchoolIds = (ids: string[]) => {
  const unique = [...new Set(ids.filter((id) => typeof id === 'string' && id.length > 0))].sort(
    (a, b) => a.localeCompare(b)
  )
  const lines = unique.map((id) => `  '${id}',`).join('\n')
  const contents = `/**
 * School ids shown on the public catalog, map and search — locally and on kiddokompas.rs.
 * Admin Provera writes this file in \`npm run dev\`. Unchecked schools stay in admin, not here.
 */
export const VERIFIED_SCHOOL_IDS = new Set<string>([
${lines}
])
`

  fs.writeFileSync(verifiedSchoolsFile, contents)
}

const verifiedSchoolsDevApi = (): Plugin => ({
  name: 'verified-schools-dev-api',
  configureServer(server) {
    server.middlewares.use('/__dev/verified-schools', (req, res, next) => {
      if (req.method !== 'POST') {
        next()
        return
      }

      const chunks: Buffer[] = []
      req.on('data', (chunk) => {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
      })
      req.on('end', () => {
        try {
          const ids = JSON.parse(Buffer.concat(chunks).toString('utf8')) as unknown
          if (!Array.isArray(ids) || ids.some((id) => typeof id !== 'string')) {
            res.statusCode = 400
            res.end('invalid')
            return
          }

          writeVerifiedSchoolIds(ids)
          const count = [...new Set(ids.filter((id) => typeof id === 'string' && id.length > 0))].length
          server.config.logger.info(`[verified-schools] wrote ${count} ids`)
          res.statusCode = 204
          res.end()
        } catch {
          res.statusCode = 400
          res.end('invalid')
        }
      })
    })
  },
})

export default defineConfig({
  plugins: [react(), verifiedSchoolsDevApi()],
})
