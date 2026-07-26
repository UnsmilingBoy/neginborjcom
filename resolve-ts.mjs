import { pathToFileURL } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const tsExtensions = ['.ts', '.tsx', '.mts', '.js', '.jsx', '.mjs']

export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context)
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND' && context.parentURL) {
      let parentUrl = context.parentURL
      if (parentUrl.startsWith('file://')) {
        const parentPath = new URL(parentUrl).pathname.replace(/^\/([A-Z]:)/, '$1')
        const parentDir = path.dirname(parentPath)
        const resolved = path.resolve(parentDir, specifier)
        for (const ext of tsExtensions) {
          if (fs.existsSync(resolved + ext)) {
            return { url: pathToFileURL(resolved + ext).toString(), shortCircuit: true }
          }
        }
      }
    }
    throw err
  }
}
