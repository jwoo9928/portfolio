export { projectsKo, experienceKo } from "./portfolio-data";
export type { Project } from "./portfolio-data";

import { getProject, type ProjectSlug } from "./portfolio-data";

export function getProjectKo(slug: ProjectSlug) {
  return getProject(slug, "ko");
}
