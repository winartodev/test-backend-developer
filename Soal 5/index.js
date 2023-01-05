var currentindex = 0;
// addInput will generate input form
const addInput = () => {
  let lastinput = document.getElementById("input" + currentindex);
  if (lastinput.value !== "") {
    let container = document.getElementById("inputcontainer");
    let newinput = document.createElement("input");
    currentindex++;
    newinput.type = "text";
    newinput.name = "input" + currentindex;
    newinput.id = "input" + currentindex;
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
    container.appendChild(newinput);
  }
};

// nearestFibbonaci function to find nearest Fibonacci numbers by given arr num,
const nearestFibbonaci = (arr) => {
  let sum = 0
  // sum array value
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // will return 0 if sum 0
  if (sum == 0) {
    return sum;
  }

  // will break if n1 > sum
  let nextTerm = 0, n1 = 0, n2 = 1
  while (true) {
    if (n1 > sum) {
      return Math.abs(n1 - sum)
    }
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};

// execute will execute input by user and given result
const execute = () => {
  let inputArr = [];
  for (let i = 0; i < currentindex + 1; i++) {
    input = document.getElementById("input" + i).value;
    if (input != "") {
      inputArr.push(parseInt(input));
    }
  }

  document.getElementById("result").innerHTML = nearestFibbonaci(inputArr);
};
