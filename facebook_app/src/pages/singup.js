import { Button, CardMedia, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputLabel, Link, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import LoginImg from '../assests/login.jpg'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../util/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const SignUp = () => {
    const validDationData = Yup.object().shape({
        firstName: Yup.string()
            .min(8, "Mininum 8 Chracter required..!")
            .max(20, "Max 20 Chracter ..!")
            .required("Required"),
        lastName: Yup.string()
            .min(6, "Mininum 6 Chracter required..!")
            .max(15, "Max 15 Chracter ..!!")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(8, "Mininum 8 Chracter required..!")
            .max(16, "Max 16 Chracter ..!!")
            .required("Required"),
        gender: Yup.string().required("Required"),
        status: Yup.string().required("Select Status"),
        conpassword: Yup.string()
            .when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Confirm Password is not matched"
                )
            })
            .required("*password confirmation is required"),
        check: Yup.boolean().oneOf([true], "accept the terms and condition")
    });
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login')
    }
    const auth = getAuth();
    const createUserWithEmailAndPasswordFb = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    //databse storage
    const db = getFirestore(firebaseConfig.app);
    const saveData = async (values) => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                gender: values.gender,
                status: values.status,
                conpassword: values.conpassword,

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        alert('data save')
    }


    const [agree, setAgree] = useState('false')
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
                <Grid item xs={6} sx={{}}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0px 150px'
                    }}>
                        <Typography variant="h5"

                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontFamily: 'Nunito Sans',
                                fontSize: '36px',
                                lineHeight: '49px',
                                color: '#525252',
                                paddingBottom: '30px',
                            }}>Registration form</Typography>

                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                gender: "",
                                status: "",
                                conpassword: "",
                                check: ''
                            }}
                            validationSchema={validDationData}
                            onSubmit={(values) => {
                                //alert(JSON.stringify(values, null, 2));
                                saveData(values)
                                createUserWithEmailAndPasswordFb(values.email, values.password)

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

                                    <TextField
                                        id="firstName"
                                        name="firstName"
                                        placeholder="FirstName"
                                        type="text"
                                        variant="outlined"
                                        label="FirstName"
                                        size='small'
                                        onChange={props.handleChange}
                                        value={props.values.firstName}
                                        error={props.touched.firstName && props.errors.firstName}
                                        helperText={props.touched.firstName && props.errors.firstName}
                                        onBlur={props.handleBlur}
                                    />
                                    <TextField
                                        id="lastName"
                                        name="lastName"
                                        placeholder="LastName"
                                        type="text"
                                        variant="outlined"
                                        label="LastName"
                                        size='small'
                                        onChange={props.handleChange}
                                        value={props.values.lastName}
                                        error={props.touched.lastName && props.errors.lastName}
                                        helperText={props.touched.lastName && props.errors.lastName}
                                        onBlur={props.handleBlur}
                                    />
                                    <TextField
                                        id="email"
                                        name="email"
                                        placeholder="abc@gmail.com"
                                        type="email"
                                        variant="outlined"
                                        label="Email"
                                        size='small'
                                        onChange={props.handleChange}
                                        value={props.values.email}
                                        error={props.touched.email && props.errors.email}
                                        helperText={props.touched.email && props.errors.email}
                                        onBlur={props.handleBlur}
                                    />


                                    <Box sx={{}}><FormControl size='small'>
                                        <FormLabel id="gender" >Gender</FormLabel>
                                        <RadioGroup row
                                            aria-labelledby="gender"
                                            // defaultValue="Male"
                                            name="gender"
                                            onChange={props.handleChange}
                                            value={props.values.gender}
                                            error={props.touched.gender && props.errors.gender}
                                            helperText={props.touched.gender && props.errors.gender}
                                            onBlur={props.handleBlur}
                                        >
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                        <FormHelperText error>{props.errors.gender}</FormHelperText>
                                    </FormControl></Box>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id="status" >Status</InputLabel>
                                            <Select
                                                labelId="status"
                                                id="status"
                                                label="status"
                                                name="status"
                                                onChange={props.handleChange}
                                                value={props.values.status}
                                                error={props.touched.status && props.errors.status}
                                                helperText={props.touched.status && props.errors.status}
                                                onBlur={props.handleBlur}
                                            >
                                                <MenuItem value='Single'>Single</MenuItem>
                                                <MenuItem value='Married'>Married</MenuItem>
                                                <MenuItem value='Other'>Other</MenuItem>
                                            </Select>
                                            <FormHelperText error>{props.errors.status}</FormHelperText>
                                        </FormControl>
                                    </Box>
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
                                    <TextField
                                        type="password"
                                        id="conpassword"
                                        name="conpassword"
                                        placeholder="Confirm Password"
                                        variant="outlined"
                                        label="Confirm Password"
                                        size='small'
                                        onChange={props.handleChange}
                                        value={props.values.conpassword}
                                        error={props.touched.conpassword && props.errors.conpassword}
                                        helperText={props.touched.conpassword && props.errors.conpassword}
                                        onBlur={props.handleBlur}

                                    />

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <FormControl
                                            id="checkbox"
                                            label="check"
                                            name="checkbox"
                                            size="small"
                                        // onChange={props.handleChange}
                                        // value={props.values.check}
                                        // error={props.touched.check && props.errors.check}
                                        // helperText={props.touched.check && props.errors.check}
                                        // onBlur={props.handleBlur}
                                        >
                                            <FormControlLabel
                                                control={<Checkbox value={true} color="primary" />}
                                                name="check"
                                                onChange={(e) => setAgree(!e.target.checked)}
                                                label="I agree with the terms and conditions*"

                                            />
                                            <FormHelperText error>
                                                {props.touched.check && props.errors.check}
                                            </FormHelperText>
                                        </FormControl>
                                        {/* <Link href="#" underline="none" color="#7F265B">Forget Password ?</Link> */}
                                    </Box>

                                    <Button variant="contained" size='small' sx={{
                                        backgroundColor: "#7F265B",
                                    }}
                                        // onClick={goToLogin}
                                        disabled={agree}
                                        id="submit"
                                        type="submit"
                                    >Registered</Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Grid>
            </Grid>

        </>
    );
};
export default SignUp;
