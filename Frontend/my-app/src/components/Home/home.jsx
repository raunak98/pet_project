import React from "react";
import DataGridList from "../grid/dataGridList";
import GridControls from "../grid/gridControls";
import { getData } from "../../componentAPI";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedCandidates: [],
      loading: true,
    };
  }

  getCandidates = () => {
    getData("getAllCandidates").then((res) => {
      this.setState({ data: res.data, loading: false });
    });
  };

  updateSelectedCandidates = (selectedCandidates) => {
    this.setState({ selectedCandidates });
  };

  componentDidMount() {
    this.getCandidates();
  }

  render() {
    return this.state.loading ? (
      <div className="loader">
        <h1>Loading Data......</h1>
      </div>
    ) : (
      <React.Fragment>
        <GridControls
          selectedCandidatesValues={this.state.selectedCandidates}
          getCandidates={this.getCandidates}
        />
        <DataGridList
          rows={this.state.data}
          handleRowSelection={this.updateSelectedCandidates}
        />
      </React.Fragment>
    );
  }
}

export default Home;
