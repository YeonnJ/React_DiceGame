import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Button from "./components/Button/Button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myGameHistory, setMyGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);

    setMyGameHistory([...myGameHistory, nextNum]);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyGameHistory([]);
    setOtherGameHistory([]);
  };

  return (
    <>
      <div>
        <div>
          <Button onClick={handleRollClick}>던지기</Button>
          <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <Board color="red" name="나" gameHistory={myGameHistory} />
        <Board color="blue" name="상대방" gameHistory={otherGameHistory} />
      </div>
    </>
  );
}

export default App;
