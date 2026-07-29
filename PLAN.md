# Payload CMS Integration Plan

## Current State Analysis

- Payload CMS 3.86.0 with PostgreSQL already configured
- Collections exist: Projects, Machinery, Certifications, RFQSubmissions, JobApplications, Media, Users, ResumeFiles
- Seed script exists with sample data for Projects, Machinery, Certifications
- JobApplications form already wired to Payload via server action
- RFQ form ONLY sends email (ignores RFQSubmissions collection + blueprint upload)
- All content pages use hardcoded sample data (use client components)
- Payload types not generated yet (ESM config issue with Node 24)

## Plan

### 1. Generate Payload Types (BLOCKER)

- Fix ESM config issue or use alternative approach
- Run `npx payload generate:types` after fixing config

### 2. Create Missing Collections

- **HomeServices** - for ServicesGrid on home page (4 services)
- **Stats** - for StatsGrid on home page + about page stats
- **CompanyTimeline** - for Timeline on home page + About page milestones
- **AboutPageContent** - for About page values, CEO message, highlights

### 3. Seed All Sample Data

- Run seed script to populate existing collections
- Create additional seed data for new collections
- Upload real images to Media collection

### 4. Convert Pages to Server Components + Fetch from Payload

- **Home page** (`src/app/(app)/page.tsx`):
  - StatsGrid → server fetch Stats
  - ServicesGrid → server fetch HomeServices
  - Timeline → server fetch CompanyTimeline
  - FeaturedProjects → server fetch Projects
- **About page** (`src/app/(app)/about/page.tsx`):
  - Stats, highlights, values, milestones, CEO message, certifications → server fetch
- **Projects page** (`src/app/(app)/projects/page.tsx`): server fetch Projects
- **Machinery page** (`src/app/(app)/machinery/page.tsx`): server fetch Machinery

### 5. Fix RFQ Form

- Create server action to save to RFQSubmissions collection
- Handle blueprint file upload to Media
- Keep email sending functionality

### 6. Verify All Pages Work

- Run dev server and verify data loads from Payload
- Test RFQ form submission
- Test Job Application form (already working)

---

## Implementation Order

1. Fix Payload config for type generation
2. Create 4 new collections
3. Update seed.ts with all sample data
4. Generate Payload types
5. Run seed
6. Create server actions for fetching data
7. Convert pages to server components
8. Fix RFQ form
9. Test everything
