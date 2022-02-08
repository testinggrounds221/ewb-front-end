import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import history from "./history";
import React from "react";

import Invalid from "./views/Invalid";
import ValidForm from "./views/ValidForm";
import Home from "./views/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { profile: null };
  }
  getProfile = () => this.state.profile;
  setProfile = (prof) => {
    this.setState({ profile: prof });
  };
  render() {
    return (
      <Router history={history}>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home getProfile={this.getProfile} setProfile={this.setProfile} />
            }
          />
          <Route
            path="/invalid"
            element={
              <Invalid
                getProfile={this.getProfile}
                setProfile={this.setProfile}
              />
            }
          />
          <Route
            path="/valid"
            element={
              <ValidForm
                getProfile={this.getProfile}
                setProfile={this.setProfile}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
