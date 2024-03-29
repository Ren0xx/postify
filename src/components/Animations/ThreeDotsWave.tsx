import { Box } from "@mui/material";
import { motion } from "framer-motion";

const loadingContainer = {
    width: "4rem",
    height: "4rem",
    display: "flex",
    justifyContent: "space-around",
};

const loadingCircle = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "#000000",
    borderRadius: "0.5rem",
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const loadingCircleVariants = {
    start: {
        y: "50%",
    },
    end: {
        y: "150%",
    },
};

const loadingCircleTransition = {
    duration: 0.2,
    yoyo: Infinity,
    ease: "easeInOut",
};

export default function ThreeDotsWave() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "50vh"
            }}>
            <motion.div
                style={loadingContainer}
                variants={loadingContainerVariants}
                initial='start'
                animate='end'>
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
            </motion.div>
        </Box>
    );
}
