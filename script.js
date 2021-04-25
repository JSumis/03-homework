// Array for lowercase chars
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array for uppercase chars
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array for numeric characters
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array for special characters
var specialChar = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", ":", ",", ".", "-", "_", "?", "/", "\\", "|"];



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
    return;
  }
  else if (userChoiceLength < 8) {
    alert("Password must be a minimum of 8 characters");
    return;
  }
  else if (userChoiceLength > 128) {
    alert("Password can have a maximum of 128 characters");
    return;
  }

  //Click-box to include lowercase characters boolean
  var userChoiceLowercase = confirm("Click OK if you want lowercase characters");

  //Click-box to include uppercase characters
  var userChoiceUppercase = confirm("Click OK if you want uppercase characters");

  //Click-box to include numeric charcters
  var userChoiceNumeric = confirm("Click OK if you want numeric characters");

  //Click-box to include special characters
  var userChoiceSpecialChar = confirm("Click OK if you want special characters");


  // Check to see at least one box is clicked OK
  if (userChoiceLowercase === false && userChoiceUppercase === false && userChoiceNumeric === false && userChoiceSpecialChar === false) {
    alert("Password must contain at least one of the following characters: lowercase, uppercase, numeric, special character");
    return;
  }

  var selectedChars = [];
  if (userChoiceLowercase) {
    selectedChars = selectedChars.concat(lowercaseChar);
  }
  if (userChoiceUppercase) {
    selectedChars = selectedChars.concat(uppercaseChar);
  }

  if (userChoiceNumeric) {
      selectedChars = selectedChars.concat(numericChar);
    }

  if (userChoiceSpecialChar) {
      selectedChars = selectedChars.concat(specialChar);
    }
  if (selectedChars.length == 0) {
    alert("Password must contain at least one of the following characters: lowercase, uppercase, numeric, special character");
    return;
  }
  
  var i;
  var password = "";
  for (i = 0; i < userChoiceLength; i++) {
     var randomChar = selectedChars[Math.floor(Math.random()*selectedChars.length)];
    password = password.concat(randomChar);
  }
  return password;
}

  // Enter arrays with user options into random number generator
  // Generate - display password


  // More Psuedocode

  // Grab random# generator
  // Get random index from array of options
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