import React from "react";
import { motion } from "framer-motion";

const NavAnimation = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeInOut' } }
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

export default NavAnimation;
