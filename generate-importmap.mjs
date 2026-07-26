import { pathToFileURL } from 'node:url'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import { register } from 'node:module'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Register a custom loader that resolves extensionless .ts imports
const loaderPath = pathToFileURL(path.resolve(__dirname, 'ts-loader-hooks.mjs')).toString()
register(loaderPath, import.meta.url)

process.env.DISABLE_PAYLOAD_HMR = 'true'
process.env.PAYLOAD_SECRET = process.env.PAYLOAD_SECRET || 'temp'
process.env.NODE_ENV = 'development'

const configPath = pathToFileURL(path.resolve(__dirname, 'src/payload/payload.config.ts')).toString()
const configModule = await import(configPath)
let config = configModule.default
if (config?.default) config = config.default

console.log('Config loaded! Collections:', config.collections?.map(c => c.slug))

const genPath = pathToFileURL(path.resolve(__dirname, 'node_modules/payload/dist/bin/generateImportMap/index.js')).toString()
const { generateImportMap } = await import(genPath)

await generateImportMap(config, { force: true })
console.log('Import map generated!')
process.exit(0)
