import { Box, Card, CardActionArea, CardMedia, Grid, Rating, Typography } from "@mui/material";
import { Container } from "@mui/system";

import React from "react";

const Topoffres = (props) => {
    return (
        <Container fixed>
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
                            height='300px'
                            image={props.a1}
                            alt="green iguana"
                        />
                    </Card>
                    <Box sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '170%',
                        /* or 31px */
                        letterSpacing: '0.02em',
                        color: '#626262',
                        paddingTop: '20px'
                    }}>
                        <Typography variant="subtitle1" gutterBottom
                            sx={{
                                color: '#000000',
                                width: '183px',
                                height: '29px',
                                fontSize: '24px',
                                lineHeight: '29px',
                                /* identical to box height */
                                letterSpacing: '0.05em',
                            }}
                        >
                            Transportation
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            All transportation cost we bear
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={props.gCol}>
                    <Card >
                        <CardMedia
                            component="img"
                            width='500px'
                            height='300px'
                            image={props.a2}
                            alt="green iguana"
                        />
                    </Card>
                    <Box sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '170%',
                        /* or 31px */
                        letterSpacing: '0.02em',
                        color: '#626262',
                        paddingTop: '20px'
                    }}>
                        <Typography variant="subtitle1" gutterBottom
                            sx={{
                                color: '#000000',
                                width: '183px',
                                height: '29px',
                                fontSize: '24px',
                                lineHeight: '29px',
                                /* identical to box height */
                                letterSpacing: '0.05em',
                            }}
                        >
                            Guidence
                        </Typography>

                        <Typography variant="body2" gutterBottom>
                            We offer the best guidence for you
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={props.gCol}>
                    <Card >
                        <CardMedia
                            component="img"
                            width='500px'
                            height='300px'
                            image={props.a3}
                            alt="green iguana"
                        />
                    </Card>
                    <Box sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '170%',
                        /* or 31px */
                        letterSpacing: '0.02em',
                        color: '#626262',
                        paddingTop: '20px'
                    }}>
                        <Typography variant="subtitle1" gutterBottom
                            sx={{
                                color: '#000000',
                                width: '183px',
                                height: '29px',
                                fontSize: '24px',
                                lineHeight: '29px',
                                /* identical to box height */
                                letterSpacing: '0.05em',
                            }}
                        >
                            Accomodation
                        </Typography>

                        <Typography variant="body2" gutterBottom>
                            Luxarious and comfortable
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Container >
    )
}
export default Topoffres;