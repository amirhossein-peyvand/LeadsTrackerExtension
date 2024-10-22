let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

saveInputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++)
    listItems += `<li>${myLeads[i]}</li>`;
  ulEl.innerHTML = listItems;
}
