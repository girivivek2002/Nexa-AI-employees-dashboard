import {
    ContactMailOutlined,
    PeopleOutlineRounded,
    RequestQuoteOutlined,
} from "@mui/icons-material";

import {
    Box,
    Card,
    Tab,
    Tabs,
} from "@mui/material";

import AdminTable from "./AdminTable";

export default function AdminTabs({
    tab,
    setTab,
    contacts,
    users,
    quotes,
    onDeleteContact,
}) {
    const contactColumns = [
        {
            field: "name",
            label: "Name",
        },
        {
            field: "email",
            label: "Email",
        },
        {
            field: "phone",
            label: "Phone",
        },
        {
            field: "subject",
            label: "Subject",
        },
        {
            field: "message",
            label: "Message",
        },
    ];

    const userColumns = [
        {
            field: "name",
            label: "Name",
        },
        {
            field: "email",
            label: "Email",
        },
        {
            field: "role",
            label: "Role",
            type: "role",
        },
        {
            field: "createdAt",
            label: "Created",
            type: "date",
        },
    ];

    const quoteColumns = [
        {
            field: "name",
            label: "Name",
        },
        {
            field: "email",
            label: "Email",
        },
        {
            field: "phone",
            label: "Phone",
        },
        {
            field: "serviceRequired",
            label: "Service",
        },
        {
            field: "budget",
            label: "Budget",
        },
        {
            field: "message",
            label: "Message",
        },
    ];

    const tabConfig = [
        {
            label: "Contacts",
            icon: <ContactMailOutlined />,
            data: contacts,
            columns: contactColumns,
            emptyMessage:
                "No contact messages found.",
            deletable: true,
        },
        {
            label: "Users",
            icon: <PeopleOutlineRounded />,
            data: users,
            columns: userColumns,
            emptyMessage:
                "No users found.",
        },
        {
            label: "Quotes",
            icon: <RequestQuoteOutlined />,
            data: quotes,
            columns: quoteColumns,
            emptyMessage:
                "No quote requests found.",
        },
    ];

    const activeTab = tabConfig[tab];

    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: {
                    xs: 2.5,
                    sm: 3,
                },

                border: "1px solid",
                borderColor: "divider",

                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    borderBottom:
                        "1px solid",
                    borderColor:
                        "divider",

                    px: {
                        xs: 0.5,
                        sm: 1,
                        md: 2,
                    },
                }}
            >
                <Tabs
                    value={tab}
                    onChange={(_, value) =>
                        setTab(value)
                    }
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                        minHeight: {
                            xs: 58,
                            sm: 64,
                        },

                        "& .MuiTab-root":
                        {
                            minHeight: {
                                xs: 58,
                                sm: 64,
                            },

                            minWidth: {
                                xs: 110,
                                sm: 130,
                            },

                            textTransform:
                                "none",

                            fontWeight:
                                700,

                            fontSize: {
                                xs: "0.82rem",
                                sm: "0.9rem",
                            },

                            gap: 0.7,
                        },

                        "& .Mui-selected":
                        {
                            color:
                                "primary.main",
                        },
                    }}
                >
                    {tabConfig.map(
                        (item) => (
                            <Tab
                                key={
                                    item.label
                                }
                                icon={
                                    item.icon
                                }
                                iconPosition="start"
                                label={
                                    item.label
                                }
                            />
                        )
                    )}
                </Tabs>
            </Box>

            <AdminTable
                data={activeTab.data}
                columns={activeTab.columns}
                emptyMessage={
                    activeTab.emptyMessage
                }
                deletable={
                    activeTab.deletable
                }
                onDelete={
                    onDeleteContact
                }
            />
        </Card>
    );
}