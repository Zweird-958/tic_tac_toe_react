import { motion } from "framer-motion";

const MoveButton = (props) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={props.onClick}
      className="font-bold bg-blue-500 w-fit px-2 rounded-lg px-2 py-3 mx-auto m-2 text-white"
    >
      {props.children}
    </motion.button>
  );
};

export default MoveButton;
