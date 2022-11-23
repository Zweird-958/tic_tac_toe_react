import { motion } from "framer-motion";

const itemVariants = {
  show: {
    opacity: 1,
    scale: [1, 1.1, 1],
    display: "block",
  },
  hide: {
    opacity: 0,
    scale: 1,
    transitionEnd: { display: "none" },
  },
};

const TextAnimate = (props) => {
  console.log(props);
  return (
    <motion.p
      whileHover={{ scale: 1.1 }}
      variants={itemVariants}
      initial={false}
      animate={props.animation}
      transition={{ duration: 0.5 }}
      className={`m-10 text-xl font-bold w-fit mx-auto`}
    >
      {props.children}
    </motion.p>
  );
};

export default TextAnimate;
