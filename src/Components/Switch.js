import React, { useState } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const Switch = () => {
  const [state, setState] = useState(false);
  const handleOntap = () => {
    setState(!state)
  };
  return (
    <motion.div
      className="container"
      css={css`
        width: 100px;
        height: 50px;
        background: whitesmoke;
        border-radius: 50px;
        position: relative;
      `}
      onTap={handleOntap}
    >
      <motion.div
        className="ball"
        css={css`
          width: 50px;
          height: 50px;
          background: royalblue;
          border-radius: 50%;
          position: absolute;
          left: ${state ? 'unset' : 0};
          right: ${state ? 0 : 'unset'};
        `}
        transition={{duration: 1}}
        positiontransition="true"
      ></motion.div>
    </motion.div>
  );
};

export default Switch;
