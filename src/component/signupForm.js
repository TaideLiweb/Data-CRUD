import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupForm = (props) => {
  const { updateData, data } = props
  const usedName = data.map((val) => val.name)
  return (
    <Formik
      initialValues={{ name: '', phoneNumber: '', email: '', disabled: true }}
      validationSchema={Yup.object({
        name: Yup.string()
          .test('usedName', 'name is taken', (val) => !usedName.includes(val))
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        phoneNumber: Yup.number().typeError('Only number').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values) => {
        updateData(values)
      }}
    >
      <Form className="flex">
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <p style={{ color: 'red' }}>
            <ErrorMessage name="name" />
          </p>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone numbere</label>
          <Field name="phoneNumber" type="text" />
          <p style={{ color: 'red' }}>
            <ErrorMessage name="phoneNumber" />
          </p>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <Field name="email" type="email" />
          <p style={{ color: 'red' }}>
            <ErrorMessage name="email" />
          </p>
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </Form>
    </Formik>
  )
}

export default SignupForm
