import React, { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";

const MainPage = function() {

    const [numberOfPrimes, setNumberOfPrimes] = useState();
    const [tableValues, setTableValues] = useState();


    const handleUserInput = (event) => {
        let newValue = event.target.value;
        setNumberOfPrimes(newValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTableValues(numberOfPrimes);
    };

    return (
        <>
            <Form handleSubmit={handleSubmit} handleUserInput={handleUserInput}/>
            <Table tableValues={tableValues}/>
        </>
    );
}

export default MainPage;