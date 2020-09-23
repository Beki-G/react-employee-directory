import React from "react";
import Card from "../card/Card";

function EmployeeRoster(props) {
    // console.log("Made it to employee roster. Here are the props! ", props)
    return (
        <div className="flex flex-wrap">
            {props.employees.map((employee, index) => {
                return (<Card picture={employee.picture} name={employee.name} id={employee.id} email={employee.email} phone={employee.phone} location={employee.location} key={index} />)
            })}
        </div>

    )
}

export default EmployeeRoster;