let addEl = document.getElementById("resetNumber");
let saveEl = document.getElementById("savePart");
let count = 0;

function addingNumber() {
  count += 1;
  addEl.textContent = count;
}

function saveNumber() {
  saveEl.textContent += " " + count + " ";
  addEl.textContent = 0;
  count = 0;
}
