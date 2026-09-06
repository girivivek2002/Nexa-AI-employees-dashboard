import { CheckCircleRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Benefits = () => {
    const benefits = [
        "Real-time intelligence",
        "Natural language",
        "Secure by design",
        "Built for teams",
    ];

    return (
        <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: 0.4,
            }}
            sx={{
                mt: 3,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                spacing={{
                    xs: 1,
                    sm: 4,
                }}
                alignItems="center"
            >
                {benefits.map((item, index) => (
                    <MotionBox
                        key={item}
                        animate={{
                            y: [0, -2, 0],
                        }}
                        transition={{
                            duration: 3 + index * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.7,
                        }}
                    >
                        <CheckCircleRounded
                            sx={{
                                fontSize: 15,
                                color: "secondary.main",
                            }}
                        />

                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {item}
                        </Typography>
                    </MotionBox>
                ))}
            </Stack>
        </MotionBox>
    );
};

export default Benefits;