// ─────────────────────────────────────────────
// Department Colors
// ─────────────────────────────────────────────

export const departmentColors = {
    Engineering: "#7C5CFC",
    Sales: "#22C55E",
    Marketing: "#06B6D4",
    HR: "#F59E0B",
    Design: "#EC4899",
    Finance: "#8B5CF6",
    Manufacturing: "#F97316",
};


// ─────────────────────────────────────────────
// Build Dashboard Data
// ─────────────────────────────────────────────

export const getDashboardData = (employees = []) => {

    // ─────────────────────────────────────────
    // Workforce Stats
    // ─────────────────────────────────────────

    const totalEmployees = employees.length;

    const activeEmployees = employees.filter(
        (employee) => employee.status === "Active"
    ).length;

    const awayEmployees = employees.filter(
        (employee) => employee.status === "Away"
    ).length;

    const inactiveEmployees = employees.filter(
        (employee) => employee.status === "Inactive"
    ).length;

    const totalDepartments = new Set(
        employees.map(
            (employee) => employee.department
        )
    ).size;


    // ─────────────────────────────────────────
    // Department Distribution
    // ─────────────────────────────────────────

    const departmentData = Object.values(
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


    // ─────────────────────────────────────────
    // Workforce Distribution
    // ─────────────────────────────────────────

    const workforceDistribution = [
        {
            name: "Active",
            value: activeEmployees,
            color: "#22C55E",
        },
        {
            name: "Away",
            value: awayEmployees,
            color: "#F59E0B",
        },
        {
            name: "Inactive",
            value: inactiveEmployees,
            color: "#94A3B8",
        },
    ].filter(
        (item) => item.value > 0
    );


    // ─────────────────────────────────────────
    // Workforce Percentages
    // ─────────────────────────────────────────

    const activePercentage =
        totalEmployees > 0
            ? Math.round(
                (activeEmployees / totalEmployees) * 100
            )
            : 0;

    const awayPercentage =
        totalEmployees > 0
            ? Math.round(
                (awayEmployees / totalEmployees) * 100
            )
            : 0;


    // ─────────────────────────────────────────
    // Return
    // ─────────────────────────────────────────

    return {
        employees,
        totalEmployees,
        activeEmployees,
        awayEmployees,
        inactiveEmployees,
        totalDepartments,
        departmentData,
        workforceDistribution,
        activePercentage,
        awayPercentage,
    };
};