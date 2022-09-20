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
            fontSize: '13px',
            color: ' #788292',
            // padding: '0px'
        }}>
            <ListItem alignItems="flex-start" sx={{
                padding: '0px 0px 0px 16px'
            }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={A1} sx={{
                        width: 28,
                        height: 28
                    }} />
                </ListItemAvatar>
                <ListItemText sx={{ alignSelf: 'center' }}
                    primary="Brunch "
                />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start" sx={{
                padding: '0px 0px 0px 16px'
            }}>
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src={A2} sx={{
                        width: 28,
                        height: 28
                    }} />
                </ListItemAvatar>
                <ListItemText sx={{ alignSelf: 'center' }}
                    primary="Summer "
                />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start" sx={{
                padding: '0px 0px 0px 16px'
            }}>
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={A3} sx={{
                        width: 28,
                        height: 28
                    }} />
                </ListItemAvatar>
                <ListItemText sx={{ alignSelf: 'center' }}
                    primary="Oui "
                />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start" sx={{
                padding: '0px 0px 0px 16px'
            }}>
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={A3} sx={{
                        width: 28,
                        height: 28
                    }} />
                </ListItemAvatar>
                <ListItemText sx={{ alignSelf: 'center' }}
                    primary="Oui "
                />
            </ListItem>

            <Divider />
            <ListItem alignItems="flex-start" sx={{
                padding: '0px 0px 0px 16px'
            }}>
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={A3} sx={{
                        width: 28,
                        height: 28
                    }} />
                </ListItemAvatar>
                <ListItemText sx={{ alignSelf: 'center' }}
                    primary="Oui "
                />
            </ListItem>

        </List >
    );
}
export default OnlineContact;