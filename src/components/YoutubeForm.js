import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
    FastField,
} from 'formik';
import * as Yup from 'yup';

import TextError from './TextError';

const initialValues = {
    name: 'rob',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: { facebook: '', twitter: '' },
    phoneNumbers: ['', ''],
    phNumbers: [''],
};
const onSubmit = values => {
    console.log(values);
};

const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string()
        .email('Invalida email format')
        .required('This field is required'),
    channel: Yup.string().required('This field is required'),
    comments: Yup.string().required('This field is required'),
});

const validateComments = value => {
    let error;
    if (!value) {
        error = 'required';
    }
    return error;
};

const YoutubeForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // validateOnChange={false}
            // validateOnBlur={false}
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='text' id='email' name='email' />
                    <ErrorMessage name='email'>
                        {errorMsg => <div className='error'>{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                        placeholder='Youtube channel name'
                    />
                    <ErrorMessage name='channel' />
                </div>

                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field
                        as='textarea'
                        id='comments'
                        name='comments'
                        validate={validateComments}
                    />
                    <ErrorMessage name='comments' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <FastField name='address'>
                        {props => {
                            const { field, form, meta } = props;
                            // console.log(props);
                            return (
                                <div>
                                    <input
                                        type='text'
                                        id='address'
                                        {...field}
                                    />

                                    {meta.touched && meta.error ? (
                                        <div>{meta.error}</div>
                                    ) : null}
                                </div>
                            );
                        }}
                    </FastField>
                </div>

                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' id='facebook' name='social.facebook' />
                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter profile</label>
                    <Field type='text' id='twitter' name='social.twitter' />
                </div>

                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primary phone number</label>
                    <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                </div>

                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Secondary phone number</label>
                    <Field
                        type='text'
                        id='secondaryPh'
                        name='phoneNumbers[1]'
                    />
                </div>

                <div className='form-control'>
                    <label>List of phone numbers</label>
                    <FieldArray name='phNumbers'>
                        {fieldArrayProps => {
                            // console.log(fieldArrayProps);
                            const { push, remove, form } = fieldArrayProps;
                            const { values } = form;
                            const { phNumbers } = values;
                            return (
                                <div>
                                    {phNumbers.map((phoneNumber, index) => (
                                        <div key={index}>
                                            <Field
                                                name={`phNumbers[${index}]`}
                                            />
                                            {index > 0 && (
                                                <button
                                                    type='button'
                                                    onClick={() =>
                                                        remove(index)
                                                    }
                                                >
                                                    -
                                                </button>
                                            )}

                                            <button
                                                type='button'
                                                onClick={() => push('')}
                                            >
                                                +
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            );
                        }}
                    </FieldArray>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;
