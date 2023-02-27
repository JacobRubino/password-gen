// Assignment Code
var generateBtn = document.querySelector("#generate");
var passStr = "";
var passwordText = document.querySelector("#password");
function passwordLen() {
  leng = window.prompt("Please enter A password length between 8 and 128");
  while (isNaN(leng) || leng < 8 || leng > 128) {
    leng = window.prompt(
      "Not a valid password length, must be between 8 and 128 characters"
    );
  }
  return leng;
}

function ifUpper() {
  upperInput = window.prompt("Do you wish to use uppercases? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useUpper = true;
  } else if (upperInput.toLowerCase() === "no") {
    useUpper = false;
  } else {
    useUpper = false;
  }
}

function ifLower() {
  upperInput = window.prompt("Do you wish to use lowercase? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useLower = true;
  } else if (upperInput.toLowerCase() === "no") {
    useLower = false;
  } else {
    useLower = false;
  }
}
function ifSpec() {
  upperInput = window.prompt(
    "Do you wish to use special characters? yes or no"
  );
  if (upperInput.toLowerCase() === "yes") {
    useSpec = true;
  } else if (upperInput.toLowerCase() === "no") {
    useSpec = false;
  } else {
    useSpec = false;
  }
}

function ifNum() {
  upperInput = window.prompt("Do you wish to use numbers? yes or no");
  if (upperInput.toLowerCase() === "yes") {
    useNum = true;
  } else if (upperInput.toLowerCase() === "no") {
    useNum = false;
  } else {
    useNum = false;
  }
}

function call_func() {
  console.log(passStr);
  ifUpper();
  if (useUpper == true) {
    passStr = passStr.concat(uppy);
    console.log(passStr);
  }
  ifLower();
  if (useLower == true) {
    passStr = passStr.concat(charray);
    console.log(passStr);
  }
  ifNum();
  if (useNum == true) {
    passStr = passStr.concat(numnum);
    console.log(passStr);
  }
  ifSpec();
  if (useSpec == true) {
    passStr = passStr.concat(specc);
    console.log(passStr);
  }
}

// Write password to the #password input
function writePassword() {
  var password = "";
  charray = "abcdefghijklmnopqrstuvwxyz";
  numnum = "1234567890";
  uppy = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  specc = ["!#$%&'()*+,./\\:;<>=?@[]^_`{}|~"];
  var leng = passwordLen();
  var letterOfPass = "";

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

  while (
    useSpec == false &&
    useNum == false &&
    useUpper == false &&
    useLower == false
  ) {
    console.log(useLower);
    console.log(useNum);
    console.log("weewee");
    alert("Didnt pick a character type");
    call_func();
  }
  console.log(passwordText);
  console.log(passwordText.value);

  for (let index = 0; index < leng; index++) {
    letterOfPass = Math.floor(Math.random() * passStr.length);
    console.log(passStr[letterOfPass]);
    password = password + passStr[letterOfPass];
  }
  console.log(password);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  passwordText.value = "";
  passStr = "";
  writePassword();
});
