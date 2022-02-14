import React from "react";
import TableRow from "./TableRow";

const Table = function({ tableValues }) {

    const tableRows = tableValues.map((row, index) => {
        return <TableRow row={row} key={index}/>
    });

    return(
        <table>
            {tableRows}
        </table>
    )
}

export default Table;