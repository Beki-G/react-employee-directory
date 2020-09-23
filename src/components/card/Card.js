import React from "react";

function Card(props) {
    return (
        <div className=" sm:w-1/2 max-w-sm rounded overflow-hidden shadow-lg m-auto">
            <img className="w-full object-fill" alt="Employee Pic" src={props.picture.large} />
            <div className="font-bold text-xl">{props.name.title} {props.name.first} {props.name.last}</div>
            <p className="text-gray-700 text-base"><span><strong>Employee ID:</strong></span> {props.id.value !== null? props.id.value: "TBD - New team member"}</p>
            <p className="text-gray-700 text-base"><span><strong>Employee Email:</strong></span> {props.email}</p>
            <p className="text-gray-700 text-base"><span><strong>Employee Phone:</strong></span> {props.phone}</p>
            <p className="text-gray-700 text-base"><span><strong>Office Location:</strong></span> {props.location.city}, {props.location.state}, {props.location.country}</p>
            <p className="text-gray-700 text-base"><span><strong>Timezone:</strong></span> {props.location.timezone.offset} {props.location.timezone.description}</p>
        </div>
    )
}

export default Card;