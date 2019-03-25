import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    shouldComponentRender = () => {
      if (!this.props.authStatus) {
        this.props.history.push("/");
      }
    };

    componentDidMount() {
      this.shouldComponentRender();
    }

    componentDidUpdate() {
      this.shouldComponentRender();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      authStatus: state.authStatus
    };
  };

  const WrappedComponent = connect(mapStateToProps)(ComposedComponent);

  return WrappedComponent;
};
