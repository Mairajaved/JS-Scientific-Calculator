document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");

  let currentValue = "";

  function evaluateResult() {
    // Function to evaluate the current expression in the display

    // Perform replacements to convert special symbols or functions to JavaScript syntax
    const convertedValue = currentValue
      .replace("×", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("ln", "Math.log")
      .replace("π", "Math.PI")
      .replace("log", "Math.log10")
      .replace("e", "Math.E")
      .replace("tan", "Math.tan")
      .replace("√", "Math.sqrt")
      .replace("^", "**");

    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      const value = button.innerText;

      try {
        if (value === "C") {
          // Clear the display if AC button is clicked
          currentValue = "";
          display.value = currentValue;
        } else if (value === "=") {
          // Evaluate the expression if = button is clicked
          evaluateResult();
        } else if (value === "⌫") {
          // Delete the last character if ⌫ button (Delete key) is clicked
          currentValue = currentValue.slice(0, -1);
          display.value = currentValue;
        } else if (value === "^") {
          // Append the power operator (^) to the current expression
          currentValue += "**";
          display.value = currentValue;
        } else {
          // Append the clicked button's value to the current expression
          currentValue += value;
          display.value = currentValue;
        }
      } catch (error) {
        console.error(error);
        currentValue = "ERROR";
        display.value = currentValue;
      }
    });
  }
});
