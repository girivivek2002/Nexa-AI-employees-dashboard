import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";

import EmployeeHeader from "../components/employees/EmployeeHeader";
import EmployeeToolbar from "../components/employees/EmployeeToolbar";
import EmployeeGrid from "../components/employees/EmployeeGrid";
import EmployeeProfileDialog from "../components/employees/EmployeeProfileDialog";
import EmptyState from "../components/employees/EmptyState";
import AddEmployeeDrawer from "../components/employees/AddEmployeeDrawer";

import useEmployees from "../hooks/useEmployees";

export default function Employees() {
    const {
        employees,
        addEmployee,
    } = useEmployees();

    const [search, setSearch] = useState("");
    const [department, setDepartment] =
        useState("All");

    const [selectedEmployee, setSelectedEmployee] =
        useState(null);

    const [addDrawerOpen, setAddDrawerOpen] =
        useState(false);

    const filteredEmployees = useMemo(() => {
        const searchValue =
            search.trim().toLowerCase();

        return employees.filter((employee) => {
            const matchesSearch =
                !searchValue ||
                employee.name
                    .toLowerCase()
                    .includes(searchValue) ||
                employee.role
                    .toLowerCase()
                    .includes(searchValue) ||
                employee.department
                    .toLowerCase()
                    .includes(searchValue);

            const matchesDepartment =
                department === "All" ||
                employee.department === department;

            return (
                matchesSearch &&
                matchesDepartment
            );
        });
    }, [
        employees,
        search,
        department,
    ]);

    const handleAddEmployee = async (employee) => {
        try {
            const newEmployee =
                addEmployee(employee);

            setAddDrawerOpen(false);

            toast.success(
                `${newEmployee.name} added successfully`
            );
        } catch (error) {
            toast.error(
                "Failed to save employee",
            )
            console.error(error);
        }
    };

    const clearFilters = () => {
        setSearch("");
        setDepartment("All");
    };

    return (
        <Box>
            <EmployeeHeader
                count={filteredEmployees.length}
                onAddEmployee={() =>
                    setAddDrawerOpen(true)
                }
            />

            <EmployeeToolbar
                search={search}
                department={department}
                onSearchChange={setSearch}
                onDepartmentChange={setDepartment}
            />

            {filteredEmployees.length > 0 ? (
                <EmployeeGrid
                    employees={filteredEmployees}
                    onViewProfile={setSelectedEmployee}
                />
            ) : (
                <EmptyState
                    onClear={clearFilters}
                />
            )}

            <EmployeeProfileDialog
                employee={selectedEmployee}
                open={Boolean(selectedEmployee)}
                onClose={() =>
                    setSelectedEmployee(null)
                }
            />

            <AddEmployeeDrawer
                open={addDrawerOpen}
                onClose={() =>
                    setAddDrawerOpen(false)
                }
                onAddEmployee={handleAddEmployee}
            />
        </Box>
    );
}