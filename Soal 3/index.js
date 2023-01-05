// alternate Case is function to check char
// if char is lowercase change to uppercase if char is uppercase do otherwise
const alternateCase = (str) => {
  let chars = str.split("")
  for (let i = 0; i < chars.length; i++) {
    if (/^[A-Z]+$/.test(chars[i])) {
      chars[i] = chars[i].toLowerCase();
    } else if (/^[a-z]+$/.test(chars[i])) {
      chars[i] = chars[i].toUpperCase();
    }
  }

  return chars.join("");
};

// // execute will execute input by user and given result
const execute = () => {
  input = document.getElementById("input").value;
  document.getElementById("result").innerHTML = alternateCase(input);
};
