# Payload CMS Integration — Finalized Plan

## Scope (per user decisions)

- **Seed sample data → you edit later** in the admin panel.
- **Core entities only**: wire **Projects**, **Machinery**, **Certifications** to Payload.
- Pure marketing copy stays **static** (home Services grid, home Stat counters, home Timeline; About page Values / CEO quote / milestones / highlights). No new content collections for these.
- **RFQ form**: save to `rfq-submissions` **and** email (email best-effort).
- **About certifications**: fetch from the Certifications collection; seed the full ~14 items so nothing is lost.

## Confirmed environment facts

- Next 16.2.11, Payload 3.86, Node 24, Postgres healthy. `payload-types.ts` not yet generated.
- Job-application form already saves to Payload (leave as-is).
- Next 16 dynamic routes: `params: Promise<{ slug }>` → must `await params`.
- Payload CLI supports `payload run <file>` (seed) and `payload generate:types`.
- `Media` is `image/*` only; blueprints are PDF/DWG/DXF/ZIP → need a separate upload collection.

---

## Work items

### 1. Schema: blueprint upload collection
- New `src/payload/collections/BlueprintFiles.ts` (mirror `ResumeFiles`: admin-only read/update/delete, `staticDir: "../public/blueprints"`, permissive mimeTypes incl. pdf/zip/rar/octet-stream, `useAsTitle: "companyName"` label field).
- Register it in `payload.config.ts`.
- Point `RFQSubmissions.blueprintFile.relationTo` → `"blueprint-files"` (was `media`). DB is empty, dev push handles the change.

### 2. Add npm scripts + generate types
- `package.json`: add `"generate:types": "payload generate:types"` and `"seed": "payload run src/payload/seed.ts"`.
- Run `npm run generate:types` → produces `src/payload/payload-types.ts`.

### 3. Expand & run seed (`src/payload/seed.ts`)
- Keep existing 5 projects; add the extra 3 from the projects page (suleh-anbar, pol-aber, edari-building) + `description` for each so detail pages have content.
- Machinery: add the 3rd item per factory (overhead cranes) to match the machinery page.
- Certifications: expand from 6 → the full ~14 items shown on About (ISO set, EN 1090, CE, tributes, ministry commendations, etc.).
- Seed leaves `coverImage`/`image` pointing at one placeholder Media doc (no binary) — pages fall back to existing SVG placeholders until real images are uploaded in admin.
- Run `npm run seed`.

### 4. Data-access helper
- Add small typed fetch helpers in `src/lib/payload.ts` (or a new `src/lib/queries.ts`): `getProjects()`, `getProjectBySlug()`, `getMachinery()`, `getCertifications()`, using `getPayloadClient()` with `depth: 1` so upload relations resolve to `{ url }`.
- Add a `mediaUrl(doc, fallback)` helper that returns the Media `url` or the SVG placeholder.

### 5. Wire pages (server/client split where needed)

- **Home `FeaturedProjects`**: `page.tsx` is already a server component — fetch top projects there, pass `projects` prop into `FeaturedProjects` (make it accept the prop, drop `demoProjects`).
- **Projects list `projects/page.tsx`**: convert to async server component that fetches all projects; move the filter UI into a new client `ProjectsGrid` component (keeps `useState` + `FilterTabs`). Remove hardcoded array.
- **Project detail `projects/[slug]/page.tsx`**: convert to async server component, `await params`, fetch by slug, `notFound()` if missing; render richText `description` (lexical → serialized/plain). Keep `ImageSlider` (client) fed from `gallery`/`coverImage`.
- **Machinery `machinery/page.tsx`**: convert to async server component that fetches machinery grouped by `factoryLocation`; move the Tabs UI into a client `MachineryTabs` component. Remove hardcoded `machineryData` (keep factory names/established labels as static UI text).
- **About `about/page.tsx`**: convert page to a server component that fetches certifications; move the current animated JSX into a client `AboutView` that receives `certifications` as a prop. All other about content stays static in `AboutView`.

### 6. RFQ form → save + email
- `Step3Blueprint`: keep the real `File` (lift `blueprintFile: File | null` into `RFQForm` state alongside the text `formData`).
- `RFQForm.handleSubmit`: build `FormData` (text fields + optional file), call `submitRFQ(formData)`.
- Rewrite `src/app/actions/submitRFQ.ts` to accept `FormData`:
  1. Validate required fields.
  2. If a blueprint file is present, `payload.create({ collection: "blueprint-files", file })` → get id.
  3. `payload.create({ collection: "rfq-submissions", data: {...text, blueprintFile: id, status: "new"} })`.
  4. Best-effort email (keep existing nodemailer logic; if SMTP unset, skip email but still return success — save already happened).
- Update `Step4Review` label source if needed (still shows chosen file name).

### 7. Verify
- `npm run generate:types` clean, `npm run seed` populates, `npm run build` (or `dev`) compiles.
- Manually: projects/machinery/about render from DB; RFQ submit creates a `rfq-submissions` row (+ blueprint file) and still emails when SMTP is configured; job-application form still works.

## New files
- `src/payload/collections/BlueprintFiles.ts`
- `src/lib/queries.ts` (data-access helpers)
- `src/components/projects/ProjectsGrid.tsx` (client)
- `src/components/machinery/MachineryTabs.tsx` (client)
- `src/components/about/AboutView.tsx` (client)

## Modified files
- `src/payload/payload.config.ts`, `src/payload/collections/RFQSubmissions.ts`, `src/payload/seed.ts`
- `package.json`, `src/lib/payload.ts`
- `src/app/(app)/page.tsx`, `.../projects/page.tsx`, `.../projects/[slug]/page.tsx`, `.../machinery/page.tsx`, `.../about/page.tsx`
- `src/components/home/FeaturedProjects.tsx`, `src/components/projects/ProjectCard.tsx` (placeholder fallback)
- `src/components/rfq/RFQForm.tsx`, `.../Step3Blueprint.tsx`, `src/app/actions/submitRFQ.ts`

## Notes / risks
- If `payload generate:types` hits the Node-24 ESM issue noted earlier, I'll fall back to hand-written local interfaces for the fetch helpers (queries don't strictly need generated types) and report it — no blocker to the feature.
- Marketing sections intentionally remain hardcoded (your "core entities only" choice).
