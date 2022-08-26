import { AppBar, Card, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Subnav = () => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100%",
                marginTop: "-50px",
                backgroundColor: "inherit",

            }}
        >
            <List
                sx={{
                    textAlignLast: "center",
                    maxWidth: "70%",
                    width: " 100%",
                    backgroundColor: "white",
                    height: "130px",
                    margin: "auto",
                    border: '1px solid blue'
                }}
            >
                <ListItem disablePadding>
                    <ListItemButton sx={{ display: " flex", gap: "30px" }}>
                        <ListItemText primary="Hotel" sx={{ flex: "unset" }} />
                        <ListItemText primary="Ticket" sx={{ flex: "unset" }} />
                        <ListItemText primary="Place" sx={{ flex: "unset" }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>

    )
}
export default Subnav;