import { useContext } from "react";
import Lines from "./components/Lines";
import { DrawContext } from "./context/DrawContext";
import { LinesContext } from "./context/LinesContext.jsx";
import { MovesContext } from "./context/MovesContext";
import { PlayerContext } from "./context/PlayerContext";
import { WinContext } from "./context/WinContext";
import "./output.css";
import { motion, Variants } from "framer-motion";

const itemVariants = {
  show: {
    opacity: 1,
    scale: [1,1.1,1]
  },
  hide: { opacity: 0, scale:1, display:'none' }
};

const App = () => {
  const { player, togglePlayer } = useContext(PlayerContext);
  const { lines, resetLines, chooseMove } = useContext(LinesContext);
  const { win } = useContext(WinContext);
  const { draw, toggleDraw } = useContext(DrawContext);
  const { moves, resetMoves } = useContext(MovesContext);

  const resetButton = () => {
    resetMoves();
    resetLines();
  };


  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <p className="text-center mb-5">Next Player : {player}</p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="m-10 w-40 h-40 mx-auto"
      >
        {lines.map((element, index) => (
          <Lines
            squareItems={[element[0], element[1], element[2]]}
            column={index}
          />
        ))}
      </motion.div>

      <motion.p
        whileHover={{scale:1.1}}
        initial={false}
        animate={win ? "show" : "hide"}
        variants={itemVariants}
        transition={{ duration: 0.5 }}
        className={`m-10 text-xl font-bold w-fit mx-auto`}
      >
        {player} WON !
      </motion.p>
      <motion.p
        whileHover={{scale:1.1}}
        initial={false}
        animate={draw ? "show" : "hide"}
        variants={itemVariants}
        transition={{ duration: 0.5 }}
        className={`m-10 text-xl font-bold w-fit mx-auto`}
      >
        DRAW !
      </motion.p>

      <div className="flex flex-col">
        {moves.map((element, index) => (
          <button onClick={chooseMove(element)}>
            Move : {index + 1} | Player : {element.player}
          </button>
        ))}
      </div>

      {/* test */}

      <div className="m-10 w-32 mx-auto flex flex-col">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-5 py-2 bg-red-500 rounded-lg text-white font-bold"
          onClick={resetButton}
        >
          RESET
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-5 py-2 bg-red-500 rounded-lg text-white font-bold"
          onClick={() => toggleDraw(!draw)}
        >
          DRAW
        </motion.button>
      </div>
    </motion.div>
  );
};

export default App;
