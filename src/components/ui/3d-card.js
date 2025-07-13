"use client";
import React, { createContext, useContext, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import PropTypes from "prop-types";

const Card3DContext = createContext();

export function CardContainer({ children, className = "", ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  return (
    <Card3DContext.Provider value={{ x, y }}>
      <motion.div
        ref={ref}
        className={`relative perspective-1000 ${className}`}
        style={{ perspective: 1000 }}
        onMouseMove={e => {
          const rect = ref.current.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          x.set(px);
          y.set(py);
        }}
        onMouseLeave={() => {
          x.set(0.5);
          y.set(0.5);
        }}
        {...props}
      >
        {children}
      </motion.div>
    </Card3DContext.Provider>
  );
}

CardContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export function CardBody({ children, className = "", ...props }) {
  const { x, y } = useContext(Card3DContext);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);
  return (
    <motion.div
      className={`transition-transform duration-300 ${className}`}
      style={{ rotateX, rotateY }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export function CardItem({ children, className = "", translateZ = 0, as: Component = "div", ...props }) {
  return (
    <motion.div
      className={className}
      style={{ translateZ }}
      {...props}
      as={Component}
    >
      {children}
    </motion.div>
  );
}

CardItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  translateZ: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  as: PropTypes.elementType,
}; 