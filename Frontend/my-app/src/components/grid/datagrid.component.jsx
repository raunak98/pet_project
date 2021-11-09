import React from 'react';
import ReactDataGrid from "react-data-grid";
import axios from 'axios';

const columns = [
    { key: "cid", name: "ID", editable: true,resizable: true},
    { key: "cname", name: "Name", editable: true ,resizable: true},
    { key: "cemail", name: "Email", editable: true ,resizable: true},
    { key: "csurname", name: "Surname", editable: true,resizable: true },
    { key: "status", name: "Status", editable: true ,resizable: true},
    { key: "outcome", name: "Outcome", editable: true ,resizable: true},
    { key: "possible_role", name: "Role", editable: true ,resizable: true},
    { key: "registration_date", name: "Registration Date", editable: true ,resizable: true},
    { key: "last_change_date", name: "Last Change Date", editable: true ,resizable: true},
    { key: "cv_screening_date", name: "CV Screening Date", editable: true ,resizable: true}
  ];
  
class Datagrid extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/list')
        .then(res=>{
            console.log(res.data)
            this.setState({data:res.data})
        }
        )
    }
    
  render() {
    return (
      <ReactDataGrid
      rows={this.state.data}
        columns={columns}
        onColumnResize ={this.handleResize}
      />
    );
  }
}

export default Datagrid;
