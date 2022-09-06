import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@mui/material/CardMedia';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

//const pages = ['Home', 'About', 'Packages', 'Places', 'Contact'];

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Packages', path: '/package' },
    { title: 'Places', path: '/places' },
    { title: 'Contact', path: '/contact' },

];



const settings = ['Home', 'About', 'Packages', 'Places', 'Contact'];

const NavBar = (props) => {
    const history = useHistory();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {

        setAnchorElNav(null)

    };

    const handlePath = (path) => {
        history.push(`${path}`)
    }

    return (
        <AppBar position="static"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'white',
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CardMedia
                        component="img"
                        image={props.vector}
                        alt="green iguana"
                        sx={{ height: '55px', width: '50px', display: { xs: 'none', md: 'flex', marginRight: '15px' } }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            color: '#041562'
                        }}
                    >
                        Travel Buddy
                    </Typography>

                    {/* start menu bars */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: 'black' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                                <MenuItem
                                    key={index}
                                    onClick={() => handlePath(page.path)}
                                >
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <CardMedia
                        component="img"
                        image={props.vector}
                        alt="green iguana"
                        sx={{ height: '55px', width: '52px', display: { xs: 'flex', md: 'none' } }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            color: '#041562'
                        }}
                    >
                        Travel Buddy
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => handlePath(page.path)}
                                sx={{ my: 2, display: 'block', color: '#696969' }}
                            >
                                {page.title}
                            </Button>

                        ))}

                    </Box>
                    <Button variant="contained" sx={{ backgroundColor: '#ff5733' }}>Book now</Button>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBar;
