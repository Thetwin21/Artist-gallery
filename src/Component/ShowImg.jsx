import React from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

const show = {
  open: { opacity: 1, x: 0, y: 0 },
  closed: { opacity: 0, x: 500, y: 500 },
};

const ShowImg = ({ imgSrc, animate, onClick }) => {
  return (
    <motion.div
      className="cover"
      animate={animate ? "closed" : "open" }
      transition={{ ease: "easeInOut", duration: 2 }}
      variants={show}
      
    >
      <img src={imgSrc} alt="" />
      <div className="icon" onClick={onClick}>
        <GrClose />
      </div>
    </motion.div>
  );
};

export default ShowImg;
