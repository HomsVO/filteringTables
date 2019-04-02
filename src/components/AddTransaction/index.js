import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class AddTransaction extends React.Component {
      state = {
      id:this.props.data.length + 1,
      value: null,
      type: 'доход',
      date: null
    }

  handleTransactValue = (e) => {
    this.setState({
      value:e.target.value
    })
  }
 handleTransactType = (e) => {
    this.setState({
      type:e.target.value
    })
  }
  handleTransactDate = (e) => {
    this.setState({
      date:e.target.value
    })
  }
  pushTransaction = () => {
    this.props.data.push(this.state);
  }
  render(){
    return (
      <div className='btn-wrapper'>
        <form>
          <label> Сумма </label>
          <br/>
          <input type='number' name='sum' id='value' onChange={this.handleTransactValue} />
          <br/>
          <label>Тип</label>
          <br/>
          <select onChange={this.handleTransactType}>
            <option value='доход'>Доход</option>
            <option value='расход'>Расход</option>
          </select>
          <br/>
          <label>Дата</label>
          <br/>
          <input type='date' name='date' id='date' onChange={this.handleTransactDate} />
          <br/>
          <div className='add btn'>
              <Link to='/' onClick={this.pushTransaction}>Добавить транзакцию</Link>
          </div>
          
        </form>
      </div>
    )
  }
  
}
export default AddTransaction
