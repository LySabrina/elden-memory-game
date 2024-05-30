import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import "../styles/_CardDeck.scss";
import PropTypes from "prop-types";
function CardDeck({ checkAlreadyClicked }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/npcs?limit=12")
      .then((response) => response.json())
      .then((json) => {
        setCards(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  }

  return (
    <div className="card-deck">
      {cards.map((elem) => (
        <Card
          key={elem.id}
          name={elem.name}
          description={elem.quote}
          img={elem.image}
          id={elem.id}
          checkAlreadyClicked={checkAlreadyClicked}
          shuffleCards={shuffleCards}
        />
      ))}
    </div>
  );
}
CardDeck.propTypes = {
  checkAlreadyClicked: PropTypes.func,
};
export default CardDeck;
