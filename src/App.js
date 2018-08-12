import React,{Component} from 'react';
import Table from './components/Table/';
import Filters from './components/Filters/';
import transaction from './transactions.js'


class App extends Component {
    state = {
        transact:[transaction],
        activeFilters:[],
    }
    filtersToggler = (name,e) =>{
        if(this.state.activeFilters.includes(name)){
            let arr = this.state.activeFilters;
            arr.splice(arr.indexOf(name),1);
            e.target.className = '';
            this.setState({
                activeFilters:arr
            })  
        }else{
            e.target.className = 'active';
            this.setState({
                activeFilters:this.state.activeFilters.concat(name)
            })    
        }
    }
    render(){
        return (
            <div>
                <Table data={this.state.transact} activeFilters={this.state.activeFilters}></Table>
                <Filters filtersToggler={this.filtersToggler}></Filters>
                <h1>{this.state.activeFilters}</h1>
            </div>
       )
    }
}
export default App;