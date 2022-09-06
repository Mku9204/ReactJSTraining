import { Box } from "@mui/system";
import React from "react";
import NavBar from "../navbar/navbar";
import Card1 from "../card/card";
import banner_bg from '../../assests/img/banner_bg.png'
import C1 from '../../assests/img/c1.png'
import { Container, Grid, Typography } from "@mui/material";
import Vector from '../../assests/icons/Vector.svg'
import Form1 from "../util/form";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
    return (

        <Box>

            <Card1 image={banner_bg} height="400px">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                    <Typography variant="h2" gutterBottom sx={{
                        width: '418px',
                        height: '116px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '96px',
                        textAlign: 'center',
                        paddingBottom: '-30px',

                    }}>
                        Contact
                    </Typography>
                    <Typography variant="caption" gutterBottom sx={{
                        marginTop: '-40px'
                    }}>
                        Critics and recomendation for us
                    </Typography>
                </Box>

            </Card1 >
            <Container sx={{
                paddingTop: '100px',
            }}>
                <Card1 image={C1} height="600px" />
            </Container>


            <Box sx={{
                padding: '40px 100px'
            }}>
                <Typography variant="caption" gutterBottom sx={{

                    width: '199px',
                    height: '39px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '32px',
                    lineHeight: '39px',
                    color: '#041562',
                    paddingBottom: '30px',

                }}>
                    Get in touch
                </Typography>
                <Grid container spacing={2} columns={16} pt={3}>
                    <Grid item xs={8}>
                        <Form1 />
                    </Grid>
                    <Grid item xs={8}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                color: "black",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "auto",
                                    alignItems: "center",
                                    alignContent: "center",
                                    pl: "30px",
                                }}
                            >
                                <HomeIcon fontSize="large" />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "auto",
                                        alignItems: "left",
                                        alignContent: "center",

                                        pl: "30px",
                                    }}
                                >
                                    <Typography
                                        gutterBottom
                                        fontWeight="bold"
                                        letterSpacing="0.1em"
                                    >
                                        Yamuna nagar, Haryana
                                    </Typography>
                                    <Typography gutterBottom color="#606060">
                                        India
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "auto",
                                    alignItems: "center",
                                    alignContent: "center",
                                    mt: "15px",
                                    pl: "30px",
                                }}
                            >
                                <PhoneAndroidIcon fontSize="large" />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "auto",
                                        alignItems: "left",
                                        alignContent: "center",

                                        pl: "30px",
                                    }}
                                >
                                    <Typography
                                        gutterBottom
                                        fontWeight="bold"
                                        letterSpacing="0.1em"
                                    >
                                        (+91) 123981240
                                    </Typography>
                                    <Typography gutterBottom color="#606060">
                                        Mon to Fri 9am to 6pm
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "auto",
                                    alignItems: "center",
                                    alignContent: "center",
                                    mt: "15px",
                                    pl: "30px",
                                }}
                            >
                                <EmailIcon fontSize="large" />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "auto",
                                        alignItems: "left",
                                        alignContent: "center",

                                        pl: "30px",
                                    }}
                                >
                                    <Typography
                                        gutterBottom
                                        fontWeight="bold"
                                        letterSpacing="0.1em"
                                    >
                                        Travelbuddy@gmail.com

                                    </Typography>
                                    <Typography gutterBottom color="#606060">
                                        Send us your query anytime!
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Box >
    )
}
export default Contact;