import axios from "axios";
import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import Dice from "./components/Dice";
import Game from "./types/game";

const App = () => {
  const [game, setGame] = useState<Game>();


  // As we configured proxy, we can directly use api/games instead of http://localhost:3000/games
  useEffect(() => {
    axios.post("api/games").then((response) => {
      setGame(response.data);
    });
  }, []);

  const rollDice = () => {
    if (!game) return;
    axios.post(`http://localhost:3000/games/${game.id}/roll_dice`).then((response) => {
      setGame(response.data);
    });
  };

  return (
    <div>
      <h1>Snake and Ladder</h1>
      {game && <GameBoard board={game.board} />}
      <Dice rollDice={rollDice} />
    </div>
  );
}

export default App
