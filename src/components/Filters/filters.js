import transaction from "../../transactions";

const filters = {
    incomeFilter:{
        incomeFilter:function(){
            this.setState({
                transact:transaction.filter(t=>t.type === 'доход'),
            })
        },
        caption:'Доход'
    },
    expenseFilter:{
        expenseFilter:function(){
            this.setState({
                transact:transaction.filter(t=>t.type === 'расход'),
            })
        },
        caption:'Расход'
    },
    lastMonthFilter:{
        lastMonthFilter:function(){
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth()-1)
            this.setState({
                transact:transaction.filter(t=> Date.parse(t.date) > lastMonth),
            })
        },
        caption:'За последний месяц'
    },
    moreThousandFilter:{
        moreThousandFilter:function(){
            this.setState({
                transact:transaction.filter(t=> t.value > 1000),
            })
        },
        caption:'Больше тысячи'
    }
}
export default filters;