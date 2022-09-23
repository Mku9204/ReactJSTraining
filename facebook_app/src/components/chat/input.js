import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { Container } from '@mui/system'
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function ChatInput(props) {
    const [text, setText] = useState('')
    function a1(e) {
        setText(e.target.value)
    }
    function getData() {
        { props.message(text) }
        setText('')
    }
    return (
        <>
            <Container sx={{
                display: 'flex',
                gap: '15px'
            }}>
                <>
                    <TextField
                        id="outlined-basic"
                        placeholder="message"
                        variant="outlined"
                        autoComplete='off'
                        sx={{
                            width: {
                                sm: `calc(100% - 500px)`,
                            },
                            '.MuiInputBase-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',

                            },
                            flexGrow: '1'
                        }}
                        InputProps={{
                            endAdornment:
                                (
                                    < InputAdornment position="end" sx={{ gap: '10px' }} >
                                        <AttachFileIcon />
                                        <CollectionsIcon />
                                    </InputAdornment>
                                )
                        }}
                        onChange={a1}
                        value={text}
                    />
                    <Button variant="contained" endIcon={<SendIcon />} onClick={getData}>
                        Send
                    </Button>
                </>
            </Container>

        </>
    )
}
