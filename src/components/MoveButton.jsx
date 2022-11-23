import { motion } from "framer-motion";

const MoveButton = (props) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default MoveButton;
