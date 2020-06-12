/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'

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
            />
            <p>{Val.errMsg1}</p>
          </div>
          <div>
            <input
              data-index={index}
              value={Val.phoneNumber}
              onChange={changeDataPhoneNumber}
              disabled={Val.disabled}
            />
            <p>{Val.errMsg2}</p>
          </div>
          <div>
            <input
              data-index={index}
              value={Val.email}
              onChange={changeDataEmail}
              disabled={Val.disabled}
            />
            <p>{Val.errMsg3}</p>
          </div>
          <button type="button" data-index={index} onClick={modify}>
            {Val.disabled ? '修改' : '完成'}
          </button>
          <button type="button" data-index={index} onClick={deletData}>
            刪除
          </button>
        </div>
      ))}
    </div>
  )
}
DataValue.propTypes = {
  data: PropTypes.string.isRequired,
  modify: PropTypes.func.isRequired,
  deletData: PropTypes.func.isRequired,
  changeDataName: PropTypes.func.isRequired,
  changeDataPhoneNumber: PropTypes.func.isRequired,
  changeDataEmail: PropTypes.func.isRequired,
}
export default DataValue
