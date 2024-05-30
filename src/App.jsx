import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header.jsx";
import CardDeck from "./components/CardDeck.jsx";
import victory from "./assets/victory.mp3";
import failed from "./assets/death.mp3";
import Message from "./components/Message.jsx";

function App() {
  /**
   * Originally, these two states were inside the Scoreboard
   * The issue was that I needed <Card> to call the checkAlreadyClicked method
   * It's hard to pass across to sibiling components so I kept the states
   * inside the <App> component which is the very top parent
   */
  const [cardsClicked, setCardsClicked] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [gameMessage, setGameMessage] = useState("YOU FAILED");
  const [showMesage, setShowMessage] = useState(false);

  useEffect(() => {
    if (cardsClicked.length == 12) {
      const audio = new Audio(victory);
      audio.play();
      setGameMessage("VICTORY");
      setShowMessage(true);
    }
    setTimeout(() => {
      setShowMessage(false);
    }, 10000);
  }, [cardsClicked]);

  function checkAlreadyClicked(id) {
    if (cardsClicked.includes(id)) {
      if (cardsClicked.length > bestScore) {
        setBestScore(cardsClicked.length);
      }
      setGameMessage("YOU FAILED");
      setShowMessage(true);
      const death = new Audio(failed);
      death.play();

      setCardsClicked([]);
    } else {
      setCardsClicked((prevArr) => {
        const newCopy = [...prevArr];
        newCopy.push(id);
        return newCopy;
      });
    }
  }
  return (
    <>
      {showMesage && <Message message={gameMessage} />}

      <Header cardsClicked={cardsClicked} bestScore={bestScore} />
      <CardDeck checkAlreadyClicked={checkAlreadyClicked} />
    </>
  );
}

export default App;
