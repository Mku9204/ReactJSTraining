import { Avatar, AvatarGroup, Button, Card, Chip, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import { border, Box } from "@mui/system";
import React from "react";
import OnlineContact from "./onlineContact";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Posts from "./posts";
import Stories from "./stories";
import NorthIcon from '@mui/icons-material/North';
import CardEvent from "./cardEvent";
import WhoFollow from "./whoFllow";
import Privacy from "./privacy";
import A1 from '../assests/j1.jpg'
import A4 from '../assests/j2.jpg'
import A2 from '../assests/j3.png'
import A3 from '../assests/j4.jpg'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CircleIcon from '@mui/icons-material/Circle';

const Home = () => {
    return (
        <>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                    padding: '5px 10px',
                    backgroundColor: 'slategrey'
                }}>
                <Grid item xs={3} sx={{}}>
                    <Card>
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
                                    <Avatar alt="Remy Sharp" src={A1} />
                                    <Avatar alt="Travis Howard" src={A2} />
                                    <Avatar alt="Cindy Baker" src={A3} />
                                    <Avatar alt="Agnes Walker" src={A4} />
                                    <Avatar alt="Trevor Henderson" src={A1} />
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
                                <Chip
                                    label="Group Call"
                                    // onClick={handleClick}
                                    // onDelete={handleDelete}
                                    icon={<CallIcon />}
                                    color='primary'
                                />
                                <Chip
                                    label="Video Call"
                                    // onClick={handleClick}
                                    // onDelete={handleDelete}
                                    icon={<VideocamIcon />}
                                    color='primary'
                                />
                            </Box>
                        </Box>
                    </Card>
                    {/* online code */}
                    <Box sx={
                        {
                            paddingTop: '10px'
                        }
                    }>
                        <Card>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
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
                                        display: 'flex',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>Online Contacts{<CircleIcon color="success" fontSize='small' />}</Typography>
                                    <Button variant="text" startIcon={<MoreHorizIcon />} />
                                </Box>
                                <Box >
                                    <OnlineContact />
                                </Box>
                            </Box>
                        </Card>

                    </Box>

                </Grid>
                <Grid item xs={5}>
                    <Box sx={{

                    }}>
                        <Box sx={{
                            display: 'flex',
                            padding: '20px 0px'
                        }}>
                            <TextField
                                sx={{
                                    // padding: '20px',
                                    textAlign: 'center',
                                    backgroundColor: 'white',
                                }}

                                variant="outlined"
                                fullWidth
                                placeholder="What’s on you mind, Paul?"
                                id="search"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <NorthIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box sx={{
                            height: '410px',
                            overflowY: 'scroll'
                        }}>
                            <Posts />

                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={4} sx={{

                }}>
                    <Box sx={{

                    }}>
                        <Box>

                            <Stories />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            gap: '10px',
                        }}>
                            <CardEvent
                                backgroundImageEvent={A1}
                                eventlogo={<TheaterComedyIcon />}
                                eventhead="Pop Corn"
                                eventtext="Start watching with
                             friends & family."
                                eventbutton="Watch Now" >
                                35 friends watching now
                            </CardEvent>
                            <CardEvent backgroundImageEvent={A2} eventlogo={<CelebrationIcon />} eventhead="Event" eventtext="Join events near you for free." eventbutton="Exploer All" >
                                35 friends watching now
                            </CardEvent>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            padding: '10px 0px',
                        }}>
                            <WhoFollow />
                        </Box>
                        <Box>
                            <Privacy />
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}
export default Home;