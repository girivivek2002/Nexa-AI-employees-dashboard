import { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { createAppTheme } from "./theme";

export default function AppTheme({ children }) {
    const mode = useSelector(
        (state) => state.settings.themeMode
    );

    const [systemMode, setSystemMode] = useState(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );

    useEffect(() => {
        if (mode !== "system") return;

        const mediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const handleChange = (event) => {
            setSystemMode(event.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [mode]);

    const activeMode =
        mode === "system" ? systemMode : mode;

    const theme = useMemo(
        () => createAppTheme(activeMode),
        [activeMode]
    );

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}