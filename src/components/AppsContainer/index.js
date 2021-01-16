import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AppCard } from "../CardApp";

import "./apps-container.css";

export const AppsContainer = ({ title }) => {
  const apps = [
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
      {
          cardImg:'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
          appName: 'Clash Royale',
          appDevelopedBy: 'Supercell',
          appRating: 4.8,
          appSize: 48
      },
  ];

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
        {apps.map(app => {
          return <AppCard {...app} />;
        })}
      </div>
    </section>
  );
};
