import React from "react";
import Card from 'react-bootstrap/Card'
import "./ProjectCard.css";
import dailyPlanner from "../../images/dailyplanner.jpg";
import photoSearch from "../../images/photosearch.jpg";
import placeHolderImage from "./200x200.png";
import trackRX from "../../images/trackrx.jpg";
import weatherApp from "../../images/weatherapp.jpg";
import financeApp from "../../images/financeApp.jpg"
import fitnessTracker from "../../images/fitnessTracker.jpg"

export default function ProjectCard(props) {
    const images = {
        dailyPlanner,
        photoSearch,
        placeHolderImage,
        trackRX,
        weatherApp,
        financeApp,
        fitnessTracker
    };

    const {
        name,
        image,
        repositoryLink,
        deployedLink
    } = props;

    return (


        <div className="card">  
            <div className="card-title">
                <h2>{name}</h2>
            </div>
            <div className="card-body">
                <img className="card-image" alt="preview of the project" src={images[image]} />
                <div>
                    <a href={repositoryLink}>Repository</a>
                    <br></br>
                    <a href={deployedLink}>Deployed</a>
                </div>
            </div>

        </div>
    );
}