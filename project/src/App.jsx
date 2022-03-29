import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Button from "./components/Button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <>
      <div>
        <div>
          <Button onClick={handleRollClick}>던지기</Button>
          <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <Board
          color="red"
          name="나"
          num={num}
          sum={sum}
          gameHistory={gameHistory}
        />
        <Board
          color="blue"
          name="상대방"
          num={num}
          sum={sum}
          gameHistory={gameHistory}
        />
      </div>
    </>
  );
}

export default App;
