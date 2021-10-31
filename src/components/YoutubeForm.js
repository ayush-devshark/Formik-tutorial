import React from 'react';
import { useFormik } from 'formik';

const initialValues = { name: 'rob', email: '', channel: '' };
const onSubmit = values => {
    console.log(values);
};

const validate = values => {
    let errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    if (!values.channel) {
        errors.channel = 'Required';
    }
    return errors;
};

const YoutubeForm = () => {
    // return's a object
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate,
    });

    // console.log(formik.values);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <label htmlFor='email'>E-mail</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor='channel'>Channel</label>
                <input
                    type='text'
                    id='channel'
                    name='channel'
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;
