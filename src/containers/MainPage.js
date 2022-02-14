import React, { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import createTable from "../models/create_table_rows";

const MainPage = function() {

    const [numberOfPrimes, setNumberOfPrimes] = useState();
    const [tableValues, setTableValues] = useState();


    const handleUserInput = (event) => {
        let newValue = event.target.value;
        setNumberOfPrimes(newValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let table = createTable(numberOfPrimes);
        setTableValues(table);
    };

    return (
        <>
            <Form handleSubmit={handleSubmit} handleUserInput={handleUserInput}/>
            <Table tableValues={tableValues}/>
        </>
    );
}

export default MainPage;