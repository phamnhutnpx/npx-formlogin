import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../asset/styles/signup.css';
const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmedPassword: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required").min(4, "Name must be at least 4 characters or more"),
            email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
            password: Yup.string().required("Required").matches(/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,16}$/, "Password must be least 6 to 16 characters long and contain only letters, numbers, a special character"),
            confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Password must match"),
            phone: Yup.string().required("Required").matches(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/, "Must be a valid phone number")
        }),
        onSubmit: (value) => {
            window.alert("Form submit success!");
            console.log(value);
        }
    })
    console.log("name>>>>", formik.errors.name);
    console.log("password>>>>", formik.errors.password);
    console.log("confirmedpassword>>>>", formik.errors.confirmedPassword);
    console.log("phone>>>>", formik.errors.phone);
    return (
        <section>
            <form className="infoform" onSubmit={formik.handleSubmit}>
                <label> Your name </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && <span className="errorMsg">{formik.errors.name}</span>}
                <label> Email address </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && <span className="errorMsg">{formik.errors.email}</span>}
                <label> Password </label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && <span className="errorMsg">{formik.errors.password}</span>}
                <label> Confirm Password </label>
                <input
                    type="text"
                    id="confirmedPassword"
                    name="confirmedPassword"
                    placeholder="Confirm your password"
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                />
                {formik.errors.confirmedPassword && <span className="errorMsg">{formik.errors.confirmedPassword}</span>}
                <label> Phone number </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone numbers"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />
                {formik.errors.phone && <span className="errorMsg">{formik.errors.phone}</span>}
                <button type="submit"> Continue </button>
            </form>
        </section>
    )
}

export default SignupForm