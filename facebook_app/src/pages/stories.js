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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import S1 from '../assests/s1.png'
import { Box } from '@mui/material';


const Stories = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                gap: '20px',
            }}>
                <Card sx={{
                    maxWidth: 150,
                    backgroundImage: `url(${S1})`,
                    height: '200px',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                }}>

                    <Box sx={{
                        padding: '85px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Avatar alt="Remy Sharp" src={S1}
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
                    backgroundImage: `url(${S1})`,
                    height: '200px',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                }}>

                    <Box sx={{
                        padding: '85px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Avatar alt="Remy Sharp" src={S1}
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
                    backgroundImage: `url(${S1})`,
                    height: '200px',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                }}>

                    <Box sx={{
                        padding: '85px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Avatar alt="Remy Sharp" src={S1}
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
            </Box >
        </>
    );
}
export default Stories;