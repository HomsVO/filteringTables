import React,{Component} from 'react';
import Table from './components/Table/';
import Filters from './components/Filters/';
import transaction from './transactions.js'


class App extends Component {
   state = {
        transact:[transaction],
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
                <Table data={this.state.transact} activeFilters={this.state.activeFilters}></Table>
                <Filters filtersToggler={this.filtersToggler}></Filters>
            </div>
       )
    }
}
export default App;