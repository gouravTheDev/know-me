import React from "react";

class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      duplicate: false,
    };

    this.handleName = this.handleName.bind(this);
    this.checkDuplicate = this.checkDuplicate.bind(this);
  }

  checkDuplicate(event) {
    this.setState({ duplicate: true });
    console.log("checking duplicate");
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center font-weight-bold">
          How well do you know me?
        </h3>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="text-center">Enter your name...</h4>
                <div className="form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Unique Name"
                      onChange={this.handleName}
                    />
                    {this.state.duplicate && (
                      <p style={{ color: "red" }}>This name is already taken</p>
                    )}
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-success"
                      onClick={this.checkDuplicate}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Name;
