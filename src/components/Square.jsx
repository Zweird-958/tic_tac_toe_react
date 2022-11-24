import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { LinesContext } from "../context/LinesContext";
import { WinningElementContextTest } from "../context/WinningElementsContext";

const itemVariants = {
  show: {
    opacity: 1,
    scale: 2,
    color: "rgb(220 38 38)",
    // display: "block",
    transitionEnd: { display: "none" },
  },
  hide: {
    opacity: 0.5,
    color: "rgb(220 38 38)",
    scale: 1,
    // transitionEnd: { display: "none" },
  },
};

const Square = (props) => {
  const children = props.children;
  const lineIndex = props.line;
  const columnIndex = props.column;

  const { updateLines } = useContext(LinesContext);
  const { winningElement } = useContext(WinningElementContextTest);
  const [test, setTest] = useState(false);


  return (
    <motion.button
      className={`border border-zinc-600 w-1/3 h-full text-center font-bold`}
      onClick={updateLines(lineIndex,columnIndex)}
    >
      <motion.p
        animate={
          winningElement[lineIndex][columnIndex]
            ? {
                scale: [1.2, 1.5,1.2],
                color: "rgb(220 38 38)",
              }
            : ""
        }
        // transition={{repeat: 1}}
      >
        {children}
      </motion.p>
    </motion.button>
  );
};

export default Square;
