import React from "react";
import "./Bio.css";
import { Col } from 'react-bootstrap/'
import profileImage from "../../images/profile_pic.jpg";

export default function Bio() {
  return (
    <div className="bio">

      <Col lg={12} >
        <img className="biophoto" alt="creator of the site" src={profileImage} />

        <p>
          Born and raised in the 801. I'm a woman with a voracious appetite for knowledge and learning, and I'm constantly looking for ways to maximize my existence.
              <br></br>
          <br></br>
      I believe in the power of public service (fully cognizant of its faults),and would like to continue my career in government. I'm an aspiring data scientist with an academic background in health policy, statistics, and GIS.
     <br></br>
          <br></br>
      To keep myself sane, I run, read (almost exclusively novels), write, volunteer, binge Nat Geo and eat more peanut butter than I care to admit. I will be able to die happily once I have a dog and an El Camino. I'm here to take a bite out of life.

      </p>
      </Col>

    </div>
  );
}

