import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string()
        .email('Invalida email format')
        .required('This field is required'),
    channel: Yup.string().required('This field is required'),
});

const OldYoutubeForm = () => {
    // return's a object
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        // validate: validate,
        validationSchema: validationSchema,
    });

    // console.log(formik.errors);
    // console.log(formik.values);
    // console.log(formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} //for visited field
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='error'>{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input
                        type='text'
                        id='channel'
                        name='channel'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel ? (
                        <div className='error'>{formik.errors.channel}</div>
                    ) : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default OldYoutubeForm;
