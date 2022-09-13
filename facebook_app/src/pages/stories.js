import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import S1 from '../assests/s1.png'
import S8 from '../assests/j8.png'
import { Box } from '@mui/material';
import S4 from '../assests/j4.jpg'
import A1 from '../assests/j1.jpg'
import A4 from '../assests/j2.jpg'
import A2 from '../assests/j3.png'
import A3 from '../assests/j4.jpg'

const Stories = () => {
    return (
        <>
            <Box sx={{

            }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{


                    }}>
                        <CardHeader
                            sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '17px',
                                color: '#203758',
                                padding: '0px 10px'
                            }}
                            action={
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            }
                            title="Stories"
                            titleTypographyProps={{ variant: 'caption' }}
                        //subheader="September 14, 2016"
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        //gap: '10px',
                        padding: '5px 30px'
                    }}>
                        <Card sx={{
                            maxWidth: 150,
                            backgroundImage: `url(${S1})`,
                            height: '120px',
                            width: '100px',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                        }}>

                            <Box sx={{
                                padding: '50px 0px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}>
                                <Avatar alt="Remy Sharp" src={A1}
                                    sx={{ bgcolor: red[500] }} />
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '13px',
                                    color: '#FFFFFF',

                                }}>Abhishek Saini</Typography>
                            </Box>

                        </Card>
                        <Card sx={{
                            maxWidth: 150,
                            backgroundImage: `url(${S8})`,
                            height: '120px',
                            width: '100px',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                        }}>

                            <Box sx={{
                                padding: '50px 0px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}>
                                <Avatar alt="Remy Sharp" src={A2}
                                    sx={{ bgcolor: red[500] }} />
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '13px',
                                    color: '#FFFFFF',

                                }}>Abhishek Saini</Typography>
                            </Box>

                        </Card>
                        <Card sx={{
                            maxWidth: 150,
                            backgroundImage: `url(${S4})`,
                            height: '120px',
                            width: '100px',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                        }}>

                            <Box sx={{
                                padding: '50px 0px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}>
                                <Avatar alt="Remy Sharp" src={A3}
                                    sx={{ bgcolor: red[500] }} />
                                <Typography sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '13px',
                                    color: '#FFFFFF',
                                }}>Abhishek Saini</Typography>
                            </Box>

                        </Card>
                    </Box>
                </Card>

            </Box >
        </>
    );
}
export default Stories;