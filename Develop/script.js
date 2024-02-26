// Array's of characters available for passwords
var uppercaseletters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N",
  "O","P","Q","R","S","T","U","V","W","X","Y","Z",
];

var lowercaseletters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n",
  "o","p","q","r","s","t","u","v","w","x","y","z",
];

var numbers = ["0","1","2","3","4","5","6","7","8","9",];

var specialcharacters = [
  "!","@","#","$","%","^","&","*","(",")","-","_","=","+",
  "[","{","]","}",";",":","'",",","<",".",">","/","?","|",
];

function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters will your password contain")
  );

  if (length < 8) {
    alert("Password must contain at least 8 characters");
    return prompt;
  }

  if (length > 128) {
    alert("Password must contain no more than 128 characters");
    return prompt;
  }

  var hasuppercaseletters = confirm("Click OK to include uppercase letters");

  var haslowercaseletters = confirm("Click OK to include lowercase letters");

  var hasnumbers = confirm("Click OK to include numbers");

  var hasspecialcharacters = confirm("Click OK to include special characters");

  if (
    hasuppercaseletters === false &&
    haslowercaseletters === false &&
    hasnumbers === false &&
    hasspecialcharacters === false
  ) {
    alert("Password must contain at least one character type");
    return prompt;
  }

  var passwordOptions = {
    length: length,
    hasuppercaseletters: hasuppercaseletters,
    haslowercaseletters: haslowercaseletters,
    hasnumbers: hasnumbers,
    hasspecialcharacters: hasspecialcharacters,
  };

  return passwordOptions;
}

function generatePassword() {
  var options = getPasswordOptions();
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
