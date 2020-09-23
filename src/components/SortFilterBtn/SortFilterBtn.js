import React from "react";



function SortFilterBtn(props) {
    console.log("offices", props.offices)
    return (
        <div className="Sort&Filter">
            <p className="sort-employees">Sort the employees by: 
                <select name="sort" id="sorted" onChange={props.onChangeSort}>
                <option value=" ">------------</option>
                    <option value="Last Name">Last Name</option>
                    <option value="First Name">First Name</option>
                </select>
            </p>
            <p className="filter-employees">Filter employees by office location: 
                <select name="filter-employees" onChange={props.onChangeFilter}>
                <option value="All">All</option>
                {props.offices.map((office, index)=>{
                return (
                <option value={office} key={index}>{office}</option>
                )
            })}
                </select>
            </p>
        </div>
    )
}

export default SortFilterBtn;