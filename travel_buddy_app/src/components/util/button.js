import React from "react";
import { Box, Button } from "@mui/material";

const Button1 = (props) => {
    return (
        <Box sx={{
            paddingTop: '8px',
            display: 'inline-flex',
        }}>
            <Button variant="contained"
                sx={{
                    backgroundColor: '#ff5733',
                    padding: '15px 60px'
                }}
            >{props.text}
            </Button>
        </Box>
    )
}
export default Button1;