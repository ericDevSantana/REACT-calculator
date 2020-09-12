import React from "react";

function Calculator() {
   const [currentNumber, setCurrentNumber] = React.useState("0");
   const [lastNumber, setLastNumber] = React.useState("");
   const [isFirst, setBool] = React.useState(true);
   const [operator, setOperator] = React.useState("");
   const [onResult, setOnResult] = React.useState(false);

   function setNumber(number){
       let aux = "";

       if(!onResult){
            if(isFirst){
                    if(number !== "AC"){
                        if(currentNumber === "0" && number.toString() === "0"){
                            aux = "0";
                        } else if(currentNumber === "0" && number.toString() !== "0"){
                            setCurrentNumber("");
                            aux = number.toString();
                        } else {
                            aux = currentNumber+number;
                        }
                        setCurrentNumber(aux);
                    } else {
                        setCurrentNumber("0");
                    }
            } else {
                    if(number !== "AC"){
                        if(lastNumber === "0" && number.toString() === "0"){
                            aux = "0";
                        } else if(lastNumber === "0" && number.toString() !== "0"){
                            setLastNumber("");
                            aux = number.toString();
                        } else {
                            aux = lastNumber+number;
                        }
                        setLastNumber(aux);
                    } else {
                        setLastNumber("0");
                    }
            }
        } else {
            if(number !== "AC"){
                setCurrentNumber(number);
            } else {
                setCurrentNumber("0");
            }
            setLastNumber("");
            setOperator("");
            setOnResult(false);
            setBool(true);
        }

   }

   function addNumber() {
       setLastNumber(Number(currentNumber) + Number(lastNumber));
       setOnResult(true);
   }

   function subtractNumber() {
       setLastNumber(Number(currentNumber) - Number(lastNumber));
       setOnResult(true);
   }

   function divideNumber() {
       setLastNumber(Number(currentNumber) / Number(lastNumber));
       setOnResult(true);
   }

   function multiplyNumber() {
       setLastNumber(Number(currentNumber) * Number(lastNumber));
       setOnResult(true);
   }

    return (
        <div className="parent">
            <div className="screen">
                <h3>{isFirst ? currentNumber : lastNumber}</h3>
            </div>
            <div id="operator" className="operator1" onClick={() => {setBool(false); setOperator("+")}}>
                <h3>+</h3>
            </div>
            <div id="operator" className="operator2" onClick={() => {setBool(false); setOperator("-")}}>
                <h3>-</h3>
            </div>
            <div id="operator" className="operator3" onClick={() => {setBool(false); setOperator("/")}}>
                <h3>/</h3>
            </div>
            <div id="operator" className="operator4" onClick={() => {setBool(false); setOperator("*")}}>
                <h3>*</h3>
            </div>
            <div id="equal" className="operator-equal" onClick={() => {
                if(operator === "+"){
                    addNumber();
                } else if(operator === "-") {
                    subtractNumber();
                } else if(operator === "/") {
                    divideNumber();
                } else if(operator === "*") {
                    multiplyNumber();
                }
            }}>=</div>
            <div id="numbers" className="digit7 digits" onClick={() => {setNumber(7)}}>7</div>
            <div id="numbers" className="digit8 digits" onClick={() => {setNumber(8)}}>8</div>
            <div id="numbers" className="digit9 digits" onClick={() => {setNumber(9)}}>9</div>
            <div id="numbers" className="digit4 digits" onClick={() => {setNumber(4)}}>4</div>
            <div id="numbers" className="digit5 digits" onClick={() => {setNumber(5)}}>5</div>
            <div id="numbers" className="digit6 digits" onClick={() => {setNumber(6)}}>6</div>
            <div id="numbers" className="digit1 digits" onClick={() => {setNumber(1)}}>1</div>
            <div id="numbers" className="digit2 digits" onClick={() => {setNumber(2)}}>2</div>
            <div id="numbers" className="digit3 digits" onClick={() => {setNumber(3)}}>3</div>
            <div id="numbers" className="digit0 digits" onClick={() => {setNumber(0)}}>0</div>
            <div id="numbers" className="digitDot digits">.</div>
            <div id="numbers" className="digitAC digits" onClick={() => {setNumber("AC")}}>AC</div>
        </div>
    );
}

export default Calculator;