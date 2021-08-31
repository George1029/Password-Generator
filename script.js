// Assignment code here

var generateBtn = document.querySelector("#generate");
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];
var confirmations = [];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Write password to the #password input
function generatePassword() {
  //checking how long the password will be //

  var passwordLength = prompt("Enter how many characters you would like your password to be, must be between 8 - 128 characters.");
  var confirmPasswordLength = parseInt(passwordLength);
  console.log(confirmPasswordLength)

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid choice. Try again.");
    return;
  }
  // confirm if they want lowercase letters//
  var lowerCaseConf = confirm("Do you want lowercase letters?");
  if (lowerCaseConf === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      confirmations.push(lowerCase[i]);
    }
  }
  // confirm if they want uppercase letters. //

  var upperCaseConf = confirm("Do you want uppercase letters?");
  if (upperCaseConf === true) {
    for (var i = 0; i < upperCase.length; i++) {
      confirmations.push(upperCase[i]);
    }
  }
  var numberConf = confirm("Do you want numbers?");
  if (numberConf === true) {
    for (var i = 0; i < numbers.length; i++) {
      confirmations.push(numbers[i]);
    }
  }
  var specialConf = confirm("Do you want characters?");
  if (specialConf === true) {
    for (var i = 0; i < special.length; i++) {
      confirmations.push(special[i]);
    }
  }
  var randomPass = "";
  for (var i = 0; i < confirmPasswordLength; i++) {
    confirmations[
      Math.floor(Math.random() * confirmations.length)];
    randomPass +=
      confirmations[
      Math.floor(Math.random() * confirmations.length)];
  }
  return randomPass
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
