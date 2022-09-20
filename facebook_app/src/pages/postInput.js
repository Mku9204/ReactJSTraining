import { Box, Button, FilledInput, FormControl, IconButton, Input, InputAdornment, Modal, TextField, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import NorthIcon from '@mui/icons-material/North';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import React, { useState, useRef } from 'react'
import { Form, Formik } from "formik";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseConfig from "../util/firebase";
import { useUploadPost } from "../hooks/posthooks";
import { useGetPosts } from "../hooks/getAllPostHook";
import LocalStorageService from "../util/localStorageService";

const PostInput = (props) => {
    const { uploadPost, isLoading, isSuccess } = useUploadPost();
    const { getPosts } = useGetPosts();

    const current_user = LocalStorageService.getCurrentUser('current_user')
    const postSubmit = () => {


        // setPostText('')
        // setPostImg('')
        // console.log('posts text', postText)
        // console.log('post img', postImg)
        getPosts()
    }
    return (
        <>
            <Formik
                initialValues={{
                    postId: Math.floor((Math.random() * 100)),
                    text: "",
                    url: "",
                    name: 'Abhishek saini',
                    time: 'Just Now ',
                    profile: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80'

                }}

                onSubmit={(posts, { resetForm }) => {
                    uploadPost({
                        text: "",
                        uploadFile: "",
                        user: current_user,
                        createAt: ""
                    })
                    resetForm({ posts: '' })
                }}

            >
                {(props) => (
                    <Form autoComplete="off">
                        <Box sx={{
                            display: 'flex',
                            paddingBottom: '14px',
                            // border: '2px solid white',
                            //padding: '10px',
                            borderRadius: '50px',
                        }}>
                            <TextField
                                onChange={props.handleChange}
                                value={props.values.text}
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
                                id="search"
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
                                value={props.values.url}
                                // type='file'
                                sx={{
                                    textAlignLast: 'center',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: `50px`,
                                        backgroundColor: 'white',
                                    },
                                }}
                                variant="outlined"
                                placeholder="Image Upload"
                                onChange={props.handleChange}
                                name='url'
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start" sx={{
                                            //gap: '10px',
                                            cursor: 'pointer',
                                        }}>
                                            {/* <PhotoLibraryIcon color='primary' /> */}
                                            <IconButton component="label">
                                                <input type='file'
                                                    hidden />
                                                <PhotoLibraryIcon color='primary' />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button type='submit'>
                                Post
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>







    )
}
export default PostInput