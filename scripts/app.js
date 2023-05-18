
function getNum(num) {
  var resultInput = document.getElementById("result");

  if (num === "Math.sin") {
    resultInput.value = resultInput.value.replace(/(.*)/, "sin");
  } else if (num === "Math.cos") {
    resultInput.value = resultInput.value.replace(/(.*)/, "cos");
  } else if (num === "Math.E") {
    resultInput.value = resultInput.value.replace(/(.*)/, "E");
  } else if (num === "Math.tan") {
    resultInput.value = resultInput.value.replace(/(.*)/, "tan");
  } else if (num === "Math.PI") {
    resultInput.value = resultInput.value.replace(/(.*)/, "π");
  } else if (num === "Math.log") {
    resultInput.value = resultInput.value.replace(/(.*)/, "log");
  } else if (num === "Math.exp") {
    resultInput.value = resultInput.value.replace(/(.*)/, "exp");
  } else if (num === "square") {
    var inputValue = parseFloat(resultInput.value);
    var squaredValue = inputValue * inputValue;
    resultInput.value = squaredValue;
  } else if (num === "cube") {
    var inputValue = parseFloat(resultInput.value);
    var cubedValue = inputValue * inputValue * inputValue;
    resultInput.value = cubedValue;
  } else if (num === "Math.sqrt") {
    resultInput.value = "√";
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
  } else if (expression === "√") {
    var inputValue = parseFloat(resultInput.value);
    var squareRootValue = Math.sqrt(inputValue);
    resultInput.value = squareRootValue;
  } else {
    try {
      var result = eval(expression);
      resultInput.value = result;
    } catch (error) {
      resultInput.value = "Error";
    }
  }
}


