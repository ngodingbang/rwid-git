/**
 * @param {string} prefixTarget
 * @param {{ index?: number; name?: string; github_url?: string; visibility?: string; created_at?: Date; }} data
 */
export function generateTrElement(data = {}, tbodyTarget = "repo-tbody") {
  /** @type {HTMLTableRowElement} */
  const row = document.getElementById(tbodyTarget).insertRow(-1);

  row.insertCell(0).textContent = data?.index || "";
  row.insertCell(1).textContent = data?.name || "";
  row.insertCell(2).innerHTML = data?.github_url
    ? `<a href=${data?.github_url}>${data?.github_url}</a>`
    : "";
  row.insertCell(3).textContent = data?.public_repos;
  row.insertCell(4).textContent = data?.created_at;
}
