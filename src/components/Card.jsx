import PropTypes from "prop-types";
import "../styles/_Card.scss";
function Card({
  name = "Sorceress Sellen",
  img = "https://eldenring.fanapis.com/images/npcs/17f69ddf39dl0i2ojm1riku8s6qxfs.png",
  description = "Tarnished, are we? A wonder you should turn up here. I am Sellen, a sorcerer, quite plainly. Why are you here?",
  id,
  checkAlreadyClicked,
  shuffleCards,
}) {
  return (
    <div
      className="card"
      onClick={() => {
        checkAlreadyClicked(id);
        shuffleCards();
      }}
    >
      <div className="card__img-container">
        <img src={img} alt={name} className="card__img" />
      </div>
      <div className="card__info">
        <h1 className="card__name">{name}</h1>
        <p className="card__description">{description && `"${description}"`}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  checkAlreadyClicked: PropTypes.func,
  shuffleCards: PropTypes.func,
};

export default Card;
