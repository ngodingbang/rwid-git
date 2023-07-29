import { fetchJson, renderTemplate } from "./helper.js";

/**
 * Get collection of "community-projects" data from the specified path.
 *
 * @param {string | undefined} path
 * @returns {Promise<import("./community-project-d.ts").Records>}
 */
export function all(path = undefined) {
  return fetchJson(path || "/community-projects.json");
}

/**
 * Get specified collection of "community-projects" data from the specified path.
 *
 * @param {import("./community-project-d.ts").Name} name
 * @param {string | undefined} path
 */
export async function get(name, path = undefined) {
  const records = await all(path);

  return records.find(record => record.name === name);
}

/**
 * Load the community project section on html page using data from "community-projects.json".
 *
 * @param {string} sidebarElementId
 */
export async function loadIntoSection(elementId = "section-community-project") {
  try {
    const records = await all();

    const element = document.getElementById(elementId);

    for (const record of records.reverse()) {
      const html = await renderTemplate("../template/community-project.html", {
        name: record.name,
        description: record.description,
        image: record.image,
        git_url: record.git_url,
        badge: record.badge,
      });

      element.innerHTML += html;
    }
  } catch (error) {
    console.error(error);
    alert("Loading sidebar process is failed.");
  }
}
