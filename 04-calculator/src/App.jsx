import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("0");
  const [evaluated, setEvaluated] = useState(false);

  const handleInput = (e) => {
    const currentValue = e.target.innerText;

    setInput((prevInput) => {
      let newInput = prevInput;

      // If last action was '=', handle next input
      if (evaluated) {
        if (/[0-9.]/.test(currentValue)) {
          setOutput(currentValue === "." ? "0." : currentValue);
          setEvaluated(false);
          return currentValue === "." ? "0." : currentValue;
        } else if (/[+\-*/%]/.test(currentValue)) {
          setEvaluated(false);
          return output + currentValue;
        }
      }
      setEvaluated(false);

      // Prevent multiple leading zeros
      if (/^0$/.test(prevInput) && currentValue === "0") return newInput;
      if (/^0$/.test(prevInput) && /[1-9]/.test(currentValue)) newInput = "";

      // Prevent multiple decimals in a number
      const parts = newInput.split(/[+\-*/%]/);
      const lastNum = parts[parts.length - 1];
      if (currentValue === "." && lastNum.includes(".")) return newInput;

      // Handle consecutive operators
      if (/[+\-*/%]/.test(currentValue)) {
        if (/[+\-*/%]$/.test(newInput)) {
          // Allow negative sign after operator (for negative numbers)
          if (currentValue === "-" && !/[-]$/.test(newInput)) {
            return newInput + currentValue;
          }
          // Replace last operator(s) with new one
          return newInput.replace(/[+\-*/%]+$/, currentValue);
        }
      }

      newInput += currentValue;
      // Update output to show current number
      const last = newInput
        .split(/[+\-*/%]/)
        .filter(Boolean)
        .pop();
      setOutput(last || "0");
      return newInput;
    });
  };

  const handleClearAll = () => {
    setInput("0");
    setOutput("0");
    setEvaluated(false);
  };

  const handleCalculate = () => {
    try {
      // Evaluate only if input is valid
      // Replace % with /100 for percentage support if desired
      const result = eval(input.replace(/%/g, "/100"));
      setOutput(result.toString());
      setInput(result.toString());
      setEvaluated(true);
    } catch (error) {
      console.error("Error evaluating expression:", error);
      setOutput("Error");
      setEvaluated(true);
    }
  };

  return (
    <>
      <div className="calc-container">
        <div className="result">
          <p className="input" id="display">
            {input}
          </p>
          <h1 className="output">{output}</h1>
        </div>
        <div className="keypad-grid">
          <button className="btn btn-clear" id="clear" onClick={handleClearAll}>
            AC
          </button>
          <button className="btn btn-operator" id="modulo" onClick={handleInput}>
            %
          </button>
          <button className="btn btn-operator" id="divide" onClick={handleInput}>
            /
          </button>
          <button className="btn btn-number" id="seven" onClick={handleInput}>
            7
          </button>
          <button className="btn btn-number" id="eight" onClick={handleInput}>
            8
          </button>
          <button className="btn btn-number" id="nine" onClick={handleInput}>
            9
          </button>
          <button className="btn btn-operator" id="multiply" onClick={handleInput}>
            *
          </button>
          <button className="btn btn-number" id="four" onClick={handleInput}>
            4
          </button>
          <button className="btn btn-number" id="five" onClick={handleInput}>
            5
          </button>
          <button className="btn btn-number" id="six" onClick={handleInput}>
            6
          </button>
          <button className="btn btn-operator" id="subtract" onClick={handleInput}>
            -
          </button>
          <button className="btn btn-number" id="one" onClick={handleInput}>
            1
          </button>
          <button className="btn btn-number" id="two" onClick={handleInput}>
            2
          </button>
          <button className="btn btn-number" id="three" onClick={handleInput}>
            3
          </button>
          <button className="btn btn-operator" id="add" onClick={handleInput}>
            +
          </button>
          <button className="btn btn-number" id="zero" onClick={handleInput}>
            0
          </button>
          <button className="btn btn-number" id="decimal" onClick={handleInput}>
            .
          </button>
          <button className="btn btn-operator" id="equals" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
