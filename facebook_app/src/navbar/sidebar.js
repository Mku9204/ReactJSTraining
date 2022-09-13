import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { IconButton } from '@mui/material';

const drawerWidth = 260;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: 'calc(64px + 20px)',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    return (
        <Box sx={{
            display: 'flex',
            // marginTop: '-10px',
            // height: '100vh'
        }} >

            <Drawer variant="permanent" open={open} sx={{
                "& .MuiDrawer-paper": {
                    // width: drawerWidth,
                    boxSizing: "border-box",
                    position: "relative",
                },
            }}>
                {/* <DrawerHeader >
                    <FacebookRoundedIcon fontSize='large'
                        sx={{
                            color: '#1877F2',
                            // display: { xs: 'none', md: 'flex' },
                        }}
                    />
                </DrawerHeader> */}
                <List >
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LocalActivityIcon />
                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <BookmarksIcon />
                            </ListItemIcon>
                        </ ListItemButton>


                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }} >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <VideogameAssetIcon />
                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <SubscriptionsIcon />
                            </ListItemIcon>
                        </ ListItemButton>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <HelpIcon />
                            </ListItemIcon>
                        </ ListItemButton>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <SettingsIcon />
                            </ListItemIcon>
                        </ ListItemButton>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <GridViewRoundedIcon />
                            </ListItemIcon>
                        </ ListItemButton>

                    </ListItem>
                </List>
                <List sx={{
                    fontSize: "xx-large",
                }}>
                    <ListItem>
                        <IconButton
                            variant="contained"
                            FontSize="large"
                            aria-label="search"
                            fill="#F0F7FF"
                            sx={{
                                my: 4,
                                color: "#1877F2",
                            }}
                        >
                            <AddCircleOutlineRoundedIcon />
                        </IconButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box >
    );
}
