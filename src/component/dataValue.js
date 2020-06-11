import React from 'react'

function DataValue(props) {
  const { data, modify, deletData, changeDataName, changeDataPhoneNumber, changeDataEmail } = props

  return (
    <div>
      {data.map((Val, index) => (
        <div className="flex dataValue" key={index}>
          <div>
            <input
              data-index={index}
              value={Val.name}
              onChange={changeDataName}
              disabled={Val.disabled}
            ></input>
            <p>{Val.errMsg1}</p>
          </div>
          <div>
            <input
              data-index={index}
              value={Val.phoneNumber}
              onChange={changeDataPhoneNumber}
              disabled={Val.disabled}
            ></input>
            <p>{Val.errMsg2}</p>
          </div>
          <div>
            <input
              data-index={index}
              value={Val.email}
              onChange={changeDataEmail}
              disabled={Val.disabled}
            ></input>
            <p>{Val.errMsg3}</p>
          </div>
          <button data-index={index} onClick={modify}>
            {Val.disabled ? '修改' : '完成'}
          </button>
          <button data-index={index} onClick={deletData}>
            刪除
          </button>
        </div>
      ))}
    </div>
  )
}

export default DataValue
