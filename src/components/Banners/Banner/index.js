import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import './banner.css'

export const Banner = ({ rating, imgBakcground }) => {
  return (
    <div className="banner">
      <img className="banner-image" src={imgBakcground}/>
      
      <span id="rating-label">
        <FontAwesomeIcon icon={faStar} />
        <label>{rating}</label>
      </span>
    </div>
  );
};
