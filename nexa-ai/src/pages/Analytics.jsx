import { Box, Stack } from "@mui/material";
import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import AnalyticsStats from "../components/analytics/AnalyticsStats";
import WorkforceTrend from "../components/analytics/WorkforceTrend";
import DepartmentBarChart from "../components/analytics/DepartmentBarChart";
import DepartmentPieChart from "../components/analytics/DepartmentPieChart";
import EmployeeStatusChart from "../components/analytics/EmployeeStatusChart";
import ExperienceDistribution from "../components/analytics/ExperienceDistribution";
import LocationAnalytics from "../components/analytics/LocationAnalytics";
import AnalyticsInsight from "../components/analytics/AnalyticsInsight";
import AnalyticsSummary from "../components/analytics/AnalyticsSummary";

const Analytics = () => {
    return (
        <Box sx={{ width: "100%", minWidth: 0 }}>
            <Stack spacing={{ xs: 2.5, sm: 3, md: 4 }}>
                <AnalyticsHeader />

                <AnalyticsStats />

                <WorkforceTrend />

                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    spacing={{ xs: 2.5, md: 3 }}
                >
                    <Box sx={{ flex: 1.4, minWidth: 0 }}>
                        <DepartmentBarChart />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <DepartmentPieChart />
                    </Box>
                </Stack>

                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    spacing={{ xs: 2.5, md: 3 }}
                >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <EmployeeStatusChart />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <ExperienceDistribution />
                    </Box>
                </Stack>

                <LocationAnalytics />

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 2.5, md: 3 }}
                >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <AnalyticsInsight />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <AnalyticsSummary />
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Analytics;