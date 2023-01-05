// solution will return result and the solution 
// if the number can mod by 5 or mod by 3  
const solution = (num) => {
  let sum = 0
  let solution = []
  for (let i = 1; i < num; i++) {
    if (i % 5 === 0) {
      sum += i
      solution.push(i)
    } else if (i % 3 === 0) {
      sum += i
      solution.push(i)
    }
  }
  return sum + " = "+ solution.join(" + ")
};

// execute will execute input by user and given result
const execute = () => {
  input = document.getElementById("input").value;
  document.getElementById("result").innerHTML = solution(input);
};
