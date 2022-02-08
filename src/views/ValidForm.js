import React from "react";
import history from "../history";
import server from "../api/backendServer";

class ValidForm extends React.Component {
  async componentDidMount() {
    this.validateProfile(this.props.getProfile());
  }
  validateProfile = async (prof) => {
    if (!prof) {
      history.push("/");
    }
    await server
      .post("/users/validateMail", {
        email: prof.getEmail(),
      })
      .then((response1) => {
        console.log(response1.data);
        if (response1.data.status === "Found") {
          console.log("GOUNF");
        } else history.push("/invalid");
      })
      .catch((e) => console.log(`Error ${e}`));
  };
  render() {
    return <div>VALID USER</div>;
  }
}

export default ValidForm;
