import React from 'react';
import ReactDataGrid from "react-data-grid";

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
  render() {
    return (
      <ReactDataGrid
      rows={this.props.rows}
        columns={columns}
        onColumnResize ={this.handleResize}
      />
    );
  }
}
export default Datagrid;
