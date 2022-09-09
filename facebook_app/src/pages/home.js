import { Avatar, AvatarGroup, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import { border, Box } from "@mui/system";
import React from "react";
import OnlineContact from "./onlineContact";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Posts from "./posts";
import Stories from "./stories";
import SouthIcon from '@mui/icons-material/South';
import CardEvent from "./cardEvent";

const Home = () => {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                    padding: '15px',
                    backgroundColor: 'aliceblue'
                }}>
                <Grid item xs={3} sx={{}}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '25px 35px',
                        // border: '1px solid #1976d2',
                        boxShadow: '5px 3px 2px white',
                        backgroundColor: 'white',

                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItem: 'center'
                        }}>
                            <AvatarGroup max={4}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            </AvatarGroup>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            padding: '15px 0px',
                            textAlign: 'center',
                        }}>
                            <Typography sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '15px',
                                lineHeight: '18px',
                                color: '#203758',
                            }}>Facebook Demo Project</Typography>
                            <Typography sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '11px',
                                lineHeight: '13px',
                                color: '#788292',
                            }}>Active Now</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            gap: '20px',
                        }}>
                            <Button variant="outlined" startIcon={<CallIcon />} sx={{
                                fontSize: 'x-small',
                                borderRadius: '50px',
                                boxShadow: '1px 1px 0px, 2px 2px 0px',
                            }}>Group Call</Button>
                            <Button variant="outlined" startIcon={<VideocamIcon />} sx={{
                                fontSize: 'x-small',
                                borderRadius: '50px',
                                boxShadow: '1px 1px 0px, 2px 2px 0px',
                            }}>Video Call</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '15px 10px',
                            //border: '1px solid #1976d2',

                            // boxShadow: '1px 1px 0px #1976d2, 2px 2px 0px #1976d2',
                            marginTop: '10px',

                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: ' 500',
                                    fontSize: '17px',
                                    lineHeight: '21px',
                                    color: '#203758',
                                }}>Online Contacts</Typography>
                                <Button variant="text" startIcon={<MoreHorizIcon />} />
                            </Box>
                            <Box >
                                <OnlineContact />
                            </Box>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={5}>
                    <Box sx={{
                        //border: '1px solid black'
                    }}>
                        <Box sx={{
                            display: 'flex',

                        }}>
                            <TextField
                                sx={{
                                    padding: '20px',

                                }}
                                variant="outlined"
                                fullWidth
                                placeholder="fullWidth"
                                id="fullWidth"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="end">
                                            <SouthIcon />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </Box>
                        <Posts />
                    </Box>
                </Grid>
                <Grid item xs >
                    <Box>
                        <Stories />
                    </Box>
                    <Box>
                        <CardEvent />
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}
export default Home;