import { createContext, useContext, useState } from "react";
import { DrawContext } from "./DrawContext";
import { MovesContext } from "./MovesContext";
import { PlayerContext } from "./PlayerContext";
import { WinContext } from "./WinContext";
export const LinesContext = createContext();

const initialLines = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export const LinesProvider = ({ children }) => {
  const [lines, setLines] = useState(initialLines);

  const { player, togglePlayer, changePlayer } = useContext(PlayerContext);
  const { win, toggleWin } = useContext(WinContext);
  const { toggleDraw } = useContext(DrawContext);
  const { addNewMoves } = useContext(MovesContext);

  const ifDraw = (newLines) => {
    for (let i = 0; i < newLines.length; i++) {
      for (let j = 0; j < newLines[i].length; j++) {
        if (newLines[i][j] === "") {
          return false;
        }
      }
    }

    return true;
  };

  const calculateWin = (newLines) => {
    // Lines Wins
    let localWin = false;
    newLines.map((element) => {
      if (
        element[0] === element[1] &&
        element[0] === element[2] &&
        element[0] !== ""
      ) {
        localWin = true;
      }
    });

    // Columns Wins

    for (let i = 0; i < newLines.length; i++) {
      if (
        newLines[0][i] === newLines[1][i] &&
        newLines[0][i] === newLines[2][i] &&
        newLines[0][i] !== ""
      ) {
        localWin = true;
      }
    }

    // Diagonal Wins

    if (
      newLines[0][0] === newLines[1][1] &&
      newLines[0][0] === newLines[2][2] &&
      newLines[0][0] !== ""
    ) {
      localWin = true;
    } else if (
      newLines[2][0] === newLines[1][1] &&
      newLines[2][0] === newLines[0][2] &&
      newLines[2][0] !== ""
    ) {
      localWin = true;
    }

    return localWin;
  };

  const copyLines = () => {
    const newLines = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[i].length; j++) {
        newLines[i][j] = lines[i][j];
      }
    }
    return newLines;
  };

  const turn = (newLines) => {
    let turnNumber = 0;

    for (let i = 0; i < newLines.length; i++) {
      for (let j = 0; j < newLines[i].length; j++) {
        if (newLines[i][j] !== "") {
          turnNumber++;
        }
      }
    }

    return turnNumber;
  };

  const updateLines = (lineIndex, columnIndex) => () => {
    if (win) {
      return;
    }
    const newLines = copyLines();
    if (newLines[columnIndex][lineIndex] !== "") {
      return;
    }
    newLines[columnIndex][lineIndex] = player;

    const turnVal = turn(newLines);
    addNewMoves(newLines, player, turnVal);
    setLines(newLines);
    // deleteMoves(2);
    const localWin = calculateWin(newLines);
    if (localWin) {
      return toggleWin(true);
    }
    const drawVal = ifDraw(newLines);
    if (drawVal) {
      toggleDraw(true);
    }
    togglePlayer();
  };

  const chooseMove = (move) => () => {
    const moveLines = move.lines;
    const newSymbol = move.player === "X" ? "O" : "X";
    changePlayer(newSymbol);
    const localWin = calculateWin(moveLines);
    toggleWin(localWin);
    const localDraw = ifDraw(moveLines);
    toggleDraw(localDraw);
    setLines(move.lines);
  };

  const resetLines = () => {
    setLines(initialLines);
    toggleWin(false);
    toggleDraw(false);
  };

  return (
    <LinesContext.Provider
      value={{ lines, updateLines, resetLines, chooseMove }}
    >
      {children}
    </LinesContext.Provider>
  );
};
