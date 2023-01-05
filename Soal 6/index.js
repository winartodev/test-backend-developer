// reverseWords will reverse the words
const reverseWords = (text) => {
  let textArr = text.split(" ");
  let reverseText = "";
  for (let i = 0; i < textArr.length; i++) {
    let newTextTmp = textArr[i].split("");
    let reverseNewTextTmp = "";
    for (let j = newTextTmp.length - 1; j >= 0; j--) {
      // check if the first index of words contains capital 
      // if true last word index will be capitalized
      if (/^[A-Z]+$/.test(newTextTmp[0]) && j === newTextTmp.length - 1) {
        reverseNewTextTmp += newTextTmp[j].toUpperCase();
      } else {
        reverseNewTextTmp += newTextTmp[j].toLowerCase();
      }
    }
    reverseText += " " + reverseNewTextTmp;
  }

  return reverseText;
};

// execute will execute input by user and given result
const execute = () => {
  input = document.getElementById("input").value;
  document.getElementById("result").innerHTML = reverseWords(input);
};
