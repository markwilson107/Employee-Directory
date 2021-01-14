import React from "react";
import EmployeeListItem from "../EmployeeListItem";
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
                        <EmployeeListItem result={props.result[props.page]} />                        
                    }
                </tbody>
            </table>
        </div>

    );
};

export default EmployeeList;
