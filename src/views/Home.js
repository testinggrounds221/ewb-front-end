import React from "react";
import GoogleAuth from "../GoogleAuth";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getProfile = props.getProfile;
    this.setProfile = props.setProfile;
  }
  render() {
    return (
      <div>
        <GoogleAuth getProfile={this.getProfile} setProfile={this.setProfile} />
        <Link to="/valid">Register and Pay</Link>
      </div>
    );
  }
}

export default Home;
