import React, { Component } from "react";
import { postData } from "../../componentAPI";
class RegisterCandidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      surname: "",
      status: "",
      outcome: "",
      role: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      cname: this.state.name,
      email: this.state.email,
      surname: this.state.surname,
      cstatus: this.state.status,
      outcome: this.state.outcome,
      role: this.state.role,
    };
    postData("registerCandidate", data).then((res) => {
      alert("Candidate Registered Successfully");
    });
  };

  render() {
    const { name, email, surname, status, outcome, role } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label>Candidate Name </label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Email</label>
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Surname</label>
            </div>
            <div>
              <input
                type="text"
                name="surname"
                value={surname}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Status :</label>
            </div>
            <div>
              <select value={status} name="status" onChange={this.handleChange}>
                <option value="">-----Select-----</option>
                <option value="150">CV Screening</option>
                <option value="151">TA need to be sent</option>
                <option value="152">TA in progress</option>
                <option value="153">TA in evaluation</option>
                <option value="154">CCI check</option>
                <option value="155">Internal interview planning</option>
                <option value="156">Internal interview planned</option>
                <option value="157">Client interview planning</option>
                <option value="158">Client interview planned</option>
                <option value="159">Screening is completed</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>Outcome :</label>
            </div>
            <div>
              <select
                value={outcome}
                name="outcome"
                onChange={this.handleChange}
              >
                <option value="">-----Select-----</option>
                <option value="105">IN Progress</option>
                <option value="106">Declined</option>
                <option value="107">Approved</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>Role :</label>
            </div>
            <div>
              <select value={role} name="role" onChange={this.handleChange}>
                <option value="">-----Select-----</option>
                <option value="110">Not Defined</option>
                <option value="111">Associate</option>
                <option value="112">Junior developer</option>
                <option value="113">Mid-level developer</option>
                <option value="114">Senior developer</option>
                <option value="115">Senior technical developer</option>
                <option value="116">Senior lead developer</option>
                <option value="117">Principal engineer</option>
                <option value="118">Frontend Technical analyst</option>
              </select>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterCandidates;
