import React from "react";

function Calculator() {
   
    return (
        <div className="parent">
            <div className="screen">123456</div>
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
            <div id="numbers" className="digit7">7</div>
            <div id="numbers" className="digit8">8</div>
            <div id="numbers" className="digit9">9</div>
            <div id="numbers" className="digit4">4</div>
            <div id="numbers" className="digit5">5</div>
            <div id="numbers" className="digit6">6</div>
            <div id="numbers" className="digit1">1</div>
            <div id="numbers" className="digit2">2</div>
            <div id="numbers" className="digit3">3</div>
            <div id="numbers" className="digitDot">.</div>
            <div id="numbers" className="digit0">0</div>
            <div id="numbers" className="digitAC">AC</div>
        </div>
    );
}

export default Calculator;