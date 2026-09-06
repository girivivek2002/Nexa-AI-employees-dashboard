import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const LandingBackground = () => {
    return (
        <>
            <MotionBox
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: "absolute",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(124,92,252,0.3), transparent 70%)",
                    top: 100,
                    left: -150,
                    pointerEvents: "none",
                }}
            />

            <MotionBox
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: "absolute",
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)",
                    right: -200,
                    top: 250,
                    pointerEvents: "none",
                }}
            />
        </>
    );
};

export default LandingBackground;