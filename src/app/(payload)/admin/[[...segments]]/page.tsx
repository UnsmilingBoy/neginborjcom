import config from "@payload-config";
import { generatePageMetadata, RootPage } from "@payloadcms/next/views";
import { importMap } from "@/payload/admin/importMap";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export const generateMetadata = ({ params }: Args) =>
  generatePageMetadata({
    config,
    params,
    searchParams: Promise.resolve({}),
  });

export default function AdminPage(args: Args) {
  return RootPage({
    config,
    importMap,
    params: args.params,
    searchParams: args.searchParams,
  });
}
