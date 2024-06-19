import React from "react";
import { motion } from "framer-motion";

const ShowAnimation = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1, transition: { duration: 2,  ease: 'easeInOut' } }
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ShowAnimation;
