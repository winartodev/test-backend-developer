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

// productArray return an array output such that output[i]
// is equal to the product of all the elements of arr except arr[i].
const productArray = (arr) => {
  let output = [];
  output[0] = 1;

  // left prefix product
  for (let i = 1; i < arr.length; i++) {
    output[i] = output[i - 1] * arr[i - 1];
  }

  let product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    output[i] = output[i] * product;

    product *= arr[i];
  }

  return output;
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

  document.getElementById("result").innerHTML = productArray(inputArr);
};
