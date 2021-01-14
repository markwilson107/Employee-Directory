import React from "react";
import "./style.css";

function EmployeeListItem(props) {
    return (
        <>
            {
                props.result.map((result, index) => (
                    <tr className="El_tr" key={`El_tr-${index}`} >
                        <td key={`id-${index}`} scope="row">{result.id}</td>
                        <th key={`name-${index}`} scope="row">{result.fullname}</th>
                        <td key={`location-${index}`} scope="row">{result.location}</td>
                        <td key={`age-${index}`} scope="row">{result.age}</td>
                        <td key={`gender-${index}`} scope="row">{result.gender}</td>
                    </tr>
                ))
            }
        </>
    );
};

export default EmployeeListItem;
