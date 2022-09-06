import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
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
        Conpassword: Yup.string()
            .when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Confirm Password is not matched"
                )
            })
            .required("*password confirmation is required")
    });
    return (
        <>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    gender: "",
                    status: "",
                    Conpassword: ""
                }}
                validationSchema={validDationData}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched }) => (
                    <Form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: "10px"
                        }}
                    >
                        <label htmlFor="firstName">First Name</label>
                        <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Jane"
                        />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <label htmlFor="lastName">Last Name</label>
                        <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                        />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="abc@gmail.com"
                            type="email"
                        />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <label htmlFor="password">Password</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <label htmlFor="Conpassword">Confirm Password</label>
                        <Field
                            type="password"
                            id="Conpassword"
                            name="Conpassword"
                            placeholder="Confirm Password"
                        />{" "}
                        {errors.Conpassword && touched.Conpassword ? (
                            <div>{errors.Conpassword}</div>
                        ) : null}
                        <div id="my-radio-group">Gender</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="gender" value="male" />
                                Male
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="female" />
                                Female
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="other" />
                                Other
                            </label>
                        </div>
                        {errors.gender && touched.gender ? (
                            <div>{errors.gender}</div>
                        ) : null}
                        <div>
                            <label htmlFor="status">Status :</label>
                            <Field as="select" name="status">
                                <option selected disabled>
                                    - Material Status -
                                </option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                            </Field>
                        </div>
                        {errors.status && touched.status ? (
                            <div>{errors.status}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    );
};
export default SignUp;
