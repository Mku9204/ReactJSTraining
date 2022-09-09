import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

export default function CircularIntegration({ text, handleClick, load }) {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const buttonSx = {
        ...(success && {
            bgcolor: '#7F265B',
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    // React.useEffect(() => {
    //     return () => {
    //         clearTimeout(timer.current);
    //     };
    // }, []);

    const handleButtonClick = async () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <Box sx={{ display: 'flex', }}>
            <Box sx={{
                flexDirection: 'column',
                flexGrow: '1',
                display: 'flex',
            }}>
                <Button
                    variant="contained"
                    sx={buttonSx}
                    disabled={loading}
                    onClick={(e) => {
                        handleClick();
                        console.log(handleClick())
                        handleButtonClick();
                    }}
                >
                    {text}
                </Button>
                {loading && (
                    <CircularProgress
                        size={50}
                        sx={{
                            color: green[500],
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )}
            </Box>
        </Box >
    );
}
