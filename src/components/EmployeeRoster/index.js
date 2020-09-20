import React from "react";
import Card from "../card/Card";

function EmployeeRoster(props) {
    console.log("Made it to employee roster")
    console.log(props)
    return (
        <div>
            <h1>This is where the Roster is to start!</h1>
            <div>
                {props.employees.map((employee, index) => {
                    return (<Card picture={employee.picture} name={employee.name} id={employee.id} email={employee.email} phone={employee.phone} location={employee.location} key ={index}/>)
                })}
            </div>
        </div>

    )
}

export default EmployeeRoster;