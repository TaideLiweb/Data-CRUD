/* eslint-disable operator-linebreak */
import './App.css'
import React, { useState } from 'react'
import SignupForm from './component/signupForm'
import DataTable from './component/dataTable'
import Title from './component/title'

function App() {
  const [data, setData] = useState([])
  const [disabledturn, setDisabledturn] = useState(true)
  const dataName = data.map((val) => val.name)
  const usedName = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)
  function updateData(values) {
    data.push(values)
    setData([...data])
  }
  // 修改空白跳Required & 無法點擊完成 & 驗證數字、email、重複姓名
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
      usedName(dataName, preChange[index].name) === 2
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
  // 刪除該欄位
  function deletData(e) {
    const preDelet = [...data]
    const index = e.target.getAttribute('data-index')
    preDelet.splice(index, 1)
    setData([...preDelet])
  }
  // 改變該欄位姓名
  function changeDataName(e) {
    const preChange = [...data]
    const index = e.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], name: e.target.value, errMsg1: '' })
    setData([...preChange])
  }
  // 改變該欄位電話
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
  // 改變該欄位E-mail
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
