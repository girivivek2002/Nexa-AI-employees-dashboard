import {
    ContactMailOutlined,
    PeopleOutlineRounded,
    RequestQuoteOutlined,
} from "@mui/icons-material";

import {
    Box,
    Card,
    CardContent,
    Grid,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";

const stats = [
    {
        key: "users",
        label: "Registered Users",
        icon: PeopleOutlineRounded,
        description:
            "Total accounts registered",
    },
    {
        key: "contacts",
        label: "Contact Messages",
        icon: ContactMailOutlined,
        description:
            "Messages waiting for review",
    },
    {
        key: "quotes",
        label: "Quote Requests",
        icon: RequestQuoteOutlined,
        description:
            "Service requests received",
    },
];

export default function AdminStats({
    users,
    contacts,
    quotes,
    loading,
}) {
    const values = {
        users,
        contacts,
        quotes,
    };

    return (
        <Grid
            container
            spacing={{
                xs: 1.5,
                sm: 2,
                md: 2.5,
            }}
            sx={{
                mb: {
                    xs: 3,
                    md: 4,
                },
            }}
        >
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <Grid
                        key={stat.key}
                        size={{
                            xs: 12,
                            sm: 4,
                        }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                height: "100%",

                                borderRadius: 3,

                                border:
                                    "1px solid",
                                borderColor:
                                    "divider",

                                position:
                                    "relative",
                                overflow:
                                    "hidden",

                                transition:
                                    "all 0.3s ease",

                                "&:hover": {
                                    transform:
                                        "translateY(-5px)",

                                    boxShadow:
                                        "0 16px 35px rgba(0,0,0,0.08)",

                                    borderColor:
                                        "primary.main",
                                },

                                "&::after": {
                                    content:
                                        '""',

                                    position:
                                        "absolute",

                                    width: 100,
                                    height: 100,

                                    borderRadius:
                                        "50%",

                                    background:
                                        "rgba(99,102,241,0.08)",

                                    filter:
                                        "blur(30px)",

                                    right:
                                        -35,
                                    top:
                                        -35,
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    p: {
                                        xs: 2,
                                        sm: 2.5,
                                        md: 3,
                                    },

                                    "&:last-child":
                                    {
                                        pb: {
                                            xs: 2,
                                            sm: 2.5,
                                            md: 3,
                                        },
                                    },
                                }}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="space-between"
                                >
                                    <Box
                                        sx={{
                                            width: 46,
                                            height: 46,

                                            display:
                                                "flex",
                                            alignItems:
                                                "center",
                                            justifyContent:
                                                "center",

                                            borderRadius:
                                                2.5,

                                            bgcolor:
                                                "primary.main",

                                            color:
                                                "primary.contrastText",

                                            boxShadow:
                                                "0 8px 20px rgba(99,102,241,0.25)",
                                        }}
                                    >
                                        <Icon />
                                    </Box>
                                </Stack>

                                <Box sx={{ mt: 2 }}>
                                    {loading ? (
                                        <>
                                            <Skeleton
                                                width={
                                                    80
                                                }
                                                height={
                                                    45
                                                }
                                            />

                                            <Skeleton
                                                width={
                                                    150
                                                }
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <Typography
                                                sx={{
                                                    fontSize:
                                                    {
                                                        xs: "1.8rem",
                                                        sm: "2rem",
                                                    },

                                                    fontWeight:
                                                        800,

                                                    lineHeight:
                                                        1.2,
                                                }}
                                            >
                                                {
                                                    values[
                                                    stat.key
                                                    ]
                                                }
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontWeight:
                                                        700,

                                                    mt: 0.5,
                                                }}
                                            >
                                                {
                                                    stat.label
                                                }
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    mt: 0.5,
                                                }}
                                            >
                                                {
                                                    stat.description
                                                }
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}