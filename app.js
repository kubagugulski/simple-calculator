const inputs = document.querySelectorAll("input");
const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");

let input1 = 0;
let input2 = 0;

const inputHandler = (e) => {
  if (e.target.className === "firstInput") {
    input1 = parseInt(e.target.value);
  } else {
    input2 = parseInt(e.target.value);
  } 
  
};

const btnHandler = (e) => {
  if (e.target.className === "add") {
    result.textContent = add(input1, input2);
  } else if (e.target.className === "sub") {
    result.textContent = sub(input1, input2);
  } else if (e.target.className === "mul") {
    result.textContent = mul(input1, input2);
  } else if (e.target.className === "div") {
    result.textContent = div(input1, input2);
  } else {
    result.textContent = '';
    inputs.forEach((input) => {
        input.value = ''
    })
  }
};

const add = (first, second) => {
  return first + second;
};
const sub = (first, second) => {
  return first - second;
};
const mul = (first, second) => {
  return first * second;
};
const div = (first, second) => {
  return first / second;
};

inputs.forEach((input) => {
  input.addEventListener("input", inputHandler);
});

btns.forEach((btn) => {
  btn.addEventListener("click", btnHandler);
});
