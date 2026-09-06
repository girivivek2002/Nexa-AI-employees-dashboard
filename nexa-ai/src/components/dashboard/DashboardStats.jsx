import {
    GroupsRounded,
    PersonRounded,
    QueryStatsRounded,
    BusinessRounded,
} from "@mui/icons-material";

import { Box } from "@mui/material";

import { getDashboardData } from "../../data/dashboardData.js";
import useEmployees from "../../hooks/useEmployees";

import StatCard from "./StatCard";

export default function DashboardStats() {
    const { employees } = useEmployees();

    const {
        totalEmployees,
        activeEmployees,
        totalDepartments,
    } = getDashboardData(employees);

    const stats = [
        {
            title: "Total Employees",
            value: totalEmployees,
            change: "+12.5%",
            subtitle: "Total workforce",
            icon: GroupsRounded,
            accent: "#7C5CFC",
        },
        {
            title: "Active Employees",
            value: activeEmployees,
            change: "+8.2%",
            subtitle: "Currently active",
            icon: PersonRounded,
            accent: "#22C55E",
        },
        {
            title: "AI Queries",
            value: "1,284",
            change: "+24.8%",
            subtitle: "This month",
            icon: QueryStatsRounded,
            accent: "#06B6D4",
        },
        {
            title: "Departments",
            value: totalDepartments,
            change: "+2",
            subtitle: "Across organization",
            icon: BusinessRounded,
            accent: "#F59E0B",
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                minWidth: 0,

                display: "grid",

                gridTemplateColumns: {
                    xs: "repeat(2, minmax(0, 1fr))",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(2, minmax(0, 1fr))",
                    lg: "repeat(4, minmax(0, 1fr))",
                },

                gap: {
                    xs: 1.5,
                    sm: 2,
                    md: 2.5,
                },
            }}
        >
            {stats.map((stat, index) => (
                <StatCard
                    key={stat.title}
                    icon={stat.icon}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    subtitle={stat.subtitle}
                    accent={stat.accent}
                    delay={index * 0.08}
                />
            ))}
        </Box>
    );
}