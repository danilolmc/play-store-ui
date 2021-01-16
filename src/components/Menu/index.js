import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch, faTh } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="left-side-header">
        <div>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <span>Play Games</span>
        </div>

        <div className="container-input">
          <label htmlFor="searchInput">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              placeholder="Search the store"
              id="searchInput"
            />
          </label>
        </div>
      </div>

      <div className="right-side-header">
        <nav>
          <ul>
            <li>Account</li>
            <li>Promocode</li>
            <li>My Wishlist</li>
            <li>Support</li>
          </ul>
        </nav>

        <div className="righ-side-header-user-items">
          <span>
            <FontAwesomeIcon icon={faTh} />
          </span>

          <span>
            <FontAwesomeIcon icon={faBell} />
          </span>

          <img
            src="https://avatars2.githubusercontent.com/u/31545128?s=460&u=eed59e12dfe441d690ebcac879427aa1c2bdb081&v=4"
            alt="Profile image"
          />
        </div>
      </div>
    </div>
  );
};
