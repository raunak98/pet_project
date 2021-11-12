import React from 'react';
import axios from 'axios';
import Datagrid from './grid/datagrid.component';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/list')
            .then(res=>{
                this.setState({data:res.data})
                    }
                )
    }   

    render(){
        return(
            <Datagrid rows={this.state.data} />
        )
    }


}
export default Home;