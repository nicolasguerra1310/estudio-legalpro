import React from 'react';
import { motion } from 'framer-motion';

const CardAnimation = ({ children, isVisible = false, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{
                duration: 1,
                delay,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            {children}
        </motion.div>
    );
};

export default CardAnimation;
