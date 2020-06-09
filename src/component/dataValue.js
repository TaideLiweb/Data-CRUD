import React from 'react'

function DataValue(props) {
  const {
    data,
    modify,
    deletData,
    changeDataName,
    changeDataPhoneNumber,
    changeDataEmail,
    disabledturn,
  } = props
  return (
    <div>
      {data.map((Val, index) => (
        <div className="flex" key={index}>
          <div>
            <input
              data-index={index}
              value={Val.Name}
              onChange={changeDataName}
              disabled={Val.disabled}
            ></input>
          </div>
          <div>
            <input
              data-index={index}
              value={Val.phoneNumber}
              onChange={changeDataPhoneNumber}
              disabled={Val.disabled}
            ></input>
          </div>
          <div>
            <input
              data-index={index}
              value={Val.email}
              onChange={changeDataEmail}
              disabled={Val.disabled}
            ></input>
          </div>
          <div data-index={index} onClick={modify}>
            {Val.disabled ? '修改' : '完成'}
          </div>
          <div data-index={index} onClick={deletData}>
            刪除
          </div>
        </div>
      ))}
    </div>
  )
}

export default DataValue
