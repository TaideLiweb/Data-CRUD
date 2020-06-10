import './App.css'
import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DataTable from './component/dataTable'
import Title from './component/title'
  const SignupForm = (props) => {
    const { updateData, data } = props
    const repeatName = data.map(val=>(val.name))
    return (
      <Formik
        initialValues={{ name: '', phoneNumber: '', email: '' ,disabled:true}}
        validationSchema={Yup.object({
          name: Yup.string().test('err','name is taken',(val)=>!repeatName.includes(val)).max(15, 'Must be 15 characters or less').required('Required'),
          phoneNumber: Yup.number().typeError('Only number').required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values) => {
          updateData(values)
        }}
      >
        <Form className="flex height50">
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <p style={{ color: 'red' }}>
              <ErrorMessage name="name" />
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
function App() {
  const [data, setData] = useState([])
  const [disabledturn, setDisabledturn] = useState(true)

  function updateData(values){
    data.push(values)
    setData([...data])
  }

  function modify(dataIndex) {
    setDisabledturn(!disabledturn)
    let preChange = [...data]
    let index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], disabled: disabledturn })
    setData([...preChange])
    
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
      <SignupForm updateData={updateData} data={data} />
      <DataTable
        data={data}
        modify={modify}
        deletData={deletData}
        changeDataName={changeDataName}
        changeDataPhoneNumber={changeDataPhoneNumber}
        changeDataEmail={changeDataEmail}
        disabledturn={disabledturn}
      />
    </div>
  )
}

export default App
