import './App.css'
import React, { useState, useEffect } from 'react'
import DataTable from './component/dataTable'

function App() {
  let [inputDatas, setinputDatas] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  })
  let [disabledTurn, SetDisabledTurn] = useState(true)
  let [data, setData] = useState([])

  function modify(dataIndex) {
    let index = dataIndex.target.getAttribute('data-index')
    SetDisabledTurn(!disabledTurn)
  }
  const updateData = (e) => {
    data.push(inputDatas)
    setData([...data])
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
      <div>
        <h1>Data-CRUD</h1>
        <form action="" target="nm_iframe">
          <div className="inputFlex">
            <div>
              <span>姓名</span>
              <input
                id="name"
                type="text"
                placeholder="請輸入姓名"
                onChange={(e) => {
                  setinputDatas({ ...inputDatas, name: e.target.value })
                }}
              ></input>
            </div>
            <div>
              <span>電話</span>
              <input
                id="phoneNumber"
                type="text"
                placeholder="請輸入電話"
                onChange={(e) => {
                  setinputDatas({ ...inputDatas, phoneNumber: e.target.value })
                }}
              ></input>
            </div>
            <div>
              <span>e-mail</span>
              <input
                id="email"
                type="email"
                placeholder="請輸入E-mail"
                onChange={(e) => {
                  setinputDatas({ ...inputDatas, email: e.target.value })
                }}
              ></input>
            </div>
          </div>
          <div>
            <input className="submitBtn" type="submit" value="送出" onClick={updateData}></input>
          </div>
        </form>
        <iframe id="id_iframe" name="nm_iframe" style={{ display: 'none' }}></iframe>
      </div>
      <DataTable
        data={data}
        modify={modify}
        deletData={deletData}
        changeDataName={changeDataName}
        changeDataPhoneNumber={changeDataPhoneNumber}
        changeDataEmail={changeDataEmail}
        disabledTurn={disabledTurn}
      />
    </div>
  )
}

export default App
