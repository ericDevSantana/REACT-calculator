import React from "react";

function Calculator() {
   const [currentNumber, setCurrentNumber] = React.useState("0");

   function setNumber(number){
       let aux = "";

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

   }

    return (
        <div className="parent">
            <div className="screen">
                <h3>{currentNumber}</h3>
            </div>
            <div id="operator" className="operator1" onClick={() => {console.log("+")}}>
                <h3>+</h3>
            </div>
            <div id="operator" className="operator2">
                <h3>-</h3>
            </div>
            <div id="operator" className="operator3">
                <h3>/</h3>
            </div>
            <div id="operator" className="operator4">
                <h3>*</h3>
            </div>
            <div id="equal" className="operator-equal">=</div>
            <div id="numbers" className="digit7 digit-color" onClick={() => {setNumber(7)}}>7</div>
            <div id="numbers" className="digit8 digit-color" onClick={() => {setNumber(8)}}>8</div>
            <div id="numbers" className="digit9 digit-color" onClick={() => {setNumber(9)}}>9</div>
            <div id="numbers" className="digit4 digit-color" onClick={() => {setNumber(4)}}>4</div>
            <div id="numbers" className="digit5 digit-color" onClick={() => {setNumber(5)}}>5</div>
            <div id="numbers" className="digit6 digit-color" onClick={() => {setNumber(6)}}>6</div>
            <div id="numbers" className="digit1 digit-color" onClick={() => {setNumber(1)}}>1</div>
            <div id="numbers" className="digit2 digit-color" onClick={() => {setNumber(2)}}>2</div>
            <div id="numbers" className="digit3 digit-color" onClick={() => {setNumber(3)}}>3</div>
            <div id="numbers" className="digit0 digit-color" onClick={() => {setNumber(0)}}>0</div>
            <div id="numbers" className="digitDot digit-color">.</div>
            <div id="numbers" className="digitAC digit-color" onClick={() => {setNumber("AC")}}>AC</div>
        </div>
    );
}

export default Calculator;