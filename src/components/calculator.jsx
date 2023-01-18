import React, { useState } from "react";

const Calculator = () => {
  const [init, setInit] = useState(0);
  const [equalTo, setEqualTo] = useState("");

  const length = init.length;

  function handleReset() {
    setInit(0);
    setEqualTo("");
  }

  function handleDelete() {
    if (init !== 0) {
      const remainder = init.substring(0, length - 1).trim();
      setInit(remainder);
    }
  }

  function handlePercent() {
    const percentValue = init.slice(init.lastIndexOf(" "));
    const calcPercentage = percentValue / 100;

    if (init.includes(" ")) {
      setInit(init.replace(percentValue, ` ${calcPercentage}`));
    } else {
      setInit(init / 100);
    }
  }

  function handleButton(e) {
    if (init === 0) {
      setInit(e.target.innerText);
    } else if (init !== 0 && init.length !== 16) {
      setInit(String(init) + e.target.innerText);
    }
  }

  function handleOperator(e) {
    if (init !== 0) {
      setInit(`${init} ${e.target.innerText} `);
    }
  }

  function handleEqual() {
    if (init.includes("×") || init.includes("÷")) {
      const replaced = init.replaceAll("×", "*").replaceAll("÷", "/");
      setEqualTo(eval(replaced));
    } else {
      setEqualTo(eval(init));
    }
  }

  return (
    <main className="container">
      <h1>Calculator</h1>

      <div className="main-content">
        <p>Get the answers to your arithmetics</p>
        <table>
          <thead>
            <tr>
              <th colSpan={4}>
                {init}
                <br />
                <span className="equal">{equalTo}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="ac" onClick={handleReset}>
                AC
              </td>
              <td onClick={handleDelete}>C</td>
              <td onClick={handlePercent}>%</td>
              <td onClick={handleOperator}>÷</td>
            </tr>
            <tr>
              <td onClick={handleButton}>7</td>
              <td onClick={handleButton}>8</td>
              <td onClick={handleButton}>9</td>
              <td onClick={handleOperator}>×</td>
            </tr>
            <tr>
              <td onClick={handleButton}>4</td>
              <td onClick={handleButton}>5</td>
              <td onClick={handleButton}>6</td>
              <td onClick={handleOperator}>-</td>
            </tr>
            <tr>
              <td onClick={handleButton}>1</td>
              <td onClick={handleButton}>2</td>
              <td onClick={handleButton}>3</td>
              <td onClick={handleOperator}>+</td>
            </tr>
            <tr>
              <td onClick={handleButton}>00</td>
              <td onClick={handleButton}>0</td>
              <td onClick={handleButton}>.</td>
              <td id="equal" onClick={handleEqual}>
                =
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Calculator;
