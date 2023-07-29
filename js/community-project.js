import { fetchJson, renderTemplate } from "./helper.js";

/**
 * Get collection of "community-projects" data from the specified path.
 *
 * @param {string} path
 * @returns {Promise<Array<{
      name: string;
      description: string;
      image?: string;
      git_url: string;
      badge?: string;
    }>>}
 */
export function getAllCommunityProject(path) {
  return fetchJson(path);
}

/**
 * Load the community project section on html page using data from "community-projects.json".
 *
 * @param {string} sidebarElementId
 */
export async function loadCommunityProject(
  elementId = "section-community-project",
) {
  try {
    const projects = await getAllCommunityProject("/community-projects.json");

    const element = document.getElementById(elementId);

    for (const project of projects.reverse()) {
      const html = await renderTemplate("../template/community-project.html", {
        name: project.name,
        description: project.description,
        image: project.image,
        git_url: project.git_url,
        badge: project.badge,
      });

      element.innerHTML += html;
    }
  } catch (error) {
    console.error(error);
    alert("Loading sidebar process is failed.");
  }
}
