import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHdd } from "@fortawesome/free-regular-svg-icons";

import "./card-app.css";
import { motion } from "framer-motion";

const cardAnimate = {
  visible : cardIndex => ({
    opacity: 1,
    y: 0,
    transition :{
      delay: (cardIndex + 9) * 0.05,
      duration: .7,
      ease : 'easeInOut'
      
    }
  }),
  
  hidden : {
    opacity: 0,
    y: 45,
    duration: 1,
    ease : 'easeInOut'
  },
};

export const AppCard = ({
  cardImg,
  appName,
  appDevelopedBy,
  appRating,
  appSize,
  cardIndex
}) => {

  return (
    <motion.figure className="card-app" variants={cardAnimate} custom={cardIndex} initial="hidden" animate="visible">
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
    </motion.figure>
  );
};
