import { motion } from "framer-motion";
import { useContext } from "react";
import Lines from "./components/Lines";
import MoveButton from "./components/MoveButton";
import TextAnimate from "./components/TextAnimate";
import { DrawContext } from "./context/DrawContext";
import { LinesContext } from "./context/LinesContext.jsx";
import { MovesContext } from "./context/MovesContext";
import { PlayerContext } from "./context/PlayerContext";
import { WinContext } from "./context/WinContext";
import { WinningElementContextTest } from "./context/WinningElementsContext";
import "./output.css";

const App = () => {
  const { player, togglePlayer } = useContext(PlayerContext);
  const { lines, resetLines, chooseMove } = useContext(LinesContext);
  const { win } = useContext(WinContext);
  const { draw, toggleDraw } = useContext(DrawContext);
  const { moves, resetMoves } = useContext(MovesContext);
  const { winningElement, resetElements } = useContext(
    WinningElementContextTest
  );

  const resetButton = () => {
    resetMoves();
    resetLines();
    resetElements();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-align justify-center gap-10 m-5"
    >
      <div>
        <p className="text-center font-bold bg-green-600 rounded-lg py-2 text-white font-bold">Next Player : {player}</p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="m-10 w-40 h-40 mx-auto"
        >
          {lines.map((element, index) => (
            <Lines
              squareItems={[element[0], element[1], element[2]]}
              line={index}
            />
          ))}
        </motion.div>

        <TextAnimate animation={win ? "show" : "hide"}>
          {player} WON !
        </TextAnimate>

        <TextAnimate animation={draw ? "show" : "hide"}>DRAW !</TextAnimate>
      </div>

      <div className="flex flex-col basis-1/6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-5 py-2 bg-red-500 rounded-lg text-white font-bold mx-auto"
          onClick={resetButton}
        >
          RESET
        </motion.button>
        {moves.map((element, index) => (
          <MoveButton onClick={chooseMove(element)}>
            Move : {index + 1} | Player : {element.player}
          </MoveButton>
          // <button onClick={chooseMove(element)}>
          //   Move : {index + 1} | Player : {element.player}
          // </button>
        ))}
      </div>
    </motion.div>
  );
};

export default App;
