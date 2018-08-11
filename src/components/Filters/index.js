import React from 'react'
import filters from './filters.js'

const Filters = (props) =>{
    return(
        <div>
            <button onClick={filters.incomeFilter.incomeFilter.bind(props.ctx)}>{filters.incomeFilter.caption}</button>
            <button onClick={filters.expenseFilter.expenseFilter.bind(props.ctx)}>{filters.expenseFilter.caption}</button>
            <button onClick={filters.lastMonthFilter.lastMonthFilter.bind(props.ctx)}>{filters.lastMonthFilter.caption}</button>
            <button onClick={filters.moreThousandFilter.moreThousandFilter.bind(props.ctx)}>{filters.moreThousandFilter.caption}</button>
        </div>
    )
}
export default Filters;