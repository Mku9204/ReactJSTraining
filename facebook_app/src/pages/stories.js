import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea } from "@mui/material";

export default function Stories(props) {
    return (
        <Card
            sx={{
                // maxWidth: 120,
                // maxHeight: 180,
                width: "125px",
                height: "140px",
                backgroundImage: `url(${props.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <CardActionArea
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        mb: 2,
                        gap: 1,
                    }}
                >
                    <Avatar
                        alt="Stories Avatar"
                        src={props.src}

                        sx={{ border: "2px solid #1877F2" }}
                    />
                    <Typography
                        color="white"
                    >
                        {props.children}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}