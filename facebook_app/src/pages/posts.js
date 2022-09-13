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
import A1 from '../assests/a1.jpg'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Badge } from '@mui/material';



const Posts = () => {

    const [count, setCount] = React.useState(1);


    return (
        <>
            <Card sx={{ maxWidth: 445, padding: '25px' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="120"
                    image={A1}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '14px',
                            color: '#203758',
                        }}
                    >
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: 'end', paddingTop: '-10px', }}>
                    <IconButton aria-label="Like" size="small">
                        <Badge color="primary" badgeContent={count}>
                            <ThumbUpIcon onClick={() => {
                                setCount(count + 1);
                            }} />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="chat" size="small">
                        <Badge color="primary" badgeContent={3}>
                            <ChatBubbleIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="share" size="small">
                        <ShareIcon />
                    </IconButton>
                </CardActions>

            </Card>
            <Card sx={{ maxWidth: 445, padding: '25px' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="120"
                    image={A1}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '14px',
                            color: '#203758',
                        }}
                    >
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: 'end', paddingTop: '-10px', }}>
                    <IconButton aria-label="Like" size="small">
                        <Badge color="primary" badgeContent={count}>
                            <ThumbUpIcon onClick={() => {
                                setCount(count + 1);
                            }} />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="chat" size="small">
                        <Badge color="primary" badgeContent={3}>
                            <ChatBubbleIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="share" size="small">
                        <ShareIcon />
                    </IconButton>
                </CardActions>

            </Card>
        </>
    );
}
export default Posts;