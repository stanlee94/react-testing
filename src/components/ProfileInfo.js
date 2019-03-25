import React from "react";
import authRender from "components/authRender";

class ProfileInfo extends React.Component {
  render() {
    return <h1>Profile Info</h1>;
  }
}

export default authRender(ProfileInfo);
