import Scoreboard from "./Scoreboard.jsx";

import PropTypes from "prop-types";
import "../styles/_Header.scss";
function Header({ cardsClicked, bestScore }) {
  return (
    <header>
      <div className="header-info">
        <h1>Elden Ring Memory Game</h1>
        <p>Click on an image only once</p>
      </div>
      <Scoreboard cardsClicked={cardsClicked} bestScore={bestScore} />
    </header>
  );
}

Header.propTypes = {
  cardsClicked: PropTypes.array,
  bestScore: PropTypes.number,
};
export default Header;
