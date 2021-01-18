import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AppCard } from "../CardApp";
import {getInitialsApps} from '../../services/cards.service';

import "./apps-container.css";
import { motion } from 'framer-motion';

const titleCardContainerAnimation = {
  visible: {
    opacity: 1,
    x:0,
    transition: {
      duration: 1,
      delay: .5
    }
  },
  hidden: { 
    opacity: 0,
    x:40,
 },
}

const seAllAnimationButton = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: .5
    }
  },
  hidden: { 
    opacity: 0,
 },
}

export const AppsContainer = ({ title, apps}) => {
  
  const [firstEight, setfirstEight] = useState()

  useEffect(() => {
    setfirstEight(getInitialsApps(apps,8))
  },[apps])


  return (
    <section className="apps-container">
      <header className="apps-container-header">
        <motion.div className="apps-container-header-div-left" variants={titleCardContainerAnimation} initial="hidden" animate="visible">
          <h1>{title}</h1>
          <span>{apps.length} apps</span>
        </motion.div>
        <motion.div className="apps-container-header-div-right" variants={seAllAnimationButton} initial="hidden" animate="visible">
          <button>
            <span>See All</span>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>
        </motion.div>
      </header>

      <div className="apps">
        {firstEight && firstEight.map((app,index) => {
            return <AppCard key={index} {...app} cardIndex={index}/>;
        })}
      </div>
    </section>
  );
};
