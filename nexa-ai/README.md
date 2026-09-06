import { employees } from "./employees";

const departmentColors = {
Engineering: "#7C5CFC",
Sales: "#22C55E",
Marketing: "#06B6D4",
HR: "#F59E0B",
Design: "#EC4899",
Finance: "#8B5CF6",
};

export const departmentData = Object.values(
employees.reduce((acc, employee) => {
const department = employee.department;

        if (!acc[department]) {
            acc[department] = {
                name: department,
                value: 0,
                color:
                    departmentColors[department] ||
                    "#7C5CFC",
            };
        }

        acc[department].value += 1;

        return acc;
    }, {})

);

export const totalEmployees = employees.length;

export const activeEmployees = employees.filter(
(employee) => employee.status === "Active"
).length;

export const totalDepartments = new Set(
employees.map((employee) => employee.department)
).size;
