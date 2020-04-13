import React from "react";
import "./ProjectCard.css";
import dailyPlanner from "../../images/dailyplanner.jpg";
import photoSearch from "../../images/photosearch.jpg";
import placeHolderImage from "./200x200.png";
import trackRX from "../../images/trackrx.jpg";
import weatherApp from "../../images/weatherapp.jpg";

export default function ProjectCard(props) {
    const images = {
        dailyPlanner,
        photoSearch,
        placeHolderImage,
        trackRX,
        weatherApp
    };

    const {
        name,
        image,
        repositoryLink,
        deployedLink
    } = props;

    return (



        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src="holder.js/100px180" />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        // </Card.Text>
        //             <Button variant="primary">Go somewhere</Button>
        //         </Card.Body>
        //     </Card>



        //     <div class="card" style="width: 18rem;">
        //   <img src="..." class="card-img-top" alt="...">
        //   <div class="card-body">
        //     <h5 class="card-title">Card title</h5>
        //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     <a href="#" class="btn btn-primary">Go somewhere</a>
        //   </div>
        // </div>



        <div className="card">
            <div className="card-title">
                <h2>{name}</h2>
            </div>
            <div className="card-body">
                <img className = "card-image"alt="preview of the project" src={images[image]} />
                <div>
                    <a href={repositoryLink}>Repository</a>
                    <br></br>
                    <a href={deployedLink}>Deployed</a>
                </div>
            </div>
        </div>
    );
}