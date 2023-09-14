import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react";

const pageTransition = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function PageTransition({ children }: { children: ReactNode }) {
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                initial='initial'
                animate='animate'
                exit='exit'
                variants={pageTransition}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export { PageTransition };
