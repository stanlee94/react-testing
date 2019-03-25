import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  renderComments = () => {
    return this.props.comments.map(comment => {
      return <li key={Math.random()}>{comment}</li>;
    });
  };

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ol>{this.renderComments()}</ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
