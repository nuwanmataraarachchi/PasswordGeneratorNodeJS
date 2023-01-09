
const gen = require('Generator\gen.js')
const form = document.getElementById('password-form');
const passwordContainer = document.getElementById('password-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const length = form.elements.length.value;
  const password = generatePassword(length);

  passwordContainer.innerHTML = `<p>Your password: ${password}</p>`;
});
