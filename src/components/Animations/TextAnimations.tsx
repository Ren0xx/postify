import { motion, type Variants } from "framer-motion";
import React from "react";
interface AnimatedTextProps {
    texts: Array<React.ReactNode>;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts }) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 1.5,
            },
        },
    };

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={containerVariants}>
            {texts.map((text, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {text}
                </motion.div>
            ))}
        </motion.div>
    );
};

export { AnimatedText };
