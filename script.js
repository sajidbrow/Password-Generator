const passwordBox = document.getElementById("password");
const lengthBox = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]|:;<>,.?/~`";

function generatePassword() {
  let allChars = "";
  let password = "";

  if (upper.checked) allChars += upperChars;
  if (lower.checked) allChars += lowerChars;
  if (number.checked) allChars += numberChars;
  if (symbol.checked) allChars += symbolChars;

  const length = lengthBox.value;

  if (allChars === "") {
    alert("Please select at least one option!");
    return;
  }

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * allChars.length);
    password += allChars[random];
  }

  passwordBox.value = password;
}

copyBtn.addEventListener("click", () => {
  if (passwordBox.value) {
    navigator.clipboard.writeText(passwordBox.value);
    alert("Password Copied!");
  }
});

generateBtn.addEventListener("click", generatePassword);
