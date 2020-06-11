import './App.css'
import React, { useState } from 'react'
import SignupForm from './component/signupForm'
import DataTable from './component/dataTable'
import Title from './component/title'

function App() {
  const [data, setData] = useState([])
  const [disabledturn, setDisabledturn] = useState(true)

  function updateData(values) {
    data.push(values)
    setData([...data])
  }
  //修改未填跳Required及無法點擊完成
  function modify(dataIndex) {
    const preChange = [...data]
    const index = dataIndex.target.getAttribute('data-index')
    if (preChange[index].name.length === 0) {
      preChange.splice(index, 1, {
        ...preChange[index],
        errMsg1: 'Required',
      })
      setData([...preChange])
    } else if (preChange[index].phoneNumber.length === 0) {
      preChange.splice(index, 1, {
        ...preChange[index],
        errMsg2: 'Required',
      })
      setData([...preChange])
    } else if (preChange[index].email.length === 0) {
      preChange.splice(index, 1, {
        ...preChange[index],
        errMsg3: 'Required',
      })
      setData([...preChange])
    } else {
      setDisabledturn(!disabledturn)
      preChange.splice(index, 1, {
        ...preChange[index],
        disabled: disabledturn,
        errMsg1: '',
        errMsg2: '',
        errMsg3: '',
      })
      setData([...preChange])
    }
  }
  function deletData(dataIndex) {
    const preDelet = [...data]
    const index = dataIndex.target.getAttribute('data-index')
    preDelet.splice(index, 1)
    setData([...preDelet])
  }
  function changeDataName(dataIndex) {
    const preChange = [...data]
    const index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], name: dataIndex.target.value })
    setData([...preChange])
  }
  function changeDataPhoneNumber(dataIndex) {
    const preChange = [...data]
    const index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], phoneNumber: dataIndex.target.value })
    setData([...preChange])
  }
  function changeDataEmail(dataIndex) {
    const preChange = [...data]
    const index = dataIndex.target.getAttribute('data-index')
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
