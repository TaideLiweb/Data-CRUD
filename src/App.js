import './App.css'
import React, { useState, useEffect } from 'react'
import DataTable from './component/dataTable'

function App() {
  let [inputDatas, setinputDatas] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  })
  let [newData, setnewData] = useState([])
  let [data, setData] = useState([])

  function modify(e) {
    // let index = e.target.getAttribute('data-index')
    // let div = document.getElementsByClassName('dataFlex')[index]
    // let box = div.getElementsByTagName('input')
    // if (box[0].disabled === true) {
    //   box[0].disabled = false
    //   box[1].disabled = false
    //   box[2].disabled = false
    // } else {
    //   box[0].disabled = true
    //   box[1].disabled = true
    //   box[2].disabled = true
    // }
    // console.log(box)
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
    console.log(index)
  }
  // function deletData(dataIndex) {
  //   let preDelet = [...newData]
  //   let index = dataIndex.target.getAttribute('data-index')
  //   preDelet.splice(index, 1)
  //   data.splice(index, 1)
  //   setnewData([...preDelet])
  //   console.log(index)
  // }

  function changeDataName(dataIndex) {
    let preChange = [...newData]
    let index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], name: dataIndex.target.value })
    data.splice(index, 1, { ...data[index], name: dataIndex.target.value })
    setnewData([...preChange])
    console.log(preChange)
    console.log(data)
  }
  function changeDataPhoneNumber(dataIndex) {
    let preChange = [...newData]
    let index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], phoneNumber: dataIndex.target.value })
    data.splice(index, 1, { ...data[index], phoneNumber: dataIndex.target.value })
    setnewData([...preChange])
    console.log(preChange)
  }
  function changeDataEmail(dataIndex) {
    let preChange = [...newData]
    let index = dataIndex.target.getAttribute('data-index')
    preChange.splice(index, 1, { ...preChange[index], email: dataIndex.target.value })
    data.splice(index, 1, { ...data[index], email: dataIndex.target.value })
    setnewData([...preChange])
    console.log(preChange)
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
                required="required"
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
                required="required"
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
                required="required"
              ></input>
            </div>
          </div>
          <div>
            <input className="submitBtn" type="submit" value="送出" onClick={updateData}></input>
          </div>
          <iframe id="id_iframe" name="nm_iframe" style={{ display: 'none' }}></iframe>
        </form>
      </div>
      <DataTable
        data={data}
        modify={modify}
        deletData={deletData}
        changeDataName={changeDataName}
        changeDataPhoneNumber={changeDataPhoneNumber}
        changeDataEmail={changeDataEmail}
      />
    </div>
  )
}

export default App
