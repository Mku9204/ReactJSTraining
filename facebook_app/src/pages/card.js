import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid } from "@mui/material";

const CardFb = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            padding: '110px',
            backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
        }}>
            <Card sx={{ padding: '30px' }} >
                <Grid container columnSpacing={8} sx={{ height: 'calc(100vh-60px)' }}>
                    <Grid item xs={6} >

                        <CardMedia
                            component="img"
                            height="auto"
                            image={props.img}
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <CardContent>
                            {props.children}
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Box >
    )
}
export default CardFb;