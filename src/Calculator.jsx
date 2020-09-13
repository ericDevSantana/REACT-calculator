import React from "react";

function Calculator() {
    const [firstNumber,
        setFirstNumber] = React.useState("");
    const [secondNumber,
        setSecondNumber] = React.useState("");
    const [displayNumber,
        setDisplay] = React.useState("0");
    const [isFirst,
        setIsFirst] = React.useState(true);
    const [operator,
        setOperator] = React.useState("");
    const [oneDot,
        setOneDot] = React.useState(false);

    function nextChar(nextEntry) {

        if (isFirst) {
            if (/\d/.test(nextEntry)) {
                setFirstNumber(firstNumber + nextEntry);
                setDisplay(firstNumber + nextEntry);
            } else if (nextEntry === ".") {
                // Add dot and prevent another dot to be added
                if (!oneDot) {
                    setFirstNumber(firstNumber + nextEntry);
                    setDisplay(firstNumber + nextEntry);
                    setOneDot(true);
                }

            } else if (nextEntry === "AC") {
                // Reset all variables
                setFirstNumber("");
                setSecondNumber("");
                setDisplay("0");
                setOperator("");
            } else if (nextEntry === "=") {
                // Return firstNumber or 0 if empty !!!!!!!!!!!!!!!!!!!!!
                if (firstNumber === "") {
                    setDisplay(displayNumber);
                } else {
                    setDisplay(firstNumber);
                }
                setFirstNumber("");
                setSecondNumber("");
                setOperator("");
            } else {
                setDisplay(firstNumber);
                setOperator(nextEntry);
                setIsFirst(false);
                setOneDot(false);
            }
        } else {
            if (/\d/.test(nextEntry)) {
                setSecondNumber(secondNumber + nextEntry);
                setDisplay(secondNumber + nextEntry);
            } else if (nextEntry === ".") {
                // Add dot and prevent another dot to be added
                if (!oneDot) {
                    setSecondNumber(secondNumber + nextEntry);
                    setDisplay(secondNumber + nextEntry);
                    setOneDot(true);
                }
                
            } else if (nextEntry === "AC") {
                // Reset all variables
                setFirstNumber("");
                setSecondNumber("");
                setDisplay("0");
                setOperator("");
                setIsFirst(true);
                setOneDot(false);
            } else if (nextEntry === "=") {

                if (secondNumber === "") {
                    setOperator("");
                    setIsFirst(true);
                    setOneDot(false);
                } else {
                    switch (operator) {
                        case "+":
                            setDisplay(Number(firstNumber) + Number(secondNumber));
                            break;
                        case "-":
                            setDisplay(Number(firstNumber) - Number(secondNumber));
                            break;
                        case "/":
                            setDisplay(Number(firstNumber) / Number(secondNumber));
                            break;
                        case "*":
                            setDisplay(Number(firstNumber) * Number(secondNumber));
                            break;
                        default:
                            break;
                    }
                    setFirstNumber("");
                    setSecondNumber("");
                    setOperator("");
                    setIsFirst(true);
                    setOneDot(false);
                }
            } else {
                setFirstNumber(displayNumber);
                setSecondNumber("");
                setIsFirst(false);
                setOperator(nextEntry);
            }
        }
    }

    return (
        <div className="parent">
            <div className="screen">
                <h3>{displayNumber}</h3>
            </div>
            <div
                id="operator"
                className="operator1"
                onClick={() => {
                nextChar("+")
            }}>
                <h3>+</h3>
            </div>
            <div
                id="operator"
                className="operator2"
                onClick={() => {
                nextChar("-")
            }}>
                <h3>-</h3>
            </div>
            <div
                id="operator"
                className="operator3"
                onClick={() => {
                nextChar("/")
            }}>
                <h3>/</h3>
            </div>
            <div
                id="operator"
                className="operator4"
                onClick={() => {
                nextChar("*")
            }}>
                <h3>*</h3>
            </div>
            <div
                id="equal"
                className="operator-equal"
                onClick={() => {
                nextChar("=")
            }}>=</div>
            <div
                id="numbers"
                className="digit7 digits"
                onClick={() => {
                nextChar("7")
            }}>7</div>
            <div
                id="numbers"
                className="digit8 digits"
                onClick={() => {
                nextChar("8")
            }}>8</div>
            <div
                id="numbers"
                className="digit9 digits"
                onClick={() => {
                nextChar("9")
            }}>9</div>
            <div
                id="numbers"
                className="digit4 digits"
                onClick={() => {
                nextChar("4")
            }}>4</div>
            <div
                id="numbers"
                className="digit5 digits"
                onClick={() => {
                nextChar("5")
            }}>5</div>
            <div
                id="numbers"
                className="digit6 digits"
                onClick={() => {
                nextChar("6")
            }}>6</div>
            <div
                id="numbers"
                className="digit1 digits"
                onClick={() => {
                nextChar("1")
            }}>1</div>
            <div
                id="numbers"
                className="digit2 digits"
                onClick={() => {
                nextChar("2")
            }}>2</div>
            <div
                id="numbers"
                className="digit3 digits"
                onClick={() => {
                nextChar("3")
            }}>3</div>
            <div
                id="numbers"
                className="digit0 digits"
                onClick={() => {
                nextChar("0")
            }}>0</div>
            <div
                id="numbers"
                className="digitDot digits"
                onClick={() => {
                nextChar(".")
            }}>.</div>
            <div
                id="numbers"
                className="digitAC digits"
                onClick={() => {
                nextChar("AC")
            }}>AC</div>
        </div>
    );
}

export default Calculator;