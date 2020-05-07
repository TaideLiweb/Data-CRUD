// import React from 'react';
import './App.css';
import React, { useState, useEffect } from 'react';
const Data = [];
// const Data = [
//   {
//     name:'Ted',
//     phoneNumber:'0912345678',
//     email:'ted@gmail.com'
//   },
//   {
//     name:'tony',
//     phoneNumber:'091566578',
//     email:'tony@gmail.com'
//   },
//   {
//     name:'stanley',
//     phoneNumber:'0911414678',
//     email:'stanley@gmail.com'
//   },
//   {
//     name:'barbie',
//     phoneNumber:'0914255678',
//     email:'barbie@gmail.com'
//   }
// ];

function DataTableTitle(props){



  let dataVal = props.newData.map((Val,index)=>
    <div className="dataFlex">
      <div>
        <input data-index = {index} value = {Val.name} onChange = {props.changeDataName} disabled = {true} ></input>
      </div>
      <div>
        <input data-index = {index} value = {Val.phoneNumber}  onChange = {props.changeDataPhoneNumber} disabled = {true}></input>
      </div>
      <div>
        <input data-index = {index} value = {Val.email} onChange = {props.changeDataEmail} disabled = {true}></input>
      </div>
      <div data-index = {index} onClick = {props.modify}>修改</div>
      <div data-index = {index} onClick = {props.deletData}>刪除</div>
    </div>
  )
  
  return (
  <div>
    <div className="dataTableTitle">
      <tr>
        <td>使用者姓名</td>
        <td>使用者電話</td>
        <td>使用者E-mail</td>
      </tr>
    </div>
    <div>
      {dataVal} 
    </div>
  </div>
  )
  
}

function App() {
 
  let [inputDatas,setinputDatas] =useState({
    name:'',
    phoneNumber:'',
    email:''
  });
  let [newData,setnewData] =useState([]) 

  function modify(e){
    let index = e.target.getAttribute("data-index")
    let div = document.getElementsByClassName('dataFlex')[index]
    let box = div.getElementsByTagName('input')
    if(box[0].disabled === true ){
      box[0].disabled = false
      box[1].disabled = false
      box[2].disabled = false

    }else {
      box[0].disabled = true
      box[1].disabled = true
      box[2].disabled = true
    } 
    
    
    console.log(box)
  }

  let upData = (e)=>{
    let phoneNumberPattern = new RegExp(/^09\d{8}$/);
    let emailPattern = new RegExp(/^.*@gmail\.com$/);
    let repeatName = Data.map(val=>val.name)
    let inputName = document.getElementById('name')
    let inputPhoneNumber = document.getElementById('phoneNumber')
    let inputEmail = document.getElementById('email')
    if(repeatName.includes(inputName.value)){
      inputName.setCustomValidity("Name重複");
    }
    else if(!inputEmail.value.match(emailPattern)){
      inputEmail.setCustomValidity('email格式錯誤')
      console.log(inputEmail.value)
    }
    else if(!inputPhoneNumber.value.match(phoneNumberPattern)){
      inputPhoneNumber.setCustomValidity("請輸入開頭09的手機號碼");
      console.log(inputPhoneNumber.value)
    }
    else {
    Data.push(inputDatas)
    setnewData([...Data])}

  }

  function deletData(dataIndex){
    let preDelet = [...newData]
    let index = dataIndex.target.getAttribute("data-index")
    preDelet.splice(index,1)
    Data.splice(index,1)
    setnewData([...preDelet])
    console.log(index)
  }
  function changeDataName(dataIndex){
    let preChange = [...newData]
    let index = dataIndex.target.getAttribute("data-index")
    preChange.splice(index,1,{...preChange[index],name: dataIndex.target.value})
    Data.splice(index,1,{...Data[index],name: dataIndex.target.value})
    setnewData([...preChange])
    console.log(preChange)
    console.log(Data)
  }
  function changeDataPhoneNumber(dataIndex){
    let preChange = [...newData]
    let index = dataIndex.target.getAttribute("data-index")
    preChange.splice(index,1,{...preChange[index],phoneNumber: dataIndex.target.value})
    Data.splice(index,1,{...Data[index],phoneNumber: dataIndex.target.value})
    setnewData([...preChange])
    console.log(preChange)
  }
  function changeDataEmail(dataIndex){
    let preChange = [...newData]
    let index = dataIndex.target.getAttribute("data-index")
    preChange.splice(index,1,{...preChange[index],email: dataIndex.target.value})
    Data.splice(index,1,{...Data[index],email: dataIndex.target.value})
    setnewData([...preChange])
    console.log(preChange)
  }

  return (
    <div className="center">
      <div>
        <h1>Data-CRUD</h1>
        <form action="" target = "nm_iframe">
          <div className="inputFlex">
            <div>
              <span>姓名</span>
              <input id="name" type="text" placeholder="請輸入姓名" onChange={e=>{setinputDatas({...inputDatas, name: e.target.value})}} required="required"></input>
            </div>
            <div>
              <span>電話</span>
              <input id="phoneNumber" type="text" placeholder="請輸入電話" onChange={e=>{setinputDatas({...inputDatas, phoneNumber: e.target.value})}} required="required"></input>
            </div>
            <div>
              <span>e-mail</span>
              <input id="email" type="email" placeholder="請輸入E-mail" onChange={e=>{setinputDatas({...inputDatas, email: e.target.value})}} required="required"></input>
            </div>
          </div>
          <div>
          <input className = "submitBtn" type="submit" value="送出" onClick={upData}></input>
        </div>
        <iframe id="id_iframe" name="nm_iframe" style={{display:"none"}}></iframe>
        </form>
      </div>
      <DataTableTitle newData = {newData} modify = {modify} deletData = {deletData}
       changeDataName = {changeDataName} changeDataPhoneNumber = {changeDataPhoneNumber} changeDataEmail = {changeDataEmail} />
    </div>
    
  );
}

export default App;