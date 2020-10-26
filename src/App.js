import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Gourav",
    };
    this.checkDuplicate 
  }

  checkDuplicate(){
    console.log("Hi")
  }

  render() {
    return (
      <div>
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
                      />
                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-success" onClick={checkDuplicate}>Continue</button>
                    </div>
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

export default App;
