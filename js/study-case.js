import { fetchJson, renderTemplate } from "./helper.js";

/**
 * Get collection of "study-cases" data from the specified path.
 *
 * @param {string} path
 * @returns {Promise<
    Array<{
      name: string;
      description: string;
      icon: string;
      paths: Array<{
        name: string;
        value: string;
      }>;
    }>
  >}
 */
export function getAllStudyCase(path) {
  return fetchJson(path);
}

/**
 * Load the sidebar section on html page using data from "study-cases.json".
 *
 * @param {string[] | undefined} activeNames
 * @param {string} elementId
 */
export async function loadStudyCase(
  activeNames = undefined,
  elementId = "sidebar-study-case",
) {
  activeNames ||= [];

  try {
    const studyCases = await getAllStudyCase("/study-cases.json");

    const element = document.getElementById(elementId);

    for (const studyCase of studyCases.reverse()) {
      const dropdownMenuElement = await Promise.all(
        studyCase.paths.map(({ value, name }) =>
          renderTemplate("../template/study-case-list.html", {
            path: value,
            name,
          }),
        ),
      );
      const html = await renderTemplate("../template/study-case.html", {
        name: studyCase.name,
        description: studyCase.description,
        icon: studyCase.icon,
        activeClassAttribute: activeNames.includes(studyCase.name)
          ? " active"
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
