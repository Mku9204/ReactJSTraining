import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import React from "react";

const Topvist = (props) => {
    return (
        <Container maxWidth={false}>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "36px",
                    lineHeight: "44px",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    color: "#041562",
                    paddingTop: '60px'
                }}
            >
                {props.text}
            </Typography>

            <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "22px",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    color: "#626262",
                    paddingBottom: '40px'
                }}
            >
                {props.text2}
            </Typography>
            <Grid container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={props.gCol}>
                    <Card sx={{
                    }}>
                        <CardMedia
                            component="img"
                            width='500px'
                            height='400px'
                            image={props.a1}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={props.gCol}>
                    <Card >
                        <CardMedia
                            component="img"
                            width='500px'
                            height='400px'
                            image={props.a2}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={props.gCol}>
                    <Card >
                        <CardMedia
                            component="img"
                            width='500px'
                            height='400px'
                            image={props.a3}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={props.gCol}>
                    <Card >
                        <CardMedia
                            component="img"
                            width='500px'
                            height='400px'
                            image={props.a4}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container >
    )
}
export default Topvist;