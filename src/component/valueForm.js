import React, { useState } from 'react'

function ValueFrom(props) {
  const {
    modify,
    deletData,
    changeDataName,
    changeDataPhoneNumber,
    changeDataEmail,
    disabledOn,
    index,
    value,
  } = props

  return (
    <div className="flex" key={index}>
      <div>
        <input
          data-index={index}
          value={value.Name}
          onChange={changeDataName}
          disabled={disabledOn}
        ></input>
      </div>
      <div>
        <input
          data-index={index}
          value={value.phoneNumber}
          onChange={changeDataPhoneNumber}
          disabled={disabledOn}
        ></input>
      </div>
      <div>
        <input
          data-index={index}
          value={value.email}
          onChange={changeDataEmail}
          disabled={disabledOn}
        ></input>
      </div>
      <div data-index={index} onClick={modify}>
        {disabledOn ? '修改' : '完成'}
      </div>
      <div data-index={index} onClick={deletData}>
        刪除
      </div>
    </div>
  )
}
export default ValueFrom
