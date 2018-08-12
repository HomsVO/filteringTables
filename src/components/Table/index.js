import React from 'react'
import PropTypes from 'prop-types'
import filters from '../Filters/filters'
import transaction from '../../transactions'
const Table = (props) => {
  const filter = props.activeFilters.map(a => {
    let data = transaction.filter(filters[a]['callback'])
    return data.map(d => {
      return (
        <tr key={d.id}><td>{d.id}</td><td>{d.value}</td><td>{d.type}</td><td>{d.date}</td></tr>
      )
    })
  })
  const tableItems = props.data.map((t) => {
    return t.map(t2 => {
      return (
        <tr key={t2.id}><td>{t2.id}</td><td>{t2.value}</td><td>{t2.type}</td><td>{t2.date}</td></tr>
      )
    })
  })
  return (
    <div className='table-wrapper'>
      <table>
        <tbody>
          <tr><td>id</td><td>value</td><td>type</td><td>date</td></tr>
          {(props.activeFilters.length > 0) ? filter : tableItems}
        </tbody>
      </table>
    </div>
  )
}
Table.propTypes = {
  activeFilters: PropTypes.array,
  data: PropTypes.array
}
export default Table
