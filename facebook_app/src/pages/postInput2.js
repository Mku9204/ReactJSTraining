import React from 'react'
import { Box, Button, FilledInput, FormControl, IconButton, Input, InputAdornment, Modal, TextField, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import NorthIcon from '@mui/icons-material/North';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useState, useRef } from 'react'
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseConfig from "../util/firebase";
import { useUploadPost } from "../hooks/posthooks";
import LocalStorageService from '../util/localStorageService';
import moment from 'moment';
import { useGetPosts } from '../hooks/getAllPostHook';


export default function PostInput2(props) {
    const { uploadPost, isLoading, isSuccess } = useUploadPost();
    const { getPosts } = useGetPosts();

    const [postText, setPostText] = useState("")
    const [postImg, setPostImg] = useState(null)

    const getData = (e) => setPostText(e.target.value)


    //const getFile = (e) => setPostImg(e.target.files[0])
    // const getFile = (e) => setPostImg(e.target.value)
    //console.log(LocalStorageService.getCurrentUser('current_user'))
    const current_user = LocalStorageService.getCurrentUser('current_user')
    const postSubmit = () => {

        uploadPost({
            text: postText,
            uploadFile: postImg,
            user: current_user,
            createAt: moment().format("llll")
        })
        setPostText('')
        setPostImg('')
        // console.log('posts text', postText)
        // console.log('post img', postImg)
        getPosts()
    }

    return (
        <>
            <Box sx={{
                display: 'flex'
            }}>
                <TextField
                    onChange={getData}
                    autoComplete='off'
                    value={postText}
                    name='text'
                    sx={{
                        paddingRight: '8px',
                        textAlignLast: 'center',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: `50px`,
                            backgroundColor: 'white',
                        },

                    }}
                    variant="outlined"
                    fullWidth
                    placeholder="What’s on you mind, Paul?"
                    id="name"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" sx={{
                                gap: '10px',
                                cursor: 'pointer',
                            }}>
                                <NorthIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    //value={}
                    //type='file'
                    value={postImg}
                    autoComplete='off'
                    sx={{
                        textAlignLast: 'center',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: `50px`,
                            backgroundColor: 'white',
                        },
                    }}
                    variant="outlined"
                    placeholder="Image Upload"
                    onChange={(e) => setPostImg(e.target.value)}
                    name='url'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start" sx={{
                                //gap: '10px',
                                cursor: 'pointer',
                            }}>
                                {/* <PhotoLibraryIcon color='primary' /> */}
                                <IconButton component="label">

                                    <PhotoLibraryIcon color='primary' />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    //value={}

                    type='file'
                    size='small'
                    autoComplete='off'
                    sx={{
                        textAlignLast: 'center',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: `50px`,
                            backgroundColor: 'white',
                        },
                    }}
                    variant="outlined"
                    placeholder="Image Upload"
                    onChange={(e) => setPostImg(e.target.files[0])}
                    name='url'

                />
                <Button type='submit' onClick={postSubmit}>
                    Post
                </Button>
            </Box>
        </>
    )
}
