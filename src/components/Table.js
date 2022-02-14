import React from "react";
import TableRow from "./TableRow";
import "./styles/TableStyle.css"

const Table = function({ tableValues }) {

    const tableRows = tableValues.map((row, index) => {
        console.log("index: ", index);
        return <TableRow  row={row} key={index} index={index}/>
    });

    return(
        <table className="table">
            {tableRows}
        </table>
    )
}

export default Table;