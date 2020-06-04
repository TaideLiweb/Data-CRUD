import React from 'react'

function DataValue(props) {
  const {
    newData,
    modify,
    deletData,
    changeDataName,
    changeDataPhoneNumber,
    changeDataEmail,
  } = props

  let dataVal = newData.map((Val, index) => (
    <div className="dataFlex">
      <div>
        <input
          data-index={index}
          value={Val.name}
          onChange={changeDataName}
          disabled={true}
        ></input>
      </div>
      <div>
        <input
          data-index={index}
          value={Val.phoneNumber}
          onChange={changeDataPhoneNumber}
          disabled={true}
        ></input>
      </div>
      <div>
        <input
          data-index={index}
          value={Val.email}
          onChange={changeDataEmail}
          disabled={true}
        ></input>
      </div>
      <div data-index={index} onClick={modify}>
        修改
      </div>
      <div data-index={index} onClick={deletData}>
        刪除
      </div>
    </div>
  ))
  return <div>{dataVal}</div>
}

export default DataValue
