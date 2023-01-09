const crypto = require('crypto');
const gen = require ('Assets\gen.html')

function generatePassword(length) {
  // Check if the length is valid
  if (isNaN(length) || length < 8) {
    length = 8;
  }

  // Use crypto to generate a random password
  return crypto.randomBytes(length).toString('hex');
}

// Generate a password with a length of 8 characters
const password = generatePassword(8);

console.log(password);
