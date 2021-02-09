import {Formik, Form, Field, ErrorMessage} from 'formik'
import React from 'react'

const Forms = () => {
    return (
        <Formik
            initialValues={{summary: '', description: '', title: ''}}
            validate={values => {
                const errors = {};
                if (!values.title) {
                    errors.title = ''
                }
            }}
        >
            
        </Formik>
    )
}

export default Forms
