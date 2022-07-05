import React, { Component } from "react";
import "./Card.css";
import cards from "./cards";

export default class Card extends Component {
  render() {
    return (
      <div className="card_container">
        {cards.map((card) => (
          <div key={card.alt}>
            <img src={card.src} alt="ahf" className="card_img" />
          </div>
        ))}
      </div>
    );
  }
}
