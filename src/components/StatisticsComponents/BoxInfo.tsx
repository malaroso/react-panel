import React from 'react';
import { motion } from "framer-motion";

interface BoxInfosType {
  iconClass: any;
  backgroundClass: any;
  colorClass: any;
  title: any;
  value: any;
}

const BoxInfo: React.FC<BoxInfosType> = ({ iconClass, backgroundClass, colorClass, title, value }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <li>
        <div className={`bx ${backgroundClass}`} style={{ color: colorClass }}>
          <i className={iconClass}></i>
        </div>
        <div className="text">
          <h3>{value}</h3>
          <p>{title}</p>
        </div>
      </li>
    </motion.div>

  );
};

export default BoxInfo;
