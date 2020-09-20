import React from "react";

function Card(props){
    return(
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" alt="Employee Pic" src={props.picture.medium} />
    <div className="font-bold text-xl mb-2"> {props.name.title} {props.name.first} {props.name.last}</div>
                <p className="text-gray-700 text-base">Employee ID: {props.id.value}</p>
                <p className="text-gray-700 text-base">Employee Email: {props.email}</p>
                <p className="text-gray-700 text-base">Employee Phone: {props.phone}</p>
                <p className="text-gray-700 text-base">Office Location: {props.location.city}, {props.location.state}, {props.location.country}</p>
                <p className="text-gray-700 text-base">Timezone: {props.location.timezone.offset} {props.location.timezone.description}</p>
            </div>
        </div>
    )
}

export default Card;