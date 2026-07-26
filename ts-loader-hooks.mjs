import { pathToFileURL } from 'node:url'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.mts', '.mjs']

export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context)
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND' && context.parentURL) {
      const parentPath = fileURLToPath(context.parentURL)
      const parentDir = path.dirname(parentPath)
      const resolved = path.resolve(parentDir, specifier)
      for (const ext of extensions) {
        if (fs.existsSync(resolved + ext)) {
          return { url: pathToFileURL(resolved + ext).toString(), format: 'module', shortCircuit: true }
        }
        if (fs.existsSync(path.join(resolved, 'index' + ext))) {
          return { url: pathToFileURL(path.join(resolved, 'index' + ext)).toString(), format: 'module', shortCircuit: true }
        }
      }
    }
    throw err
  }
}

export async function load(url, context, nextLoad) {
  if (url.endsWith('.ts') || url.endsWith('.mts')) {
    const filePath = fileURLToPath(url)
    const source = fs.readFileSync(filePath, 'utf-8')
    // Strip TypeScript syntax (basic: remove type imports and annotations)
    let code = source
      .replace(/import\s+type\s+\{[^}]*\}\s+from\s+['"][^'"]+['"]/g, '')
      .replace(/import\s+type\s+\w+\s+from\s+['"][^'"]+['"]/g, '')
      .replace(/:\s*Promise<[^>]+>/g, '')
      .replace(/:\s*React\.ReactNode/g, '')
      .replace(/:\s*string/g, '')
      .replace(/:\s*number/g, '')
      .replace(/:\s*boolean/g, '')
      .replace(/:\s*any/g, '')
      .replace(/as\s+\w+/g, '')
    return { format: 'module', source: code, shortCircuit: true }
  }
  return nextLoad(url, context)
}
