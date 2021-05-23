import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ''
    };
  }

  handleChange = (e) => {
    const newMessage = e.target.value;
    const newCount = this.state.maxChars - newMessage.length;

    this.setState({
      maxChars: newCount,
      message: newMessage
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.message} />
        <p>Characters Left: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
