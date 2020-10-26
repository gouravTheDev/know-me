import React from "react";
import Question from "../components/Question";

class Questions extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Set your answers</h1>
        <hr/>
        <Question number="1" text="Who am I?" optiona="Gourav" optionb="SRK" optionc="Kohli" />
      </div>
    );
  }
}

export default Questions;
