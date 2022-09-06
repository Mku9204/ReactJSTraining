import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import CardFb from "./card";
import LoginImg from '../assests/login.jpg'
import { Avatar, Button, Checkbox, FormControl, Link, TextField, Typography } from "@mui/material";
import Google from '../assests/Google.png'
import { Box } from "@mui/system";

const Login = () => {

    const validDationData = Yup.object().shape({

        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(8, "Mininum 8 Chracter required..!")
            .max(16, "Max 16 Chracter ..!!")
            .required("Required"),
        conpassword: Yup.string()
            .when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Confirm Password is not matched"
                )
            })
            .required("*password confirmation is required"),
        check: Yup.string()
            .required("Please check the box")
    });
    return (
        <>
            <CardFb img={LoginImg}>
                <Box sx={{
                }}>
                    <Typography variant="h5" sx={{
                        display: 'flex',
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontWeight: '700',
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
                        <Link href="#" underline="none" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            alignContent: 'center',
                            gap: '10px',


                        }}>   <Avatar alt="Not found" sizes="small" src={Google} />
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
                        conpassword: "",
                        check: ""
                    }}
                    validationSchema={validDationData}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ errors, touched }) => (

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

                                /></FormControl>
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}

                            <TextField
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                variant="outlined"
                                label="Password"

                            />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}

                            <TextField
                                type="password"
                                id="conpassword"
                                name="conpassword"
                                placeholder="Confirm Password"
                                variant="outlined"
                                label="Confirm Password"


                            />{" "}
                            {errors.conpassword && touched.conpassword ? (
                                <div>{errors.conpassword}</div>
                            ) : null}
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
                                    }} />Remember Me
                                </Box>

                                <Link href="#" underline="none" color="#7F265B">Forget Password ?</Link>
                            </Box>

                            <Button variant="contained" sx={{
                                backgroundColor: "#7F265B",
                            }}>Submit</Button>
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
                                <Link href="#" underline="none" color="#7F265B">Create an account</Link>
                            </Box>
                        </Form>

                    )}

                </Formik>
            </CardFb>
        </>
    );
};
export default Login;
