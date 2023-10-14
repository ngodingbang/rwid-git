/**
 * @param {string} prefixTarget
 * @param {{ index?: number; region?: string; country?: string; basic_salary?: string; web_source?: string }} data
 */
export function generateTrElement (data = {}, tbodyTarget = "member-tbody") {
  /** @type {HTMLTableRowElement} */
  const row = document.getElementById(tbodyTarget).insertRow(-1);

  row.insertCell(0).textContent = data?.index || "";
  row.insertCell(1).textContent = data?.region || "";
  row.insertCell(2).textContent = data?.country || "";
  row.insertCell(3).textContent = data?.basic_salary || "";
  row.insertCell(4).innerHTML = data?.web_source
    ? `<a href=${data?.web_source}>${data?.web_source}</a>`
    : "";
}