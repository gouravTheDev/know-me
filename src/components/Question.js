import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedOption: null
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event){
    // console.log(event.target)
  }
  render() {
    return (
      <div className="text-center">
        <h1>
          {this.props.number}. {this.props.text}
        </h1>
        <div className="row col-md-8 col-sm-12 mx-auto my-4">
          <div className="col-4">
            <div className="card shadow" style={{ cursor: "pointer" }} onClick={() => this.handleSelect("optionA")}>
              <div className="card-body">{this.props.optiona}</div>
            </div>
          </div>
          <div className="col-4">
            <div className="card shadow" style={{ cursor: "pointer" }} onClick={() => this.handleSelect("optionB")}>
              <div className="card-body">{this.props.optionb}</div>
            </div>
          </div>
          <div className="col-4">
            <div className="card shadow" style={{ cursor: "pointer" }} onClick={() => this.handleSelect("optionB")}>
              <div className="card-body">{this.props.optionc}</div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary shadow">Save and next</button>
      </div>
    );
  }
}

export default Question;
