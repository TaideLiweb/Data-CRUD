/* eslint-disable object-curly-newline */
import React from 'react'
import PropTypes from 'prop-types'
import DataTitle from './dataTitle'
import DataValue from './dataValue'

function DataTable(props) {
  const { data, modify, deletData, changeDataName, changeDataPhoneNumber, changeDataEmail } = props
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
      />
    </div>
  )
}
DataTable.propTypes = {
  data: PropTypes.string.isRequired,
  modify: PropTypes.func.isRequired,
  deletData: PropTypes.func.isRequired,
  changeDataName: PropTypes.func.isRequired,
  changeDataPhoneNumber: PropTypes.func.isRequired,
  changeDataEmail: PropTypes.func.isRequired,
}
export default DataTable
