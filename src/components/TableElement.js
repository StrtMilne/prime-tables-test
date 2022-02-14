import React from "react";

const TableElement = function ({ value, index }) {
    return (
        <td className={`element key${index}`} >
            {value}
        </td>
    )
}

export default TableElement;