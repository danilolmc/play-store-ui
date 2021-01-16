import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import './banner.css'

export const Banner = ({ rating, imgBakcground }) => {
  return (
    <div className="banner" style={{backgroundImage: `url(${imgBakcground})`}}>
      <span>
        <FontAwesomeIcon icon={faStar} />
        <label>{rating}</label>
      </span>
    </div>
  );
};
