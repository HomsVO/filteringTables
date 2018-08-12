import React from 'react'
import filters from './filters.js'
import PropTypes from 'prop-types'
const Filters = (props) => {
  return (
    <div className='btn-wrapper'>
      <button className='btn filter' onClick={(e) => { props.filtersToggler(e, filters.incomeFilter.name, this) }}>Доход</button>
      <button className='btn filter' onClick={(e) => { props.filtersToggler(e, filters.expenseFilter.name, this) }}>Расход</button>
      <button className='btn filter' onClick={(e) => { props.filtersToggler(e, filters.lastMonthFilter.name, this) }}>За последний месяц</button>
      <button className='btn filter' onClick={(e) => { props.filtersToggler(e, filters.moreThousandFilter.name, this) }}>Больше 1000</button>
    </div>
  )
}
Filters.propTypes = {
  filtersToggler: PropTypes.func.isRequired
}
export default Filters
