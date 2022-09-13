import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, Divider, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import A1 from '../assests/j1.jpg'
import A4 from '../assests/j2.jpg'
import A2 from '../assests/j3.png'
import A3 from '../assests/j4.jpg'

const WhoFollow = () => {
    return (
        <Card sx={{
            width: '100%'
        }}
        >
            <CardHeader
                sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '17px',
                    color: '#203758',
                    padding: '0px 5px',
                }}
                title="Who Follow You"
                titleTypographyProps={{
                    variant: 'caption'
                }}
                action={
                    <IconButton >
                        <MoreHorizIcon />
                    </IconButton>
                }
            />

            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',

            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                    <Avatar alt="Travis Howard" src={A1} sizes='small' />

                    <Box sx={{
                        display: 'flex'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '400',
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
            <Divider />
            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',

            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                    <Avatar alt="Travis Howard" src={A2} sizes='small' />

                    <Box sx={{
                        display: 'flex'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '400',
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
    );
}
export default WhoFollow;