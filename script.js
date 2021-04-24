// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* Starting Pseudo-code
Prompt for length of password
 choose a length of at least 8 characters and no more than 128 characters
  If answer is not between 8 and 128 ALERT that answer must be min 8 max 128


*/
// Create function with user choice options for number of digits and other possible outcomes (not in range, not a number)
function generatePassword() {
  var userChoiceLength = prompt("Choose length of password, must be between 8 and 128 characters");
  if (!Number.isInteger(+userChoiceLength)) {
    alert("Response must be a number between 8-128")
  }
  else if (userChoiceLength < 8) {
    alert("Password must be a minimum of 8 characters");
  }
  else if (userChoiceLength > 128) {
    alert("Password can have a maximum of 128 characters");
  }
  // More Psuedocode
  // Prompt user for choices: uppercase, lowercase, special characters, numeric (integer)
// Take user generated options and enter into array?
// Enter array with user options into random number generator
// Generate - display password



// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
}