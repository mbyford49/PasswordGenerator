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
// Function starts a series of prompts where the user chooses the makeup of their password, begining with password length
function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters will your password contain")
  );

// If statement requiring password length to be between 8 and 128 characters  
  if (length < 8||length>128) {
    alert("Password must contain between 8 and 128 characters");
    writePassword()
// Else statement providing character choices, given password length is acceptable    
  }else{
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
// Object created to store users choices that make up their password
  var passwordOptions = {
    length: length,
    hasuppercaseletters: hasuppercaseletters,
    haslowercaseletters: haslowercaseletters,
    hasnumbers: hasnumbers,
    hasspecialcharacters: hasspecialcharacters,
  };

  return passwordOptions;
  }

}
// Function for getting a random element from an array
function getRandom(array) {
  var randIndex = Math.floor(Math.random() * array.length);
  var randElement = array[randIndex];
  return randElement;
}
// Function to generate a password based on the users choices
function generatePassword() {
  var options = getPasswordOptions();

// Empty variable to store password while being concatenated  
  var result = [];

// Empty array to store all possible characters based on users choices
  var possibleCharacters = [];

// Array containing one of each chosen character, making sure each chosen character is used
  var guaranteedCharacters = [];

// If statements that add characters to the possibleCharacters array and push one random character to the guaranteedCharacters array 
// based on users character choices
  if (options.hasuppercaseletters) {
    possibleCharacters = possibleCharacters.concat(uppercaseletters);
    guaranteedCharacters.push(getRandom(uppercaseletters));
  }

  if (options.haslowercaseletters) {
    possibleCharacters = possibleCharacters.concat(lowercaseletters);
    guaranteedCharacters.push(getRandom(lowercaseletters));
  }

  if (options.hasnumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.hasspecialcharacters) {
    possibleCharacters = possibleCharacters.concat(specialcharacters);
    guaranteedCharacters.push(getRandom(specialcharacters));
  }
// For loop to iterate over password length, making random selections from the possibleCharacters array
// and concatenating them into the results variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
// For loop ensuring one of each guaranteed character is in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join("");
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
