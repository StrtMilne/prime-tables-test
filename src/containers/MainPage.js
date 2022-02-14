import React, { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import createTable from "../models/create_table_rows";
import "./static/MainPageStyle.css";

const MainPage = function() {

    const [numberOfPrimes, setNumberOfPrimes] = useState();
    const [tableValues, setTableValues] = useState("");


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
        <div className="main-page">
            <Form handleSubmit={handleSubmit} handleUserInput={handleUserInput}/>
            {tableValues===""? <h4>Please enter a value greater than 0!</h4> :
                <Table tableValues={tableValues}/> }
        </div>
    );
}

export default MainPage;