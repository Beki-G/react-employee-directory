import React from "react";
import SortFilterBtn from "../SortFilterBtn/SortFilterBtn"
import EmployeeRoster from"../EmployeeRoster"
import "./style.css"

function CardContainer( {handleChangeFilter, handleChangeSort, offices, filteredEmployees, employees}){
    
    return (
        <div className="container">
            <p>This is the start of the CardContainer</p>
            <SortFilterBtn onChangeSort= { handleChangeSort } onChangeFilter={handleChangeFilter} offices={offices}/>
            <EmployeeRoster className="align-center" employees= { filteredEmployees.length>0? filteredEmployees: employees } />
        </div>
    )
}

export default CardContainer;