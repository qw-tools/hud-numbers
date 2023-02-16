import { slugify } from "./str";

export function fileSlug(filename: string): string {
  return slugify(filename).replaceAll("-", "_");
}
