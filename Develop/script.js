// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  let characters = "";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  let passlength = window.prompt("Enter a number between 8 and 128 to decide password length");
  if (passlength < 8 || passlength > 128) {
    window.alert("Passwords must be at least 8 to 128 characters");
    return writePassword;
  }
  let upper = window.prompt("Enter Y to add uppercase characters. Anything else = exclude.");
  let lower = window.prompt("Enter Y to add lowercase characters. Anything else = exclude.");
  let numeric = window.prompt("Enter Y to add numbers. Anything else = exclude.");
  let special = window.prompt("Enter Y to add special characters. Anything else = exclude.");

  if (upper === "Y") {
    characters += upperCase;
  }
  if (lower === "Y") {
    characters += lowerCase;
  }
  if (numeric === "Y") {
    characters += number;
  }
  if (special === "Y") {
    characters += symbols;
  }

  let password = "";

  for (let i = 1; i <= passlength; i++) {
    // let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);