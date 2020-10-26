import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Questions from "./views/Questions";
import Answers from "./views/Answers";
import Score from "./views/Score";
import Name from "./views/Name";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/questions/:username">
            <Questions />
          </Route>
          <Route exact path="/scores/:username">
            <Score />
          </Route>
          <Route exact path="/giveanswer/:username">
            <Answers />
          </Route>
          <Route path="/">
            <Name />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
