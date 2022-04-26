import { useState } from "react";
import "./SingleCard.css";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const clickHandler = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />

        <img
          className="back"
          src="/img/cover.png"
          onClick={clickHandler}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default SingleCard;
