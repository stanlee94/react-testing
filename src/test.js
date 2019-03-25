import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    //write code that you wants to reuse

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    //your code here
  };

  return connect(mapStateToProps)(ComposedComponent);
};
