/**
 * @param {string} prefixTarget
 * @param {{ index?: number; name?: string; address?: string; sim_batch?: string; github_url?: string }} data
 */
export function generateTrElement(data = {}, tbodyTarget = "member-tbody") {
  /** @type {HTMLTableRowElement} */
  const row = document.getElementById(tbodyTarget).insertRow(-1);

  row.insertCell(0).textContent = data?.index || "";
  row.insertCell(1).textContent = data?.name || "";
  row.insertCell(2).textContent = data?.address || "";
  row.insertCell(3).textContent = data?.sim_batch || "";
  row.insertCell(4).textContent = data?.github_url || "";
}
