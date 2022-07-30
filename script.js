// Assignment Code

var generateBtn = document.querySelector("#generate");


//sets character length by user through prompt and stores value in userInputLength
function userInputLength() {
  let passwordLength = prompt("Enter length of password \nMust be between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) { //if password is shorter than 8 characters or longer than 128
    alert("Password length must be between 8 and 128 characters."); //alert message
    window.location = 'C:/Users/Zac/OneDrive/Desktop/challenge_3/02-Challenge/Develop/index.html'.reload(); //page reloads
  } 
  return passwordLength;
}

//sets whether or not user wants special characters
function userInputSpecialChar() {
  let specialChar = confirm("Would you like password to include special characters? \n(!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)\nClick 'OK' for yes or 'Cancel' for no.");
  if (specialChar) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`~-=_+[]{}?><:;',./"
  } else {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  }
  return specialChar;
}
//sets whether or not user wants uppercase letters

//sets whether or not user wants lower case letters

//sets whether or not user wants 

function generatePassword() {
  var length = userInputLength(); //character length is defined by userInputLength
      type = userInputSpecialChar(); //character type is defined by userInputSpecialChar
      retVal = ""; //variable for generated password
      //for loop
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
