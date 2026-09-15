import { Box } from "@mui/material";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeGrid({
    employees,
    onViewProfile,
    onDelete,
}) {
    return (
        <Box
            sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(2, minmax(0, 1fr))",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(2, minmax(0, 1fr))",
                    lg: "repeat(3, minmax(0, 1fr))",
                    xl: "repeat(4, minmax(0, 1fr))",
                },
                gap: {
                    xs: 1.5,
                    sm: 2,
                    md: 2.5,
                },
                alignItems: "stretch",
            }}
        >
            {employees.map((employee, index) => (
                <Box
                    key={employee.id}
                    sx={{
                        minWidth: 0,
                        width: "100%",
                    }}
                >
                    <EmployeeCard
                        employee={employee}
                        index={index}
                        onViewProfile={onViewProfile}
                        onDelete={onDelete}
                    />
                </Box>
            ))}
        </Box>
    );
}