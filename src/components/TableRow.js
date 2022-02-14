import React from "react";
import TableElement from "./TableElement";
import "./styles/TableStyle.css"

const TableRow = function ({ row, index }) {

    let tableElements = row.map((value, index) => {
        return <TableElement value={value} key={index} index={index}/>
    })

    let cssClass = `row${index}`;

    return (
        <tbody>
            <tr className={cssClass}>
                {tableElements}
            </tr>
        </tbody>
    )
}

export default TableRow;