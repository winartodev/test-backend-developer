// maxRedigit function to order biggest number of digit
const maxRedigit = (number) => {
  // numberArr will convert given by number to array
  var numberArr = ("" + number).split("");

  // check if length numberArr must 3 digit
  if (numberArr.length !== 3) {
    return null;
  } else {
    // numberArr will sort by descending order and convert to string
    return numberArr.sort((a, b) => b - a).join("");
  }
};

// execute will execute input by user and given result
const execute = () => {
  var number = parseInt(document.getElementById("input").value);
  var result = maxRedigit(number);
  document.getElementById("result").innerHTML =
    result === null ? "null" : result;
};
