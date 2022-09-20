import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import A1 from '../assests/j1.jpg'
import A4 from '../assests/j2.jpg'
import A2 from '../assests/j3.png'
import A3 from '../assests/j4.jpg'
import OnlineContact from './onlineContact';

const WhoFollow = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',

        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Box >
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '17px',
                            color: '#203758',
                        }}
                    >Who Follow you</Typography>
                </Box>
                <Box>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <Card sx={{
                    borderRadius: '9px'
                }}
                >
                    <Box sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0px 20px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}>
                            <Avatar alt="Travis Howard" src={A1} sizes='small' sx={{ width: 28, height: 28 }} />

                            <Box sx={{
                                display: 'flex'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: '13px',

                                }} gutterBottom>
                                    Abhishek Saini
                                </Typography>
                                <Box sx={{
                                    display: 'contents',
                                }}>
                                    <CheckCircleIcon color='primary' />
                                </Box>
                            </Box>
                        </Box>

                        <CardActions>
                            <Button size="small" color='primary'>Follow</Button>
                        </CardActions>
                    </Box>

                </Card >
            </Box>
        </Box>
    );
}
export default WhoFollow;