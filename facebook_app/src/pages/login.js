import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import LoginImg from '../assests/login1.jpeg'
import { Alert, Avatar, Button, Card, CardMedia, Checkbox, FormControl, Grid, Link, Snackbar, TextField, Typography } from "@mui/material";
import Google from '../assests/google.png'
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../util/firebase";
import { GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence } from "firebase/auth";
import { async } from "@firebase/util";
import LoadingButton from '@mui/lab/LoadingButton';
import LocalStorageService from "../util/localStorageService";

const Login = () => {
    const [snakData, setSnakData] = useState({});
    const [load, setLoding] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const validDationData = Yup.object().shape({

        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(8, "Mininum 8 Chracter required..!")
            .max(16, "Max 16 Chracter ..!!")
            .required("Required"),

        check: Yup.string()
            .required("Please check the box")
    });
    function mapAuthCodeToMessage(authCode) {
        switch (authCode) {
            case "auth/wrong-password":
                return "Password provided is not corrected";

            case "auth/invalid-email":
                return "Email provided is invalid";

            case "auth/user-not-found":
                return "user not found";


            default:
                return "oooh something went wrong...!";
        }
    }

    const auth = getAuth();
    const signInWithEmailAndPasswordFb = (email, password) => {
        setLoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setSnakData({ type: 'success', msg: 'you have successfully login', date: new Date() })

                navigate('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
                setSnakData({ type: 'error', msg: mapAuthCodeToMessage(error.code), date: new Date() })

            })
            .finally(() => { setLoding(false) })
        setSnakData({})

    }
    const per = async (email, password) => {
        await setPersistence(auth, browserSessionPersistence)
            .then(() => {
                LocalStorageService.setToken(true)
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                return signInWithEmailAndPasswordFb(email, password);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }



    const provider = new GoogleAuthProvider();
    function signWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }



    //snakebar
    const handleClickSnak = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <>
            <Grid container sx={{

                backgroundColor: 'bisque',
            }}  >
                <Grid item xs={6} >
                    <CardMedia
                        src={LoginImg}
                        component='img'
                        sx={{
                            height: '100vh'
                        }} />
                </Grid>

                <Grid item xs={6} >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '50px 100px',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Typography variant="h5" sx={{
                                display: 'flex',
                                fontFamily: 'Nunito Sans',
                                fontSize: '36px',
                                lineHeight: '49px',
                                color: '#525252',
                            }}>Login to your Account</Typography>

                            <Typography variant="caption" sx={{
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '22px',
                                color: '#525252',
                            }}>See what is going on with your business</Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                alignContent: 'center',

                                justifyContent: 'center',
                                padding: '25px'
                            }}>
                                <Link underline="none" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    gap: '10px',

                                }}
                                    onClick={signWithGoogle}
                                >   <Avatar alt="Not found" sizes='small' src={Google} />
                                    <Typography sx={{
                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        color: '#828282',
                                    }}>Continue with Google</Typography></Link>

                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                alignContent: 'center',
                                gap: '10px',
                                justifyContent: 'center',

                            }}>
                                <Typography sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    gap: '10px',
                                    justifyContent: 'center',
                                    fontFamily: 'Nunito Sans',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    color: '#828282',
                                }}>or Sign in with Email</Typography>
                            </Box>

                        </Box>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                check: ""
                            }}
                            validationSchema={validDationData}
                            onSubmit={(values) => {
                                // alert(JSON.stringify(values, null, 2));
                                //signInWithEmailAndPasswordFb(values.email, values.password)
                                per(values.email, values.password)
                            }}
                        >
                            {(props) => (

                                <Form
                                    autoComplete="off"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px"
                                    }}
                                >
                                    <FormControl>
                                        <TextField
                                            id="email"
                                            name="email"
                                            placeholder="abc@gmail.com"
                                            type="email"
                                            variant="outlined"
                                            label="email"
                                            size='small'
                                            onChange={props.handleChange}
                                            value={props.values.email}
                                            error={props.touched.email && props.errors.email}
                                            helperText={props.touched.email && props.errors.email}
                                            onBlur={props.handleBlur}
                                        /></FormControl>


                                    <TextField
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        variant="outlined"
                                        label="Password"
                                        size='small'
                                        onChange={props.handleChange}
                                        value={props.values.password}
                                        error={props.touched.password && props.errors.password}
                                        helperText={props.touched.password && props.errors.password}
                                        onBlur={props.handleBlur}
                                    />
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Box>
                                            <Checkbox label='Remember Me' id="Remember Me" name="check" sx={{
                                                color: 'primary',
                                                '&.Mui-checked': {
                                                    color: ' #7F265B',
                                                },
                                            }} onChange={props.handleChange}
                                                value={props.values.check}
                                                error={props.touched.check && props.errors.check}
                                                helperText={props.touched.check && props.errors.check}
                                                onBlur={props.handleBlur} />Remember Me
                                        </Box>

                                        <Link href="#" underline="none" color="#7F265B">Forget Password ?</Link>
                                    </Box>

                                    {load ? (<LoadingButton
                                        variant="contained"
                                        type="submit"
                                        size='small'
                                        loading
                                        sx={{
                                            backgroundColor: "#7F265B",
                                            padding: '20px 0px'
                                        }}
                                        onClick={handleClickSnak}
                                    />) : (<LoadingButton variant="contained"
                                        type="submit"
                                        size='small'
                                        sx={{
                                            backgroundColor: "#7F265B",
                                        }}

                                        onClick={handleClickSnak}
                                    >Login</LoadingButton>)}
                                    <Box>
                                        {Object.keys(snakData).length > 0 ? (
                                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                                <Alert key={snakData.date} onClose={handleClose} severity={snakData.type} sx={{ width: '100%' }}>
                                                    {snakData.msg}
                                                </Alert>
                                            </Snackbar>) : null}
                                    </Box>


                                    <Box sx={{
                                        display: 'flex',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        paddingTop: '40px',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography sx={{
                                            fontFamily: 'Nunito Sans',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '18px',
                                            lineHeight: '25px',
                                            color: '#828282',

                                        }}>Not Registered Yet?</Typography>
                                        <Link onClick={() => navigate('/signup')} underline="none" color="#7F265B"
                                            sx={{ cursor: 'pointer' }}
                                        >Create an account</Link>
                                    </Box>

                                </Form>

                            )}

                        </Formik>
                    </Box>
                </Grid>

            </Grid>
        </>
    );
};
export default Login;
