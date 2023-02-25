// Assignment Code
var generateBtn = document.querySelector("#generate");
// var leng = 0

function passwordLen() {
  leng = window.prompt("Please enter A password length between 8 and 128");
  while (isNaN(leng) || leng < 8 || leng > 128) {
    leng = window.prompt("Not a valid password length, must be between 8 and 128 characters");
  }
  return leng;
}

function ifUpper() {
  upperInput = window.prompt("Do you wish to use uppercases? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useUpper = true;
  } else if(upperInput.toLowerCase()==="no"){
    useUpper = false;
  }else {return;}
}

function ifLower() {
  upperInput = window.prompt("Do you wish to use lowercase? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useLower = true;
  } else if(upperInput.toLowerCase()==="no"){
    useLower = false;
  }else {return;}
}
function ifSpec() {
  upperInput = window.prompt(
    "Do you wish to use special characters? yes or no"
  );
  if (upperInput.toLowerCase() === "yes") {
    useSpec = true;
  } else if(upperInput.toLowerCase()==="no"){
    useSpec = false;
  }else {return;}
}

function ifNum() {
  upperInput = window.prompt("Do you wish to use numbers? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useNum = true;
  } else if(upperInput.toLowerCase()==="no"){
    useNum = false;
  }else {return;}
}

// Write password to the #password input
function writePassword() {
  charray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  numnum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  uppy = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  specc = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
  var passStr = "";
  var passwordText = document.querySelector("#password");
  var lenPass = passwordLen();
  var letterPass = "";
  ifUpper();
  if (useUpper == true) {
    passStr = passStr.concat(uppy);
  }
  ifLower();
  if (useLower == true) {
    passStr = passStr.concat(charray);
  }
  ifNum();
  if (useNum == true) {
    passStr = passStr.concat(numnum);
  }
  ifSpec();
  if (useSpec == true) {
    passStr = passStr.concat(specc);
  }
  for (let index = 0; index < lenPass.length; index++) {
    letterPass = Math.floor(Math.random() * passStr.length);
    password = password + passStr[letterPass];
    console.log(passStr)
  }
  passwordText.value
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
