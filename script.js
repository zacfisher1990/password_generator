// Assignment Code

var generateBtn = document.querySelector("#generate");

//code for each criteria password prompt

//sets character length by user through prompt and stores value in userInputLength
function userInputLength() {
  let passwordLength = prompt("Enter length of password \nMust be between 8 and 128 characters.");
  return passwordLength;
}
//sets character types in password
function userInputSpecialChar() {
  let passwordType = confirm("Would you like password to include special characters? \n(!@#$%^&*()`~-=_+[]{}?><:;',./)");
  if (passwordType) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`~-=_+[]{}?><:;',./"
  } else {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  }
  return passwordType;
}


//
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
