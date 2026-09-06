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
// Build Analytics Data
// ─────────────────────────────────────────────

export const getAnalyticsData = (employees = []) => {

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

    const totalLocations = new Set(
        employees.map(
            (employee) => employee.location
        )
    ).size;


    // ─────────────────────────────────────────
    // Department Analytics
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
    ).sort(
        (a, b) => b.value - a.value
    );


    // ─────────────────────────────────────────
    // Employee Status Analytics
    // ─────────────────────────────────────────

    const statusData = [
        {
            name: "Active",
            value: activeEmployees,
        },
        {
            name: "Away",
            value: awayEmployees,
        },
        {
            name: "Inactive",
            value: inactiveEmployees,
        },
    ].filter(
        (item) => item.value > 0
    );


    // ─────────────────────────────────────────
    // Location Analytics
    // ─────────────────────────────────────────

    const locationData = Object.values(
        employees.reduce((acc, employee) => {

            const location = employee.location;

            if (!acc[location]) {
                acc[location] = {
                    name: location,
                    value: 0,
                };
            }

            acc[location].value += 1;

            return acc;

        }, {})
    ).sort(
        (a, b) => b.value - a.value
    );


    // ─────────────────────────────────────────
    // Experience Analytics
    // ─────────────────────────────────────────

    const experienceData = Object.values(
        employees.reduce((acc, employee) => {

            const experience = employee.experience;

            if (!acc[experience]) {
                acc[experience] = {
                    name: experience,
                    value: 0,
                };
            }

            acc[experience].value += 1;

            return acc;

        }, {})
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
    // Largest Department
    // ─────────────────────────────────────────

    const largestDepartment =
        departmentData.length > 0
            ? departmentData[0]
            : {
                name: "N/A",
                value: 0,
            };

    const largestDepartmentPercentage =
        totalEmployees > 0
            ? Math.round(
                (largestDepartment.value /
                    totalEmployees) *
                100
            )
            : 0;


    // ─────────────────────────────────────────
    // Return
    // ─────────────────────────────────────────

    return {
        totalEmployees,
        activeEmployees,
        awayEmployees,
        inactiveEmployees,
        totalDepartments,
        totalLocations,

        departmentData,
        statusData,
        locationData,
        experienceData,

        activePercentage,
        awayPercentage,

        largestDepartment,
        largestDepartmentPercentage,
    };
};