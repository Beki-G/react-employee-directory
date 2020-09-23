import React, { useEffect, useState } from "react";
import API from "../utils/API"
// import CardContainer from "../components/CardContainer";
import EmployeeRoster from "../components/EmployeeRoster"
import SortFilterBtn from "../components/SortFilterBtn/SortFilterBtn";
import CardContainer from "../components/CardContainer";


function Directory() {
    const [employees, setEmployees] = useState([]);
    const [offices, setOffices]= useState([])
    const [filteredEmployees, setFilteredEmployees] = useState([])

    useEffect(() => {
        loadEmployees();
    }, []);

    const sortByFirstName = () => {
        const sorted = [...employees]

        // sorted.sort((a, b)=>a.name.first - b.name.first)
        
        sorted.sort((a,b)=>{
            var valueA = a.name.first;
            var valueB = b.name.first;
    
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        })

        setEmployees(sorted)
        console.log("Sorted Object is: ", sorted)
    }

    const sortByLastName = () => {
        const sorted = [...employees]
        
        sorted.sort((a,b)=>{
            var valueA = a.name.last;
            var valueB = b.name.last;
    
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        })

        setEmployees(sorted)
        console.log("Sorted Object is: ", sorted)
    }
    

    function handleChangeSort(event){
        if(event.target.value==="Last Name") {
            sortByLastName();
        } else  {
            sortByFirstName()
        } 
    }

    function handleChangeFilter(event){
        console.log("target value is", event.target.value)
        const city = event.target.value

        const filteredEmployees= employees.filter(employee=>{ return employee.location.city === city })

        console.log("filtered employees is: ", filteredEmployees)
            
        setFilteredEmployees(filteredEmployees)        
    }

    function loadEmployees() {
        API.getEmployees()
            .then(employees => {
            setOffices(employees.map(employee=>
                employee.location.city
            ).filter((value, index,self)=> self.indexOf(value)===index))
            setEmployees(employees);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className="text-xl">This is where the directory starts!</h1>
            <CardContainer handleChangeFilter={handleChangeFilter} handleChangeSort={handleChangeSort} offices={offices} filteredEmployees={filteredEmployees} employees={employees} />
            

        </div>
    )
}

export default Directory;