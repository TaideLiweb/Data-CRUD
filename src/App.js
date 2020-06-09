import './App.css'
import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DataTable from './component/dataTable'
import Title from './component/title'

function App() {
  const [data, setData] = useState([])
  const [disabledOn, setDisabledOn] = useState(true)

  const SignupForm = () => {
    return (
      <Formik
        initialValues={{ Name: '', phoneNumber: '', email: '' }}
        validationSchema={Yup.object({
          Name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          phoneNumber: Yup.number().typeError('Only number').required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values) => {
          data.push(values)
          setData([...data])
        }}
      >
        <Form className="flex height50">
          <div>
            <label htmlFor="Name">Name</label>
            <Field name="Name" type="text" />
            <p style={{ color: 'red' }}>
              <ErrorMessage name="Name" />
            </p>
          </div>
          <div>
            <label htmlFor="phoneNumber">phoneNumbere</label>
            <Field name="phoneNumber" type="text" />
            <p style={{ color: 'red' }}>
              <ErrorMessage name="phoneNumber" />
            </p>
          </div>
          <div>
            <label htmlFor="email">email</label>
            <Field name="email" type="email" />
            <p style={{ color: 'red' }}>
              <ErrorMessage name="email" />
            </p>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
  }
  function modify(dataIndex) {
    setDisabledOn(!disabledOn)
  }
  function deletData(dataIndex) {
    let preDelet = [...data]
    let index = dataIndex.target.getAttribute('data-index')
    preDelet.splice(index, 1)
    setData([...preDelet])
  }
  function changeDataName(dataIndex) {
    let preChange = [...data]
    let index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], name: dataIndex.target.value })
    setData([...preChange])
  }
  function changeDataPhoneNumber(dataIndex) {
    let preChange = [...data]
    let index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], phoneNumber: dataIndex.target.value })
    setData([...preChange])
  }
  function changeDataEmail(dataIndex) {
    let preChange = [...data]
    let index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], email: dataIndex.target.value })
    setData([...preChange])
  }
  return (
    <div className="center">
      <Title />
      <SignupForm />
      <DataTable
        data={data}
        modify={modify}
        deletData={deletData}
        changeDataName={changeDataName}
        changeDataPhoneNumber={changeDataPhoneNumber}
        changeDataEmail={changeDataEmail}
        disabledOn={disabledOn}
      />
    </div>
  )
}

export default App
