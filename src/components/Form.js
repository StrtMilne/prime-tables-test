import React from "react";

const Form = function() {
    return (
        <div className="input-form">
            <form>
                <input type="number" id="number-input" min="1" max="300" />
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Form;