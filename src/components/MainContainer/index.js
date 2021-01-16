import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";

import "./main-container.css";

export const MainContainer = ({ children }) => {
  return (
    <main>
      <div className="main-content">
        <header>
          <div className="left-content"></div>
          <div className="right-content">
            <span>
              <FontAwesomeIcon icon={faTh} />
            </span>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
          </div>
        </header>

        {children}
      </div>
    </main>
  );
};
