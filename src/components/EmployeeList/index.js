import React from "react";
import "./style.css";

function EmployeeList(props) {

    return (
        <div className="El_table">
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>

        </div>

    );
};

export default EmployeeList;
