import { Box, Stack } from "@mui/material";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import WorkforceChart from "../components/dashboard/WorkforceChart";
import WorkforceDistribution from "../components/dashboard/WorkforceDistribution";
import AIWorkforceInsight from "../components/dashboard/AIWorkforceInsight";
import RecentActivity from "../components/dashboard/RecentActivity";

const Dashboard = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minWidth: 0,
            }}
        >
            <Stack
                spacing={{
                    xs: 2.5,
                    sm: 3,
                    md: 4,
                }}
            >
                {/* Header */}
                <DashboardHeader />

                {/* Statistics */}
                <DashboardStats />

                {/* Workforce Charts */}
                <Stack
                    direction={{
                        xs: "column",
                        lg: "row",
                    }}
                    spacing={{
                        xs: 2.5,
                        md: 3,
                    }}
                    sx={{
                        width: "100%",
                        minWidth: 0,
                    }}
                >
                    <Box
                        sx={{
                            flex: 1.4,
                            minWidth: 0,
                            width: "100%",
                        }}
                    >
                        <WorkforceChart />
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            width: "100%",
                        }}
                    >
                        <WorkforceDistribution />
                    </Box>
                </Stack>

                {/* AI Insight + Recent Activity */}
                <Stack
                    direction={{
                        xs: "column",
                        md: "row",
                    }}
                    spacing={{
                        xs: 2.5,
                        md: 3,
                    }}
                    sx={{
                        width: "100%",
                        minWidth: 0,
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            width: "100%",
                        }}
                    >
                        <AIWorkforceInsight />
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            width: "100%",
                        }}
                    >
                        <RecentActivity />
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Dashboard;