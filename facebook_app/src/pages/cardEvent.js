import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
    Avatar,
    AvatarGroup,
    CardActionArea,
    Box,
    Button,
} from "@mui/material";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";

export default function CardEvent(props) {
    return (
        <Card
            sx={{
                width: "100%",
                mt: 2,
                height: 170,
                maxWidth: "fit-content",
                backgroundImage: `url(${props.backgroundImageEvent})`,
                // https://source.unsplash.com/random?event

                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
                "&:hover": {
                    // color: "#1877F2",
                    // fontWeight: "bold",
                    transform: "scale(1.1)",
                },
            }}
        >
            <CardActionArea
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Box
                    container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                        color: "white",
                        height: "-webkit-fill-available",
                    }}
                >
                    <Box
                        sx={{
                            padding: "20px",
                            textAlign: "left",
                            height: "45%",
                            display: "flex",
                            flexDirection: "column",

                            // mb: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                // gap: "10px",
                                alignItems: "center",
                                fontFamily: "Montserrat",
                            }}
                        >
                            {props.eventlogo}
                            <Typography variant="header" fontSize="16px">
                                {props.eventhead}
                            </Typography>
                        </Box>
                        <Typography fontSize="14px" sx={{ fontFamily: "Montserrat" }}>
                            {props.eventtext}

                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                width: "60%",
                                backgroundColor: "#F0F8FF",
                                color: "#1877F2",
                                fontWeight: "bold",
                                fontSize: "11px",
                                textTransform: "capitalize",
                                fontFamily: "Montserrat",
                                padding: "4px 0px",
                                "&:hover": {
                                    bgcolor: "#1877F2",
                                    color: "#fff",
                                },
                            }}
                        >
                            {props.eventbutton}
                        </Button>
                    </Box>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: "#fff",
                            padding: "10px",
                            gap: "10px",
                            "&:last-child": {
                                paddingBottom: "10px",
                            },
                        }}
                    >
                        <AvatarGroup
                            max={3}
                            sx={{ justifyContent: "center", width: "100%" }}
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src="https://source.unsplash.com/random?face
"
                                sx={{ border: "2px solid #1877F2", width: 28, height: 28 }}
                            />
                            <Avatar
                                alt="Remy"
                                src="https://source.unsplash.com/random?people
"
                                sx={{ border: "2px solid #1877F2", width: 28, height: 28 }}
                            />
                            <Avatar
                                alt="Remy S"
                                src="https://source.unsplash.com/random?icon
"
                                sx={{ border: "2px solid #1877F2", width: 28, height: 28 }}
                            />
                        </AvatarGroup>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                color: "black",
                                width: "100%",
                                textAlign: "left",
                            }}
                        >
                            {props.children}
                        </Box>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
}