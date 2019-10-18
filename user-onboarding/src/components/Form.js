import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";

function UserForm({ errors, touched, values, status }) {
    const [users, setUsers] = useState([]);
    console.log("this is touched", touched)
    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status])

    return (
        <div className="user-form">
            <Form className="form-box">
                <label>Name
                        <Field type="text" name="name" placeholder="Name" />
                </label>
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}
                <label>Email
                    <Field type="text" name="email" placeholder="@gmail.com" /></label>
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}

                <label>Password
                    <Field type="password" name="password" placeholder="Password" /></label>
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}

                <label>
                    Accept Terms of Service
                        <Field type="checkbox" name="tos" checked={values.tos} />
                </label>
                {touched.tos && errors.tos && (
                    <p className="error">{errors.tos}</p>
                )}
                <button type="submit">Submit</button>
            </Form>
            {users.map(users => (
                <ul key={users.id}>
                    <li>Name: {users.name}</li>
                    <li>Email: {users.email}</li>
                </ul>
            ))}
        </div>
    );
};
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        };
    },

})(UserForm)

export default FormikUserForm;