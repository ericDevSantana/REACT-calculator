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

    function nextChar(nextEntry) {

        // update first number until operator is entered
        setFirstNumber(firstNumber + nextEntry);
        // get the operator
        setOperator(nextEntry);
        // update second number until equal is entered
        setSecondNumber(secondNumber + nextEntry);
    }

    return (
        <div className="parent">
            <div className="screen">
                <h3></h3>
            </div>
            <div id="operator" className="operator1">
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
            <div id="numbers" className="digit7 digits">7</div>
            <div id="numbers" className="digit8 digits">8</div>
            <div id="numbers" className="digit9 digits">9</div>
            <div id="numbers" className="digit4 digits">4</div>
            <div id="numbers" className="digit5 digits">5</div>
            <div id="numbers" className="digit6 digits">6</div>
            <div id="numbers" className="digit1 digits">1</div>
            <div id="numbers" className="digit2 digits">2</div>
            <div id="numbers" className="digit3 digits">3</div>
            <div id="numbers" className="digit0 digits">0</div>
            <div id="numbers" className="digitDot digits">.</div>
            <div id="numbers" className="digitAC digits">AC</div>
        </div>
    );
}

export default Calculator;