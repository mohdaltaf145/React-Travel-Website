import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image1 from "../images/img-2.jpg";
import image2 from "../images/img-9.jpg";
import image3 from "../images/img-4.jpg";
import image4 from "../images/img-8.jpg";
import image5 from "../images/img-3.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Checkout these EPIC Destinations! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="Explore the hidden Waterfall Inside the deep Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={image2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image3}
              text="Experience Football on Top of the Himaliyan Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={image4}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adreline"
              path="/services"
            />
            <CardItem
              src={image5}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Water"
              label="Mystery"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
