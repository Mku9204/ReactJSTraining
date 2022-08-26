import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Vector from '../../assests/img/Vector.png'
const Footer = (props) => {
    return (
        <Box sx={{ paddingTop: '100px' }}>
            <Box sx={{ paddingTop: '80px', backgroundColor: '#19224D' }}>

                <Grid container spacing={2}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '60px',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}
                >
                    <Grid item xs={3}>
                        <CardMedia
                            component="img"

                            height='100%'
                            image={Vector}
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{

                            }}
                        >
                            <Typography sx={{ fontSize: 14, color: 'white', }}
                                gutterBottom>
                                DISCOVER DESTINATION
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>Bali</ListItemText>
                                    <ListItemText>Karimun Jawa</ListItemText>
                                    <ListItemText>Jepara</ListItemText>
                                    <ListItemText>Lombok</ListItemText>
                                    <ListItemText>Yogyakarta</ListItemText>
                                    <ListItemText>Flores</ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <Typography sx={{ fontSize: 14, color: 'white', }}
                                gutterBottom>
                                CONTACT US
                            </Typography>
                            <Box sx={{
                                color: 'white'
                            }}>
                                <address>
                                    <p>24 Shipley St.Arvada, CO 80003</p>
                                    <p>09378493810</p>
                                    <p>TravelBuddy@gmail.com</p>
                                </address>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 14, color: 'orange', }}
                                    gutterBottom>
                                    Social media
                                </Typography>
                                <FontAwesomeIcon icon='fab fa-facebook' />
                            </Box>
                        </Box>
                    </Grid>


                </Grid>
            </Box>
            <Box sx={{ backgroundColor: '#000B3E', display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: 14, color: 'white', }}
                    gutterBottom>
                    @Copyright 2022 TravelBuddy
                </Typography>
            </Box>
        </Box>
    )
}
export default Footer;