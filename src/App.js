import React,{Component} from 'react';
import Table from './components/Table/';
import Filters from './components/Filters/';
import AddTransaction from './components/AddTransaction/';
import axios from 'axios';
import { Route,Link } from 'react-router-dom';

class App extends Component {
   state = {
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
            })  
        }else{
            e.target.className = 'btn filter filter-active';
            this.setState({
                activeFilters:this.state.activeFilters.concat(name)
            })    
        }
    }

    render(){
        return (
            <div className='app-wrapper'>
                <Route exact path="/" render={(props)=>(
                    <div className='home'>
                        <Table data={this.state.transact} activeFilters={this.state.activeFilters}></Table>
                        <Filters filtersToggler={this.filtersToggler}></Filters>
                        <div className='add btn'>
                            <Link to='/add/'>Добавить новую транзакцию</Link>
                        </div>
 
                    </div>
                )}></Route>
                <Route exact path="/add" render={(props)=>(
                    <div className='home'>
                         <AddTransaction data={this.state.transact}></AddTransaction>
                    </div>
                )}></Route>                
            </div>
        )
    }
    componentDidMount() {
    axios.get(`http://localhost:8000/transactions`)
        .then(res => {
        const transactions = res.data;
        this.setState({ transact:transactions });
        })
    }

}
export default App;