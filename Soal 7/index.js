var Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// findMiddleAlphabet is function to find the middle letter between of the specified letters
const findMiddleAlphabet = (firstLetter, lastLetter) => {
  let letter1 = Letters.indexOf(firstLetter);
  let letter2 = Letters.indexOf(lastLetter);
  const center = letter2 - letter1;

  if (center < 2) {
    return "[none]";
  }

  const start = letter1 + center / 2;
  const end = start + 1 + (center % 2);
  return Letters.slice(Math.floor(start), end);
};

// execute will execute input by user and given result
const execute = () => {
  inputFirstLetter = document.getElementById("input1").value;
  inputLastLetter = document.getElementById("input2").value;
  document.getElementById("result").innerHTML = findMiddleAlphabet(
    inputFirstLetter,
    inputLastLetter
  );
};
