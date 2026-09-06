import {
    SearchRounded,
    TuneRounded,
} from "@mui/icons-material";

import {
    Box,
    FormControl,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

export default function EmployeeToolbar({
    search,
    department,
    onSearchChange,
    onDepartmentChange,
}) {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 1.5,
                mb: 3,
                flexDirection: {
                    xs: "column",
                    sm: "row",
                },
            }}
        >
            <TextField
                fullWidth
                placeholder="Search employees..."
                value={search}
                onChange={(e) =>
                    onSearchChange(e.target.value)
                }
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRounded
                                sx={{
                                    color: "text.secondary",
                                }}
                            />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2.5,
                        background:
                            "rgba(255,255,255,0.025)",
                    },
                }}
            />

            <FormControl
                sx={{
                    minWidth: {
                        xs: "100%",
                        sm: 220,
                    },
                }}
            >
                <Select
                    value={department}
                    onChange={(e) =>
                        onDepartmentChange(e.target.value)
                    }
                    displayEmpty
                    startAdornment={
                        <TuneRounded
                            sx={{
                                mr: 1,
                                color: "text.secondary",
                            }}
                        />
                    }
                    sx={{
                        borderRadius: 2.5,
                        background:
                            "rgba(255,255,255,0.025)",
                    }}
                >
                    <MenuItem value="All">
                        All Departments
                    </MenuItem>

                    <MenuItem value="Engineering">
                        Engineering
                    </MenuItem>

                    <MenuItem value="Design">
                        Design
                    </MenuItem>

                    <MenuItem value="Marketing">
                        Marketing
                    </MenuItem>

                    <MenuItem value="Sales">
                        Sales
                    </MenuItem>

                    <MenuItem value="HR">
                        HR
                    </MenuItem>

                    <MenuItem value="Finance">
                        Finance
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}