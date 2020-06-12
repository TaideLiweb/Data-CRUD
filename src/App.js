import './App.css'
import React, { useState } from 'react'
import SignupForm from './component/signupForm'
import DataTable from './component/dataTable'
import Title from './component/title'

function App() {
  const [data, setData] = useState([])
  const [disabledturn, setDisabledturn] = useState(true)
  const usedName = data.map((val) => val.name)
  const counts = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)
  function updateData(values) {
    data.push(values)
    setData([...data])
  }
  console.log(disabledturn)
  //修改空白跳Required & 無法點擊完成 & 驗證數字、email、重複姓名
  function modify(e) {
    const preChange = [...data]
    const index = e.target.getAttribute('data-index')
    if (
      preChange[index].name.length === 0 &&
      preChange[index].phoneNumber.length === 0 &&
      preChange[index].email.length === 0
    ) {
      preChange.splice(index, 1, {
        ...preChange[index],
        errMsg1: 'Required',
        errMsg2: 'Required',
        errMsg3: 'Required',
      })
      setData([...preChange])
    } else if (
      preChange[index].name.length === 0 ||
      counts(usedName, preChange[index].name) === 2
    ) {
      preChange.splice(index, 1, {
        ...preChange[index],
        errMsg1: 'Required and name is tanken',
      })
      setData([...preChange])
    } else if (
      preChange[index].phoneNumber.length === 0 ||
      !preChange[index].phoneNumber.match(/^[0-9]*$/)
    ) {
      preChange.splice(index, 1, {
        ...preChange[index],
        errMsg2: 'Required and Only number',
      })
      setData([...preChange])
    } else if (
      preChange[index].email.length === 0 ||
      !preChange[index].email.match(/^.+@[A-Za-z0-9_]+\..+$/)
    ) {
      preChange.splice(index, 1, {
        ...preChange[index],
        errMsg3: 'Required and Invalid email address',
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
  function deletData(e) {
    const preDelet = [...data]
    const index = e.target.getAttribute('data-index')
    preDelet.splice(index, 1)
    setData([...preDelet])
  }
  function changeDataName(e) {
    const preChange = [...data]
    const index = e.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], name: e.target.value, errMsg1: '' })
    setData([...preChange])
  }
  function changeDataPhoneNumber(e) {
    const preChange = [...data]
    const index = e.target.getAttribute('data-index')
    preChange.splice(index, 1, {
      ...preChange[index],
      phoneNumber: e.target.value,
      errMsg2: '',
    })
    setData([...preChange])
  }
  function changeDataEmail(e) {
    const preChange = [...data]
    const index = e.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], email: e.target.value, errMsg3: '' })
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
