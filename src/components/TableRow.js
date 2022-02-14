import React from "react";
import TableElement from "./TableElement";

const TableRow = function ({ row, key }) {

    let tableElements = row.map((value, index) => {
        return <TableElement value={value} key={index}/>
    })

    return (
        <tr>
            {tableElements}
        </tr>
    )
}

export default TableRow;