let saveInputBtn = document.getElementById("input-btn");
let myLeads = [];
let inputEl = document.getElementById("input-el");

saveInputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});
