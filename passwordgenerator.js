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
  useUpper = false;
  upperInput = window.prompt("Do you wish to use uppercases? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useUpper = true;
  }
}

function ifLower() {
  useLower = false;
  upperInput = window.prompt("Do you wish to use lowercase? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useLower = true;
  }
}
function ifSpec() {
  useSpec = false;
  upperInput = window.prompt(
    "Do you wish to use special characters? yes or no"
  );
  if (upperInput.toLowerCase() === "yes") {
    useSpec = true;
  }
}

function ifNum() {
  useNum = false;
  upperInput = window.prompt("Do you wish to use numbers? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useNum = true;
  }
}

// Write password to the #password input
function writePassword() {
  charray = "abcdefghijklmnopqrstuvwxyz";
  numnum = "1234567890";
  uppy = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  specc = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  passStr = "";
  // passwordText.value = ""
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lenPass = passwordLen();
  var letterPass = "";
  // console.log(lenPass);
  ifUpper();
  if (useUpper == true) {
    passStr = passStr + uppy;
  }
  ifLower();
  if (useLower == true) {
    passStr = passStr + charray;
  }
  ifNum();
  if (useNum == true) {
    passStr = passStr + numnum;
  }
  ifSpec();
  if (useSpec == true) {
    // specChar();
    passStr = passStr + specc;
  }
  for (let index = 0; index < lenPass.length; index++) {
    // const element = array[index];
    letterPass = Math.floor(Math.random() * passStr.length);
    password = password + passStr[letterPass];
  }
  passwordText.value = password;

  // other option ... use one of each allowed input to ensure caps and special chars, storre them, concotonate the strings ,  generate a password to passwordLen, then randomly pick random parts of the password to swap with pre randomized parts.
}

// Math.floor(Math.random());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// randoint = Math.random() * 5;
// console.log(randoint.toString());
// writePassword();
