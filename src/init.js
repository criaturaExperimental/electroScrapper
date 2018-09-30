const { getStuff } = require('./scrapper/scrapper');

let name;
let output = document.querySelector('h2');

document.querySelector('#btn_action').addEventListener('click', async() => {
  changeName(await getStuff());
})


function changeName(name) {
  output.innerHTML = name;
}