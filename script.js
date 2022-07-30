// Assignment Code

var generateBtn = document.querySelector("#generate");


//sets character length by user through prompt and stores value in userInputLength
function userInputLength() {
  let passwordLength = prompt("Enter length of password \nMust be between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) { //if password is shorter than 8 characters or longer than 128
    alert("Password length must be between 8 and 128 characters."); //alert message
    window.location = 'https://zacfisher1990.github.io/password_generator/'.reload(); //page reloads
  } 
  return passwordLength;
}
//sets whether or not user wants lower case letters
function userInputLowerCase() {
  let lowerCase = confirm("Would you like password to include lowercase letters?\nClick 'OK' for yes or 'Cancel' for no.");
  if (lowerCase) {
    charsetLower = "abcdefghijklmnopqrstuvwxyz";
  } else {
    charsetLower = "";
  }
  return lowerCase;
}
//sets whether or not user wants uppercase letters
function userInputUpperCase() {
  let upperCase = confirm("Would you like password to include uppercase letters?\nClick 'OK' for yes or 'Cancel' for no.");
  if (upperCase) {
    charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    charsetUpper = "";
  }
  return upperCase;
}

//sets whether or not user wants numbers
function userInputNumbers() {
  let numbers = confirm("Would you like password to include numbers?\nClick 'OK' for yes or 'Cancel' for no.");
  if (numbers) {
    charsetNumbers = "0123456789";
  } else {
    charsetNumbers = "";
  }
  return numbers;
}
//sets whether or not user wants special characters
function userInputSpecialChar() {
  let specialChar = confirm("Would you like password to include special characters? \n(!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)\nClick 'OK' for yes or 'Cancel' for no.");
  if (specialChar) {
    charsetSpecial = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else {
    charsetSpecial = "";
  }
  return specialChar;
}


function generatePassword() {
  var length = userInputLength(); //character length is defined by userInputLength
      userInputLowerCase();       //Lowercase function 
      userInputUpperCase();       //Uppercase function
      userInputNumbers();         //Number function
      userInputSpecialChar();     //Special character function 
      charset = (charsetLower + charsetUpper + charsetNumbers + charsetSpecial); // specific characters called into charset variable
      passwordGenerated = ""; //variable for generated password
      //for loop
  for (var i = 0, n = charset.length; i < length; ++i) {
      passwordGenerated += charset.charAt(Math.floor(Math.random() * n));
  }
  return passwordGenerated;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
