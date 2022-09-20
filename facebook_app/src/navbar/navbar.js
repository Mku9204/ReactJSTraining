import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { MenuItem } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import A1 from '../../src/assests/a1.jpg'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import firebaseConfig from '../util/firebase';
import LocalStorageService from '../util/localStorageService';
const auth = getAuth();

//'Profile', 'Account', 'Dashboard',
//const pages = ['Home', 'Notification', 'Watch', 'Market Palce', 'Group', 'Messanger', 'Live', 'Login'];
const settings = ['Logout'];
const pages = [
    { title: "Home", path: "/home" },
    { title: "Notification", path: "/notification" },
    { title: "Watch", path: "/watch" },
    { title: "Market Palce", path: "/marketpalce" },
    { title: "Group", path: "/group" },
    { title: "Messanger", path: "/messanger" },
    { title: "live", path: "/live" },
];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const navigate = useNavigate();
    const handlePath = (path) => {
        navigate(`${path}`);
    };

    const Signout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.


            navigate("/")
            LocalStorageService.clearToken()
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            {/* <MenuIcon /> */}
                            <FacebookRoundedIcon fontSize='large'
                                sx={{
                                    color: '#1877F2',
                                }}
                            />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Home nav bar */}

                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <FacebookRoundedIcon fontSize='large'
                                sx={{
                                    color: '#1877F2',
                                    display: { xs: 'none', md: 'flex' },
                                }}
                            />
                        </IconButton>
                    </Box>
                    {/* full width navbar start */}

                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                    }}>

                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => handlePath(page.path)}
                                sx={{
                                    my: 2,
                                    display: 'block',
                                    color: '#788292',
                                    fontSize: '13px',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    {/* full width navbar end */}
                    <Box sx={{
                        color: 'black'
                    }}>
                        <IconButton size="large" aria-label="search" color="inherit">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={A1} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={Signout}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;
