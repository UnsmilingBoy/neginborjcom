import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { Users } from "./collections/Users";
import { Projects } from "./collections/Projects";
import { Machinery } from "./collections/Machinery";
import { Certifications } from "./collections/Certifications";
import { RFQSubmissions } from "./collections/RFQSubmissions";
import { JobApplications } from "./collections/JobApplications";
import { Media } from "./collections/Media";
import { ResumeFiles } from "./collections/ResumeFiles";
import { BlueprintFiles } from "./collections/BlueprintFiles";

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(__dirname),
    },
  },
  collections: [
    Users,
    Projects,
    Machinery,
    Certifications,
    RFQSubmissions,
    JobApplications,
    ResumeFiles,
    BlueprintFiles,
    Media,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
});
