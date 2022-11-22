import React from "react";
import IntermediaryTitle from "../intermediary-title";
import Location from "../location";
import Button from "../button";
import Search from "../search";
import Delivery from "../delivery";
import Price from "../price";
import Reviews from "../reviews";
import Title from "../title";

const Card = () => {
  return (
    <div className="wrap">
      <Title title="Ecovacs Deebot OZMO N8 +" />
      <Reviews rating="3.0" number="14" />

      <Price price="4395,-" />

      <Delivery />

      <Search />

      <Location city="Fyllingsdalen" distance="3.8" pickup="5" status="10:00">
        <Button content="Add to cart" />
      </Location>

      <IntermediaryTitle />

      <Location city="Fana" distance="7.1" pickup="3" status="10:00" />

      <Location city="Lagoon" distance="83.6" pickup="4" status="10:00" />

      <div className="wrap__background"></div>
    </div>
  );
};

export default Card;
