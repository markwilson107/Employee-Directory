import React from "react";
import "./style.css";

function EmployeeList(props) {

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.result.map((result, index) => (
                        <tr key={`El_tr-${index}`} >
                            <th key={`name-${index}`} scope="row">{`${result.name.first} ${result.name.last}`}</th>
                            <td key={`location-${index}`} scope="row">{result.location}</td>
                            <td key={`age-${index}`} scope="row">{result.dob.age}</td>
                            <td key={`gender-${index}`} scope="row">{result.gender}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default EmployeeList;
