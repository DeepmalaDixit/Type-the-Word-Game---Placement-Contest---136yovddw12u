import React, { useState, useEffect } from "react";
import "../styles/App.css";

const WORD_LIST = ["apple", "banana", "cherry", "grape", "orange"];

function App() {
  const [word, setWord] = useState(WORD_LIST[0]);
  const [flashWord, setFlashWord] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlashWord(false);
      // console.log("hello");
      // setWord(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [flashWord]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userInput === WORD_LIST[index]) {
      // console.log("won");
      setResult("You won!");
    } else {
      // console.log("lost");
      setResult("You lost!");
    }
  };

  const handleRestartClick = () => {
    setIndex((index) => index + 1);
    setFlashWord(true);
    setUserInput("");
    setResult(null);
  };
  return (
    <div className="mini-game-container">
      <h2 className="mini-game-title">Mini Game</h2>
      {flashWord ? (
        <p className="mini-game-word">{WORD_LIST[index]}</p>
      ) : (
        <form className="mini-game-form" onSubmit={handleFormSubmit}>
          <input
            className="mini-game-input"
            type="text"
            value={userInput}
            onChange={handleInputChange}
          />
          <button className="mini-game-button" type="submit">
            Check Answer
          </button>
        </form>
      )}

      {/* <p>{flashWord}</p> */}
      {result && (
        <>
          <p className="mini-game-result">{result}</p>
          <button
            className="mini-game-restart-button"
            onClick={handleRestartClick}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
