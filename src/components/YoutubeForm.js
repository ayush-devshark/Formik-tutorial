import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = { name: 'rob', email: '', channel: '' };
const onSubmit = values => {
    console.log(values);
};

const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string()
        .email('Invalida email format')
        .required('This field is required'),
    channel: Yup.string().required('This field is required'),
});

const YoutubeForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='text' id='email' name='email' />
                    <ErrorMessage name='email' />
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel' />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;
