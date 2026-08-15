// Generates src/payload/payload-types.ts
//
// `payload generate:types` fails on Node 24: its CLI require()s the config, and
// @payloadcms/richtext-lexical is an ESM graph with top-level await. Loading the
// config through a real ESM loader (tsx/esm) sidesteps that entirely.
//
// Run: node --import tsx/esm scripts/generate-types.mjs
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

process.env.DISABLE_PAYLOAD_HMR = 'true'
process.env.PAYLOAD_SECRET ||= 'temp-secret-for-type-generation'
process.env.DATABASE_URI ||= 'postgresql://localhost:5432/placeholder'

const configModule = await import(
  pathToFileURL(path.join(root, 'src/payload/payload.config.ts')).href
)

const { sanitizeConfig } = await import('payload')
const { generateTypes } = await import(
  pathToFileURL(path.join(root, 'node_modules/payload/dist/bin/generateTypes.js')).href
)

const config = await sanitizeConfig(await (configModule.default?.default ?? configModule.default))

await generateTypes(config, { log: true })
console.log('✅ Types written to src/payload/payload-types.ts')
process.exit(0)
