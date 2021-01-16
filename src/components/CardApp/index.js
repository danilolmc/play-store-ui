import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHdd } from "@fortawesome/free-regular-svg-icons";

import "./card-app.css";

export const AppCard = ({
  cardImg,
  appName,
  appDevelopedBy,
  appRating,
  appSize,
}) => {
  return (
    <figure className="card-app">
      <img src={cardImg} />

      <figcaption>
        <p>{appName}</p>
        <p>by {appDevelopedBy}</p>

        <footer>
          <span>
            <FontAwesomeIcon icon={faStar} />
            <label>{appRating}</label>
          </span>
          <span>
            <FontAwesomeIcon icon={faHdd} />
            <label>{appSize} mb</label>
          </span>
        </footer>
      </figcaption>
    </figure>
  );
};
