import React from "react"
import pointIcon from "../assets/point.png"

export default function Card(props) {
    return (
        <div className="card--body">
            <img className="card--img" src={props.imageUrl} alt="img" />
            <div className="card--info">
                <div className="card--info_location">
                    <img src={pointIcon} alt="Point" />
                    <p className="card--info_country">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="card--info_date">{props.startDate} - {props.endDate}</p>
                <p className="card--info_description">{props.description}</p>
            </div>
        </div>  
    )
}