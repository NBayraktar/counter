let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;


function increment() {
  countEl.innerHTML = count += 1;
}

function save() {
  let save = count + ' - ';
  saveEl.textContent += save;
  countEl.textContent = 0;
  count = 0;

}

function reset() {
  let check = prompt('Are you Sure to delete all data from Previous Entries?');
  if (check === 'ok' || check === '' || check === 'yes') {
    countEl.textContent = 0;
    saveEl.textContent = '';
  }
}