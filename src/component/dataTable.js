import React from 'react'
import DataTitle from './dataTitle'
import DataValue from './dataValue'

function DataTable(props) {
  const {
    newData,
    modify,
    deletData,
    changeDataName,
    changeDataPhoneNumber,
    changeDataEmail,
  } = props
  return (
    <div>
      <DataTitle />
      <DataValue
        newData={newData}
        modify={modify}
        deletData={deletData}
        changeDataName={changeDataName}
        changeDataPhoneNumber={changeDataPhoneNumber}
        changeDataEmail={changeDataEmail}
      />
    </div>
  )
}
export default DataTable
