import React,{Component} from 'react';
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
            </div>
       )
    }
}
export default App;