import React from 'react'
import DataTitle from './dataTitle'
import DataValue from './dataValue'

function DataTable(props) {
  const {
    data,
    modify,
    deletData,
    changeDataName,
    changeDataPhoneNumber,
    changeDataEmail,
    disabledOn,
  } = props
  return (
    <div>
      <DataTitle />
      <DataValue
        data={data}
        modify={modify}
        deletData={deletData}
        changeDataName={changeDataName}
        changeDataPhoneNumber={changeDataPhoneNumber}
        changeDataEmail={changeDataEmail}
        disabledOn={disabledOn}
      />
    </div>
  )
}
export default DataTable
