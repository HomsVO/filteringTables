const filters = {
  incomeFilter: {
    callback: function (t) {
      return t.type === 'доход'
    },
    name: 'incomeFilter'
  },
  expenseFilter: {
    callback: function (t) {
      return t.type === 'расход'
    },
    name: 'expenseFilter'
  },
  lastMonthFilter: {
    callback: function (t) {
      let d = new Date()
      return Date.parse(t.date) > d.setMonth(d.getMonth() - 1)
    },
    name: 'lastMonthFilter'
  },
  moreThousandFilter: {
    callback: function (t) {
      return t.value > 1000
    },
    name: 'moreThousandFilter'
  }
}
export default filters
