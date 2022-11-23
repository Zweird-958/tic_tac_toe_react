import { createContext, useState } from "react";

export const MovesContext = createContext();

export const MovesProvider = ({ children }) => {
  const [moves, setMoves] = useState([]);

  const copyMoves = () => {
    const newMoves = [];

    moves.map((element) => {
      newMoves.push(element);
    });
    return newMoves;
  };

  const resetMoves = () => {
    setMoves([]);
  };

  const addNewMoves = (newLines, currentPlayer, moveIndex) => {
    const newMoves = copyMoves();

    newMoves.push({ player: currentPlayer, lines: newLines });

    if (newMoves.length > moveIndex) {
      const lastTurn = newMoves.pop();
      setMoves([...newMoves.slice(0, moveIndex - 1), lastTurn]);
    } else {
      setMoves(newMoves.slice(0, moveIndex));
    }
  };

  return (
    <MovesContext.Provider value={{ moves, addNewMoves, resetMoves }}>
      {children}
    </MovesContext.Provider>
  );
};
