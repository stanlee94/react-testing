import React from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions";
import authRender from "components/authRender";

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = { userInput: "" };
  }

  handleChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    //Do something here
    this.props.saveComment(this.state.userInput);

    this.setState({ userInput: "" });
  };

  handleClick = () => {
    this.props.fetchComments();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add comment</h4>
          <textarea onChange={this.handleChange} value={this.state.userInput} />
          <div>
            <button>Enter</button>
          </div>
        </form>
        <button id="fetch-comments" onClick={this.handleClick}>
          Fetch comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  {
    saveComment,
    fetchComments
  }
)(authRender(CommentBox));
