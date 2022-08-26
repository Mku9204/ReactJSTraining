import {
    AppBar,
    Card,
    Container,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SelectTextFields from "../util/select";

const Subnav = () => {
    return (
        <Container
            sx={{
                width: "100%",
                maxWidth: "100%",
                marginTop: "-50px",
                backgroundColor: "inherit",
            }}
        >
            <Box
                sx={{
                    border: "1px solid blue",
                    margin: "auto",
                    backgroundColor: "white",
                    maxWidth: "95%",
                    width: " 100%",
                }}
            >
                <List
                    sx={
                        {
                            // textAlignLast: "center",
                            // maxWidth: "95%",
                            // width: " 100%",
                            // backgroundColor: "white",
                            // height: "130px",
                            // margin: "auto",
                            // border: "1px solid blue",
                        }
                    }
                >
                    <ListItem
                        disablePadding
                        sx={{
                            display: " flex",
                            gap: "30px",
                            flexWrap: "wrap",
                            height: "50px",
                            width: "fit-content",
                        }}
                    >
                        <ListItemButton
                            sx={{
                                ml: "20px",
                                display: " flex",
                                "&:hover": {
                                    borderBottom: "2px solid blue",
                                    paddingBottom: "6px",
                                },
                            }}
                        >
                            <Link href="#" underline="none">
                                <ListItemText
                                    primary="Hotel"
                                    sx={{
                                        flex: "unset",
                                    }}
                                />
                            </Link>
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                ml: "20px",
                                display: " flex",
                                "&:hover": {
                                    borderBottom: "2px solid blue",
                                    paddingBottom: "6px",
                                },
                            }}
                        >
                            <Link href="#" underline="none">
                                <ListItemText primary="Ticket" sx={{ flex: "unset" }} />
                            </Link>
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                ml: "20px",
                                display: " flex",
                                "&:hover": {
                                    borderBottom: "2px solid blue",
                                    paddingBottom: "6px",
                                },
                            }}
                        >
                            <Link href="#" underline="none">
                                <ListItemText primary="Place" sx={{ flex: "unset" }} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>
                <SelectTextFields />
            </Box>
        </Container>
    );
};
export default Subnav;