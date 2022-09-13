import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Divider, Typography } from '@mui/material';
import A1 from '../assests/j1.jpg'
import A4 from '../assests/j2.jpg'
import A2 from '../assests/j3.png'
import A3 from '../assests/j4.jpg'


const OnlineContact = () => {
    return (
        <List sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: ' 500',
            fontSize: '17px',
            lineHeight: '21px',
            color: ' #203758',
        }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={A1} />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src={A2} />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={A3} />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={A3} />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                />
            </ListItem>

        </List >
    );
}
export default OnlineContact;