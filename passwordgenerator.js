// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordLen(){
  leng = window.prompt("Please enter A password length between 8 and 128");
  while ((leng < 8 || leng > 128)){
    leng = window.prompt("Not a valid password length, must be between 8 and 128 characters");
    
  }
  return leng;
}
console.log(passwordLen())

function specChar(){
  
  charst = window.prompt("Name all useable special characters once");
  charstr = charst.replaceAll(' ', '');
    }

function ifUpper(){
  useUpper=false
  upperInput = window.prompt("Do you wish to use uppercases? yes or no")
  if (upperInput.toLowerCase() === "yes"){
    useUpper=true
  }
}

function ifLower(){
  useLower=false
  upperInput = window.prompt("Do you wish to use lowercase? yes or no")
  if (upperInput.toLowerCase() === "yes"){
    useLower=true
  }
}
function ifSpec(){
  useSpec=false
  upperInput = window.prompt("Do you wish to use special characters? yes or no")
  if (upperInput.toLowerCase() === "yes"){
    useSpec=true
  }
}

function ifNum(){
  useNum=false
  upperInput = window.prompt("Do you wish to use numbers? yes or no")
  if (upperInput.toLowerCase() === "yes"){
    useNum=true
  }
}

function

// Write password to the #password input
function writePassword() {

  charray = "abcdefghijklmnopqrstuvwxyz"
  numnum = "1234567890"
  uppy = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  specc = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~"
  passStr = ""

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lenPass = passwordLen();
  
  console.log(lenPass)
  ifUpper();
  if (useUpper == True){
    // ROLL FOR AN UPPERCASE STORE IT IN VAR THE CONCOTONATE UPPER STRING
    passStr = passStr + uppy
    
  }
  ifLower();
  if (useLower == True){
    // ROLL FOR AN LOWERCASE STORE IT IN VAR THE CONCOTONATE LOWER STRING
    passStr = passStr + charray
  }
  ifNum();
  if (useNum == True){
    // ROLL FOR AN NUMBER STORE IT IN VAR THE CONCOTONATE NUMBER STRING
    passStr = passStr + numnum
  }
  ifSpec();
  if (useUpper == True){
    specChar()
    // ROLL FOR SPEC CHAR THEN CONCOTONATE SPEC STR (do i need to check for / or . that might ruin my code?)
    passStr = passStr + specc
  }
  var uncheckedPass = Math.floor(Math.random()*passStr.length())



  //do i want to make this another function or creat3e the function in here... what i will do is check if the password has all the required characters, if not keep looping until it creates one with the required characters. i need to check the password which is why i think i need to create the function outside, and then set apssword check to false if it doesnt pass the check, and stay false until it has the neccesary characters. 
  passwordcheck = false
  while (passwordcheck = false) {
    if 

  }

  passwordText.value = password;


  // other option ... use one of each allowed input to ensure caps and special chars, storre them, concotonate the strings ,  generate a password to passwordLen, then randomly pick random parts of the password to swap with pre randomized parts.
}

Math.floor(Math.random())


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


randoint = Math.random()*5
console.log(randoint.toString());
writePassword()