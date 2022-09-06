import React from "react";
import { Formik, Field, Form } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from 'yup';
import { FormControl } from "@mui/material";

const Form1 = () => {

    const SignupSchema = Yup.object().shape({

        userName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        message: Yup.string()
            .min(20, 'Too Short!')
            .max(500, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        subject: Yup.string()
            .min(10, 'Too Short!')
            .max(100, "Too Long!")
            .required('Required!'),
        password: Yup.string()
            .min(8, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),

    });


    const initialValues = {
        message: "",
        userName: "",
        email: "",
        subject: "",
        password: "",
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {(props) => (
                    <Form onSubmit={props.handleSubmit}
                        onReset={props.handleReset}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <FormControl>
                            <TextField
                                type={"text"}
                                variant="outlined"
                                id="message"
                                name="message"
                                placeholder="Enter message"
                                multiline={true}
                                rows={5}
                                onChange={props.handleChange}
                                value={props.values.message}
                                error={props.errors.message && props.touched.message}
                                helperText={props.errors.message}
                                onBlur={props.handleBlur}
                            />
                        </FormControl>

                        <TextField
                            type={"text"}
                            id="userName"
                            name="userName"
                            placeholder="Enter your name"
                            onChange={props.handleChange}
                            value={props.values.userName}
                            error={props.errors.userName && props.touched.userName}
                            helperText={props.errors.userName}
                            onBlur={props.handleBlur}
                        />

                        <TextField
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            onChange={props.handleChange}
                            value={props.values.email}
                            error={props.errors.email && props.touched.email}
                            helperText={props.errors.email}
                            onBlur={props.handleBlur}
                        />

                        <TextField
                            id="subject"
                            name="subject"
                            placeholder="Enter your subject"
                            type="subject"
                            onChange={props.handleChange}
                            value={props.values.subject}
                            error={props.errors.subject && props.touched.subject}
                            helperText={props.errors.subject}
                            onBlur={props.handleBlur}
                        />
                        <TextField
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            onChange={props.handleChange}
                            value={props.values.password}
                            error={props.errors.password && props.touched.password}
                            helperText={props.errors.password}
                            onBlur={props.handleBlur}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                backgroundColor: "#ff5733",
                                padding: "15px 30px",
                                height: "52px",
                                width: "198px",
                            }}
                        >
                            Send message
                        </Button>
                    </Form>

                )}
            </Formik>
        </div>
    );
};

export default Form1;