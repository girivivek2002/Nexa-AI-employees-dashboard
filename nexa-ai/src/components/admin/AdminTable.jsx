import {
    DeleteOutlineRounded,
} from "@mui/icons-material";

import {
    Box,
    Chip,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@mui/material";

import AdminEmptyState from "./AdminEmptyState";

export default function AdminTable({
    data,
    columns,
    emptyMessage,
    deletable = false,
    onDelete,
}) {
    if (!data || data.length === 0) {
        return (
            <AdminEmptyState
                message={emptyMessage}
            />
        );
    }

    const renderValue = (
        row,
        column
    ) => {
        const value =
            row[column.field];

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {
            return "-";
        }

        if (column.type === "date") {
            return new Date(
                value
            ).toLocaleDateString(
                undefined,
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                }
            );
        }

        if (column.type === "role") {
            return (
                <Chip
                    label={value}
                    size="small"
                    color={
                        value === "admin"
                            ? "secondary"
                            : "default"
                    }
                    sx={{
                        fontWeight: 700,
                        textTransform:
                            "capitalize",
                    }}
                />
            );
        }

        return (
            <Typography
                variant="body2"
                sx={{
                    maxWidth:
                        column.field ===
                            "message"
                            ? 300
                            : 240,

                    overflow:
                        "hidden",

                    textOverflow:
                        "ellipsis",

                    whiteSpace:
                        "nowrap",
                }}
                title={String(value)}
            >
                {value}
            </Typography>
        );
    };

    return (
        <TableContainer
            sx={{
                width: "100%",

                overflowX: "auto",

                "&::-webkit-scrollbar":
                {
                    height: 6,
                },

                "&::-webkit-scrollbar-thumb":
                {
                    borderRadius: 10,
                    backgroundColor:
                        "rgba(0,0,0,0.15)",
                },
            }}
        >
            <Table
                sx={{
                    minWidth:
                        columns.length >
                            4
                            ? 900
                            : 650,
                }}
            >
                <TableHead>
                    <TableRow
                        sx={{
                            bgcolor:
                                "action.hover",
                        }}
                    >
                        {columns.map(
                            (column) => (
                                <TableCell
                                    key={
                                        column.field
                                    }
                                    sx={{
                                        fontWeight:
                                            800,

                                        whiteSpace:
                                            "nowrap",

                                        py: 2,
                                    }}
                                >
                                    {
                                        column.label
                                    }
                                </TableCell>
                            )
                        )}

                        {deletable && (
                            <TableCell
                                align="right"
                                sx={{
                                    fontWeight:
                                        800,
                                    width: 80,
                                }}
                            >
                                Action
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map(
                        (row) => (
                            <TableRow
                                key={
                                    row._id
                                }
                                hover
                                sx={{
                                    transition:
                                        "background-color 0.2s ease",

                                    "&:last-child td":
                                    {
                                        borderBottom:
                                            0,
                                    },
                                }}
                            >
                                {columns.map(
                                    (
                                        column
                                    ) => (
                                        <TableCell
                                            key={
                                                column.field
                                            }
                                            sx={{
                                                py: 2,
                                                verticalAlign:
                                                    "middle",
                                            }}
                                        >
                                            {renderValue(
                                                row,
                                                column
                                            )}
                                        </TableCell>
                                    )
                                )}

                                {deletable && (
                                    <TableCell align="right">
                                        <Tooltip
                                            title="Delete contact"
                                        >
                                            <IconButton
                                                color="error"
                                                size="small"
                                                onClick={() =>
                                                    onDelete(
                                                        row._id
                                                    )
                                                }
                                                sx={{
                                                    transition:
                                                        "all 0.2s ease",

                                                    "&:hover":
                                                    {
                                                        transform:
                                                            "scale(1.1)",

                                                        bgcolor:
                                                            "error.lighter",
                                                    },
                                                }}
                                            >
                                                <DeleteOutlineRounded />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                )}
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}