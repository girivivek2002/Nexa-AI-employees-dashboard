import { Box, Grid } from "@mui/material";

import LandingBackground from "../components/landing/LandingBackground";
import LandingNavbar from "../components/landing/LandingNavbar";
import HeroSection from "../components/landing/HeroSection";
import AIPreview from "../components/landing/AIPreview";
import FeatureMarquee from "../components/landing/FeatureMarquee";
import IntelligenceSection from "../components/landing/IntelligenceSection";
import BottomCTA from "../components/landing/BottomCTA";
import ContactSection from "../components/landing/ContactSection";

import LandingFooter from "../components/landing/LandingFooter";


const Landing = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                overflow: "hidden",
                position: "relative",

                bgcolor: "background.default",
                color: "text.primary",

                backgroundImage: (theme) =>
                    theme.palette.mode === "dark"
                        ? `
                            radial-gradient(
                                circle at 10% 10%,
                                rgba(124,92,252,0.20),
                                transparent 28%
                            ),
                            radial-gradient(
                                circle at 90% 20%,
                                rgba(34,211,238,0.12),
                                transparent 25%
                            )
                        `
                        : `
                            radial-gradient(
                                circle at 10% 10%,
                                rgba(124,92,252,0.10),
                                transparent 28%
                            ),
                            radial-gradient(
                                circle at 90% 20%,
                                rgba(34,211,238,0.08),
                                transparent 25%
                            )
                        `,

                transition:
                    "background-color 0.3s ease, color 0.3s ease",
            }}
        >
            <LandingBackground />

            <LandingNavbar />

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: "94%",
                            sm: "92%",
                            lg: "90%",
                        },
                        maxWidth: "1500px",
                        mx: "auto",
                        py: {
                            xs: 7,
                            md: 5,
                        },
                    }}
                >
                    <Grid
                        container
                        spacing={{
                            xs: 6,
                            md: 8,
                        }}
                        alignItems="center"
                    >
                        <Grid item xs={12} md={6}>
                            <HeroSection />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <AIPreview />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "none",
                    overflow: "hidden",
                }}
            >
                <FeatureMarquee />
            </Box>

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                }}
            >
                <IntelligenceSection />
            </Box>

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                }}
            >
                <BottomCTA />

            </Box>
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                }}
            >


            </Box>

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                }}
            >
                <ContactSection />
            </Box>
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                }}
            >
                <LandingFooter />

            </Box>


        </Box>
    );
};

export default Landing;