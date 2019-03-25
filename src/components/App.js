import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import ProfileInfo from "components/ProfileInfo";
import { changeAuth } from "actions";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  handleClick = () => {
    this.props.changeAuth(this.props.authStatus);
  };

  renderButton = () => {
    const text = this.props.authStatus ? "Sign Out" : "Sign In";
    return <button onClick={this.handleClick}>{text}</button>;
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/" exact component={CommentList} />
        <Route path="/post" exact component={CommentBox} />
        <Route path="/profile" exact component={ProfileInfo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authStatus: state.authStatus
  };
};

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
