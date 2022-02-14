import React from "react";

const Form = function({handleSubmit, handleUserInput}) {
    return (
        <div className="input-form" onSubmit={handleSubmit} >
            <form>
                <input type="number" id="number-input" min="1" max="300" onChange={handleUserInput}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;