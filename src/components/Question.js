import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: props.number,
      selectedOption: null,
      optionA: false,
      optionB: false,
      optionC: false,
      answer: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event, option) {
    // console.log(option);
    this.setState({ selectedOption: option });
    switch (option) {
      case 1: {
        this.setState({
          optionA: true,
          optionB: false,
          optionC: false,
        });
        break;
      }
      case 2: {
        this.setState({
          optionA: false,
          optionB: true,
          optionC: false,
        });
        break;
      }
      case 3: {
        this.setState({
          optionA: false,
          optionB: false,
          optionC: true,
        });
        break;
      }
    }
    // console.log(event.target)
  }

  saveQuestion(){
    console.log(this.state)
    this.setState({answer: this.state.selectedOption})
  }

  render() {
    return (
      <div className="text-center">
        <h1>
          {this.props.number}. {this.props.text}
        </h1>
        <div className="row col-md-8 col-sm-12 mx-auto my-4">
          <div className="col-4">
            <div
              className={
                "card shadow " + (this.state.optionA ? "selected" : "")
              }
              style={{ cursor: "pointer" }}
              onClick={(e) => this.handleSelect(e, 1)}
            >
              <div className="card-body">{this.props.optiona}</div>
            </div>
          </div>
          <div className="col-4">
            <div
              className={
                "card shadow " + (this.state.optionB ? "selected" : "")
              }
              style={{ cursor: "pointer" }}
              onClick={(e) => this.handleSelect(e, 2)}
            >
              <div className="card-body">{this.props.optionb}</div>
            </div>
          </div>
          <div className="col-4">
            <div
              className={
                "card shadow " + (this.state.optionC ? "selected" : "")
              }
              style={{ cursor: "pointer" }}
              onClick={(e) => this.handleSelect(e, 3)}
            >
              <div className="card-body">{this.props.optionc}</div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary shadow" onClick={() => this.saveQuestion()}>Save and next</button>
        <br/><br/>
            <p>{this.state.answer}</p>
      </div>
    );
  }
}

export default Question;
