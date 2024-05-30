import { useState } from "react";
import PropTypes from "prop-types";
function Scoreboard({ cardsClicked, bestScore }) {
  return (
    <div>
      <h2>Score: {cardsClicked.length} </h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
}

Scoreboard.propTypes = {
  cardsClicked: PropTypes.array,
  bestScore: PropTypes.number,
};

export default Scoreboard;
