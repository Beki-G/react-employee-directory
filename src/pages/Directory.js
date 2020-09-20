import React, { useEffect, useState } from "react";
import API from "../utils/API"
// import CardContainer from "../components/CardContainer";
import EmployeeRoster from "../components/EmployeeRoster"


function Directory(){
    const [employees, setEmployees] = useState([]);
    // const [employeesIndex, setEmployeeIndex] = useState(0);

    useEffect(()=>{
        loadEmployees();
    }, []);

    function loadEmployees(){
         API.getEmployees().then(employees=>{
                console.log(employees)
                setEmployees(employees);
            })
            .catch(err=> console.log(err))
     }
    return(
        <div>
            <h1 className="text-xl">This is where the directory starts!</h1>

  
                <EmployeeRoster employees= {employees} />
        

        </div>
    )
}

export default Directory;