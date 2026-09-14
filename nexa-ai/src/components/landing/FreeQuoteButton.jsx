import { useState } from "react";
import { Button } from "@mui/material";
import FreeQuoteModal from "./FreeQuoteModal";

export default function FreeQuoteButton({
    children = "Get a Free Quote",
    variant = "contained",
    ...props
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant={variant}
                onClick={() => setOpen(true)}
                {...props}
            >
                {children}
            </Button>

            <FreeQuoteModal
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}