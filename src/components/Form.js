import React from "react";
import "./styles/FormStyle.css"

const Form = function({handleSubmit, handleUserInput}) {
    return (
        <div className="input-form" onSubmit={handleSubmit} >
            <form>
                <label>Enter a value to get a 'primes table'</label>
                <input type="number" id="number-input" min="1" max="300" onChange={handleUserInput} className="input-bar"/>
                <input type="submit" className="submit-button" />
            </form>
        </div>
    )
}

export default Form;