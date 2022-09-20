import { Avatar, AvatarGroup, Button, Card, Chip, CircularProgress, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import { border, Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import OnlineContact from "./onlineContact";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Posts from "./posts";
import Stories from "./stories";
import CardEvent from "./cardEvent";
import WhoFollow from "./whoFllow";
import Privacy from "./privacy";
import A1 from '../assests/j1.jpg'
import A4 from '../assests/j2.jpg'
import A2 from '../assests/j3.png'
import A3 from '../assests/j4.jpg'
import A5 from '../assests/s1.png'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CircleIcon from '@mui/icons-material/Circle';
import PostInput from "./postInput";
import PostInput2 from "./postInput2";
import { useGetPosts } from "../hooks/getAllPostHook";



const Home = () => {
    const { getPosts, posts, isLoading } = useGetPosts();

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                    padding: '10px',
                    backgroundColor: '#E5E5E5',
                    height: 'calc(100vh - 68px)',
                }}>
                <Grid item xs={3} sx={{ height: '100%', }}>
                    <Box sx={{ paddingBottom: '35px' }}>
                        <Card sx={{
                            borderRadius: '9px'
                        }}>
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
                                        size='small'
                                    />
                                    <Chip
                                        label="Video Call"
                                        // onClick={handleClick}
                                        // onDelete={handleDelete}
                                        icon={<VideocamIcon />}
                                        color='primary'
                                        size='small'
                                    />
                                </Box>
                            </Box>
                        </Card></Box>

                    {/* online code */}
                    <Box sx={{
                        // paddingTop: '20px',
                        // paddingBottom: "15px",
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>

                            <Typography sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: ' 500',
                                fontSize: '17px',
                                color: '#203758',
                                display: 'flex',
                                alignContent: 'center',
                                alignItems: 'center',
                            }}>Online Contacts
                                <Box sx={{
                                    paddingLeft: '15px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>{<CircleIcon color="success" fontSize='1rem' sx={{}} />}
                                </Box>
                            </Typography>
                            <Button variant="text" startIcon={<MoreHorizIcon />} />
                        </Box>
                        <Card sx={{
                            borderRadius: '9px'
                        }}>
                            <Box >
                                <OnlineContact />
                            </Box>
                        </Card>
                    </Box>

                </Grid>



                {/* post start */}
                <Grid item xs={5} sx={{
                    height: 'calc(100vh - 94px)',
                }}>
                    <Box sx={{
                        //height: 'calc(100vh - px)',
                    }}>
                        {/* <PostInput getData={postData} /> */}
                        <PostInput2 />
                        <Box sx={{
                            height: 'calc(100vh - 180px)',
                            overflowY: 'scroll',
                            "::-webkit-scrollbar": {
                                display: "none",
                            },
                        }}>
                            {isLoading && <Box sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <CircularProgress color='primary' />
                            </Box>}
                            {posts.map((items, index) => (
                                <Posts
                                    key={index}
                                    text={items.text}
                                    url={items.uploadFile}
                                    profile={items.profile}
                                    time={items.createAt}
                                    name={items.user.firstName}
                                    lastname={items.user.lastName}
                                />
                            ))}
                            {/* <Posts post={post} /> */}
                            {/* <Posts />
                            <Posts /> */}
                        </Box>
                    </Box>

                </Grid>
                {/* post end*/}

                <Grid item xs sx={{
                    height: 'calc(100vh - 109px)',

                }}>

                    <Box sx={{
                        height: '100%'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <Typography>Stories</Typography>
                            <Button variant="text" startIcon={<MoreHorizIcon />} />

                        </Box>
                        <Box sx={{
                            display: 'flex',
                            gap: '10px',
                        }}>
                            <Stories backgroundImage={A5} src={A1} children="Abhishek" />
                            <Stories backgroundImage={A5} src={A1} children="Abhishek" />
                            <Stories backgroundImage={A5} src={A1} children="Abhishek" />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            gap: '10px',
                            paddingTop: '15px',
                            justifyContent: 'center',
                            height: '34%'
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
                            // display: 'flex',
                            padding: '7px 0px',
                        }}>
                            <WhoFollow />
                        </Box>
                        <Box>
                            <Privacy />
                        </Box>
                    </Box>
                </Grid>

            </Grid >
        </>
    )
}
export default Home;