import React, { Component } from "react";
//import React from "../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
//import ReactDOM from "../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom";
import ReactDOM from "react-dom";
import "./index.css";
import RegForm from "./components/reg-form";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogForm from "./components/log-form.js";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={LogForm} exact />
            <Route path="/registration" component={RegForm} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
