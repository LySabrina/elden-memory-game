import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
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

  useEffect(() => {
    if (cardsClicked.length == 1) {
      const audio = new Audio(victory);
      audio.play();

      setTimeout(() => {
        console.log("did it");
      }, 8000);
    }
  }, [cardsClicked]);

  function checkAlreadyClicked(id) {
    if (cardsClicked.includes(id)) {
      if (cardsClicked.length > bestScore) {
        setBestScore(cardsClicked.length);
      }
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
      <Message />
      <Header cardsClicked={cardsClicked} bestScore={bestScore} />
      <CardDeck checkAlreadyClicked={checkAlreadyClicked} />
    </>
  );
}

export default App;
