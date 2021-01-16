import React from "react";
import { Banner } from "./Banner";
import royale from "../../assets/royale.jpg";
import forcearena from "../../assets/forcearena.jpg";
import clans from "../../assets/clans.jpg";

import './banners.css'

export const Banners = () => {
  return (
    <section>
      <Banner rating={4.5} imgBakcground={royale} />
      <Banner rating={4.2} imgBakcground={forcearena} />
      <Banner rating={4.9} imgBakcground={clans} />
    </section>
  );
};
