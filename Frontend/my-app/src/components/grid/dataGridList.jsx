import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./gridConstant";

class DataGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const selectedData = this.props.rows.filter((row) => e.includes(row.id));
    this.props.handleRowSelection(selectedData);
  };

  render() {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={this.props.rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={this.handleChange}
        />
      </div>
    );
  }
}
export default DataGridList;
