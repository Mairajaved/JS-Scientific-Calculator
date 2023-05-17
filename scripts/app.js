// function getNum(num) {
//   document.getElementById("result").value += num;
// }

function getNum(num) {
  var resultInput = document.getElementById("result");

  if (num === "Math.sin") {
    resultInput.value = "sin";
  } else if (num === "Math.cos") {
    resultInput.value = "cos";
  } else if (num === "Math.tan") {
    resultInput.value = "tan";
  } else if (num === "Math.PI") {
    resultInput.value = "\u03C0";
  } else if (num === "Math.log") {
    resultInput.value = "log";
  } else if (num === "Math.exp") {
    resultInput.value = "e";
  } else if (num === "Math.sqrt") {
    resultInput.value = "\u221A";
  } else if (num === "Math.E") {
    resultInput.value = "E";
  } else if (num === "square") {
    var inputValue = parseFloat(resultInput.value);
    var squaredValue = inputValue * inputValue;
    resultInput.value = squaredValue;
  } else if (num === "cube") {
    var inputValue = parseFloat(resultInput.value);
    var cubedValue = inputValue * inputValue * inputValue;
    resultInput.value = cubedValue;
  } else {
    resultInput.value += num;
  }
}

function clearNum() {
  document.getElementById("result").value = "";
}

function removeNumb() {
  var res = document.getElementById("result").value;
  document.getElementById("result").value = document
    .getElementById("result")
    .value.slice(0, res.length - 1);
}
function getResults() {
  var resultInput = document.getElementById("result");
  var expression = resultInput.value;

  // Handle pi (π) button
  if (expression === "π") {
    resultInput.value = Math.PI;
  } else if (expression === "square") {
    var inputValue = parseFloat(resultInput.value);
    var squaredValue = inputValue * inputValue;
    resultInput.value = squaredValue;
  } else if (expression === "cube") {
    var inputValue = parseFloat(resultInput.value);
    var cubedValue = inputValue * inputValue * inputValue;
    resultInput.value = cubedValue;
  } else {
    // calculation using eval() function
    var result = eval(expression);
    resultInput.value = result;
  }
}

// function getResults() {
//   document.getElementById("result").value = eval(
//     document.getElementById("result").value
//   );
// }
