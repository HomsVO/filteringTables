import React,{Component} from 'react';
import Table from './components/Table/';
import Filters from './components/Filters/';
import transaction from './transactions.js'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            transact:transaction
        }
    }
    render(){
        return (
            <div>
                <Table data={this.state.transact}></Table>
                <Filters ctx={this}></Filters>
            </div>
       )
    }
}
export default App;