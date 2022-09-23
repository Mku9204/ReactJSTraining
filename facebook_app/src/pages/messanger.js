import { Autocomplete, Avatar, Box, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatInput from "../components/chat/input";
import Chatback from '../assests/chatback1.jpg'
import PopChat from "../components/chat/popchat";
import A1 from '../assests/j1.jpg'

const drawerWidth = 250;
const Messanger = () => {
    //const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const contact = ['Abhi', 'Sandeep', 'Aakash', 'Nikhil', 'Prabhat', 'Jassi', 'Vikas', 'Prabhat', 'Jassi', 'Vikas']

    const [chatMessage, setChatMessage] = useState([])

    const getChatMessage = (data) => {
        setChatMessage([...chatMessage, data])
    }
    console.log("message ------> ", chatMessage)
    const drawer = (
        <div>

            <List>
                {contact.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar alt={text} src="/static/images/avatar/1.jpg" />
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const permanentDrawerNav = (<div>

        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Toolbar sx={{
            backgroundColor: '#454287',
            display: { xs: 'none', sm: 'flex' },
            flexDirection: { xs: 'column', sm: 'row' },
            top: 'inherit',
            left: 'inherit',
            '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                top: 'inherit',
                left: 'inherit',
            },

        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'space-between',
                flexGrow: '1',
                gap: '10px',
                color: 'white',
            }}>
                <Avatar alt="" src={A1} sx={{ width: '30px', height: '30px' }} />
                <Typography variant="h8" noWrap component="div">
                    Abhi Saini
                </Typography>
            </Box>
            <IconButton
                //color="inherit"
                aria-label="open drawer"
                sx={{
                    color: 'white',
                }}
            >
                <MoreHorizIcon />
            </IconButton>

        </Toolbar>


        <Box sx={{
            padding: '5px'
        }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={contact.map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                        sx={{
                            '.MuiInputBase-root': {
                                borderRadius: '50px'
                            },
                            '.MuiOutlinedInput-root': {
                                padding: '0px'
                            },
                            display: { xs: 'none', sm: 'flex' },
                            top: 'inherit',
                            left: 'inherit',
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box', width: drawerWidth, top: 'inherit',
                                left: 'inherit',
                            },

                        }}
                    />)}
            /></Box>
    </div>);
    const temDrawerNav = (<div>

        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Toolbar sx={{
            backgroundColor: '#454287',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'space-between',
                flexGrow: '1',
                gap: '10px',
                color: 'white',
            }}>
                <Avatar alt="" src={A1} sx={{ width: '30px', height: '30px' }} />
                <Typography variant="h8" noWrap component="div">
                    Abhi Saini
                </Typography>
            </Box>
            <IconButton
                //color="inherit"
                aria-label="open drawer"
                sx={{
                    color: 'white',
                }}
            >
                <MoreHorizIcon />
            </IconButton>

        </Toolbar>
        <Box sx={{
            padding: '5px'
        }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={contact.map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                        sx={{
                            '.MuiInputBase-root': {
                                borderRadius: '50px'
                            },
                            '.MuiOutlinedInput-root': {
                                padding: '0px'
                            },
                            display: { xs: 'block', sm: 'none' },

                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },


                        }}
                    />)}
            /></Box>
    </div>);
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - 300px)` },
                        ml: { sm: `${drawerWidth}px` },
                        top: 'inherit',
                        right: 'inherit',
                        flexDirection: 'row',
                        justifyContent: ' space-between',
                        backgroundColor: '#9593c7',
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <Avatar alt="" src={A1} sx={{}} />
                            <Typography variant="h6" noWrap component="div">
                                Abhi Saini
                            </Typography>
                        </Box>

                    </Toolbar>
                    <Box sx={{
                        display: 'flex',
                        paddingRight: '70px',

                    }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <VideocamIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <PersonAddIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MoreHorizIcon />
                        </IconButton>
                    </Box>

                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
                    aria-label="mailbox folders"
                >
                    {permanentDrawerNav}

                    <Drawer
                        //container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },

                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >    {temDrawerNav}
                        {drawer}
                    </Drawer>

                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            top: 'inherit',
                            left: 'inherit',
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box', width: drawerWidth, top: 'inherit',
                                left: 'inherit',
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>

                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 'calc(100vh - 500px)',
                    backgroundColor: '#d7ebfc',
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                    },

                }}>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            padding: '0px 100px',
                            // backgroundImage: `url(${Chatback})`,
                            // backgroundRepeat: 'no-repeat',
                            // backgroundSize: 'cover',
                            height: 'calc(100vh - 190px)',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'scroll',
                            "::-webkit-scrollbar": {
                                display: "none",
                            },
                        }}
                    >
                        {/* <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}> */}

                        {chatMessage.map((text, index) => (
                            <Box key={index}
                                // sx={{
                                //     display: 'flex',
                                //     flexDirection: 'row-reverse',
                                //     alignItems: 'flex-end',
                                //     rowGap: '20px',

                                // }}
                                px={2} sx={{ height: "fit-content", p: 0, }}
                            >
                                <PopChat name={text} img={A1} />
                            </Box>
                        ))}
                        {/* </Toolbar> */}


                    </Box>
                    <Box sx={{

                    }}>
                        <ChatInput message={getChatMessage} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Messanger;