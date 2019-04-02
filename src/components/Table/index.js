import React from 'react'
import PropTypes from 'prop-types'
import filters from '../Filters/filters'

const Table = (props) => {
  const filter = props.activeFilters.map(a => {
    let data = props.data.filter(filters[a]['callback'])
    return data.map(d => {
      return (
        <tr key={d.id}><td>{d.id}</td><td>{d.value}</td><td>{d.type}</td><td>{d.date}</td></tr>
      )
    })
  })
  const tableItems = props.data.map((t) => {
    return (
      <tr key={t.id}><td>{t.id}</td><td>{t.value}</td><td>{t.type}</td><td>{t.date}</td></tr>
    )
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
