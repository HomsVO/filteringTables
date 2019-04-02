import React,{Component} from 'react';
import Table from './components/Table/';
import Filters from './components/Filters/';
import filters from './components/Filters/filters.js';
import AddTransaction from './components/AddTransaction/';
import axios from 'axios';
import { Route,Link } from 'react-router-dom';

class App extends Component {
   state = {
        allTransactions:[],
        transact:[],
        activeFilters:[],
    }
    filtersToggler = (e,name) =>{
        if(this.state.activeFilters.includes(name)){
            let arr = this.state.activeFilters;
            arr.splice(arr.indexOf(name),1);
            e.target.className = 'btn filter';
            this.setState({
                activeFilters:arr
            },this.filterTransactions)  
        }else{
            e.target.className = 'btn filter filter-active';
            this.setState({
                activeFilters:this.state.activeFilters.concat(name)
            },this.filterTransactions)    
        }
    }
    getTransactions = () => {
        axios.get(`http://localhost:8000/transactions`)
        .then(res => {
        const transactions = res.data;
        this.setState({ 
            allTransactions:transactions,
            transact:transactions 
        });
        })
    }
    filterTransactions = () =>{
        if(this.state.activeFilters.length > 0){
            let data = this.state.allTransactions;
            this.state.activeFilters.forEach(f =>{
                data = data.filter(filters[f]['callback']);
            })
            this.setState({
                transact:data
            })
        }else{
            this.setState({
                transact:this.state.allTransactions
            })
        }
    }
    render(){
        return (
            <div className='app-wrapper'>
                <Route exact path="/" render={()=>(
                    <div className='home'>
                        <Table data={this.state.transact}></Table>
                        <Filters filtersToggler={this.filtersToggler}></Filters>
                        <div className='add btn'>
                            <Link to='/add/'>Добавить новую транзакцию</Link>
                        </div>
                    </div>
                )}></Route>
                <Route exact path="/add" render={()=>(
                    <div className='home'>
                         <AddTransaction data={this.state.transact}></AddTransaction>
                    </div>
                )}></Route>                
            </div>
        )
    }
    componentDidMount() {
        this.getTransactions();
    }

}
export default App;