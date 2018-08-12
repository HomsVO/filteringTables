import React from 'react'
import filters from './filters.js'
const Filters = (props) =>{
    return(
        <div>
            <button onClick={props.filtersToggler.bind(this,filters.incomeFilter.name)}>Доход</button>
            <button onClick={props.filtersToggler.bind(this,filters.expenseFilter.name)}>Расход</button>
            <button onClick={props.filtersToggler.bind(this,filters.lastMonthFilter.name)}>За последний месяц</button>
            <button onClick={props.filtersToggler.bind(this,filters.moreThousandFilter.name)}>Больше 1000</button>
        </div>
    )
}
export default Filters;