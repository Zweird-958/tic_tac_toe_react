import { createContext, useState } from "react";
export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState("X");

  const togglePlayer = () => {
    const symbol = player === "X" ? "O" : "X";
    setPlayer(symbol);
  };

  const changePlayer = (symbol) => {
    setPlayer(symbol)
  }

  return (
    <PlayerContext.Provider value={{ player, togglePlayer, changePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};