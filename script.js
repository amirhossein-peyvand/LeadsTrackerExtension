let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

saveInputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++)
    listItems += `
          <li>
            <a target="_blank" href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
          </li>
  `;
  ulEl.innerHTML = listItems;
}
