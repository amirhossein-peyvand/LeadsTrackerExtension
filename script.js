let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTabBtn = document.getElementById("save-tab-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++)
    listItems += `
          <li>
            <a target="_blank" href='${leads[i]}'>
                ${leads[i]}
            </a>
          </li>
  `;
  ulEl.innerHTML = listItems;
}

saveInputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

saveTabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("click", () => {
  inputEl.value = "";
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
