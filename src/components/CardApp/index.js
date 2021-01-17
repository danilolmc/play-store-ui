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
        <p title={appName}>{appName}</p>
        <p title={`by ${appDevelopedBy}`}>by {appDevelopedBy}</p>

        <footer>
          <span>
            <label>
              <FontAwesomeIcon icon={faStar} />
            </label>
            <label>{appRating.toFixed(1)}</label>
          </span>
          <span>
            <label>
              <FontAwesomeIcon icon={faHdd} />
            </label>
            <label>{appSize} mb</label>
          </span>
        </footer>
      </figcaption>
    </figure>
  );
};
