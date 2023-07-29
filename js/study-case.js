import { fetchJson, renderTemplate } from "./helper.js";

/**
 * Get collection of "study-cases" data from the specified path.
 *
 * @param {string | undefined} path
 * @returns {Promise<import("./study-case-d.ts").Records>}
 */
export function all(path = undefined) {
  return fetchJson(path || "/study-cases.json");
}

/**
 * Get specified collection of "study-cases" data from the specified path.
 *
 * @param {import("./study-case-d.ts").Name} name
 * @param {string | undefined} path
 */
export async function get(name, path = undefined) {
  const records = await all(path);

  return records.find(record => record.name === name);
}

/**
 * Load the sidebar section on html page using data from "study-cases.json".
 *
 * @param {import("./study-case-d.ts").ActiveRecord | undefined} active
 * @param {string} elementId
 */
export async function loadIntoSidebar(
  active = undefined,
  elementId = "sidebar-study-case",
) {
  try {
    const records = await all();

    const element = document.getElementById(elementId);

    for (const record of records.reverse()) {
      const dropdownMenuElement = await Promise.all(
        record.paths.map(path =>
          renderTemplate("../template/study-case-list.html", {
            path: path.value,
            name: path.name,
            activeClass:
              active !== undefined
                ? active.name === record.name && active.path.name === path.name
                  ? ` class="active"`
                  : ""
                : "",
          }),
        ),
      );
      const html = await renderTemplate("../template/study-case.html", {
        name: record.name,
        description: record.description,
        icon: record.icon,
        activeClassAttribute:
          active !== undefined
            ? active.name === record.name
              ? " active"
              : ""
            : "",
        dropdownMenuElement: dropdownMenuElement.join(""),
      });

      element.insertAdjacentHTML("afterend", html);
    }
  } catch (error) {
    console.error(error);
    alert("Loading sidebar process is failed.");
  }
}

/**
 * Load the breadcrumb section on html page using data from "study-cases.json".
 *
 * @param {import("./study-case-d.ts").ActiveRecord} active
 * @param {string} elementId
 */
export async function loadIntoBreadcrumb(
  active,
  elementId = "breadcrumb-study-case",
) {
  try {
    const record = await get(active.name);

    if (record === undefined) {
      throw new Error("Active record from study case is not found.");
    }

    const element = document.getElementById(elementId);
  } catch (error) {
    console.error(error);
    alert("Loading sidebar process is failed.");
  }
}
