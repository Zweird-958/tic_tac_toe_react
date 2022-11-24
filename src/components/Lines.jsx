import Square from "./Square";

const Lines = (props) => {
  const squareItems = props.squareItems;

  return (
    <div className="p-0 m-0 w-full h-1/3 flex items-center justify-center">
      {squareItems.map((item,index) => (
        <Square line={props.line} column={index} >{item}</Square>
      ))}
    </div>
  );
};

export default Lines;