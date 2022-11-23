import { useContext } from "react";
import { LinesContext } from "../context/LinesContext";

const Square = (props) => {
  const children = props.children;
  const lineIndex = props.line;
  const columnIndex = props.column;

  const { updateLines } = useContext(LinesContext);

  return (
    <button
      className="border border-zinc-600 w-1/3 h-full text-center"
      onClick={updateLines(lineIndex,columnIndex)}
    >
      {children}
    </button>
  );
};

export default Square;
