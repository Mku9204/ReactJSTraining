import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActionArea, Typography } from '@mui/material';
const Card1 = (props) => {
    return (
        <Card sx={{
            // height: '95vh',
            paddingTop: `${props.pd}`,
            backgroundColor: `${props.bcb}`,
            height: `${props.height}`
        }} >
            <Box sx={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: '100% 100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                color: 'white',
                justifyContent: 'center',

            }}>
                {props.children}
            </Box>

        </Card>
    );
}
export default Card1;