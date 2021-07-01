import React from 'react';
import Login from '../views/Login';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function LoginContainer(props) {
    const validationSchema = yup.object({
        email: yup
            .string('something email')
            .email('enter a valid email')
            .required('email is required')
            .min(6, 'email must contain at least 6 characters'),
        password: yup
            .string('something password')
            .required('password is required')
            .min(6, 'password must contain at least 6 characters'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 1));
            formik.resetForm();
        },
    });

    return <Login validationSchema={validationSchema} formik={formik} />;
}
