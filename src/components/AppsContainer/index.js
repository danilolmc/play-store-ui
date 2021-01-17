import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AppCard } from "../CardApp";
import {getInitialsApps} from '../../services/cards.service';

import "./apps-container.css";

export const AppsContainer = ({ title, apps}) => {
  
  const [firstEight, setfirstEight] = useState()

  useEffect(() => {
    setfirstEight(getInitialsApps(apps,8))
  },[apps])

  console.log(apps)


  return (
    <section className="apps-container">
      <header className="apps-container-header">
        <div className="apps-container-header-div-left">
          <h1>{title}</h1>
          <span>{apps.length} apps</span>
        </div>
        <div className="apps-container-header-div-right">
          <button>
            <span>See All</span>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>
        </div>
      </header>

      <div className="apps">
        {firstEight && firstEight.map((app,index) => {
            return <AppCard key={index} {...app} />;
        })}
      </div>
    </section>
  );
};
