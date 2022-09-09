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
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { Box, Button } from '@mui/material';



const CardEvent = () => {

    return (
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <OndemandVideoIcon color='white' />
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '13px',
                    lineHeight: '20px',
                    color: '#FFFFFF',
                }}>Start watching with
                    friends & family.</Typography>
                <Button variant="contained" size='small'>Contained</Button>
            </Box>


        </Card>
    );
}
export default CardEvent;