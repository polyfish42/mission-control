import React from "react";

class TruncateText extends React.Component {
  componentDidMount() {
    let truncatedText = this.props.text.slice(0, this.props.maxLength);

    if (text.length > maxLength) {
      truncatedText += "...";
    }
  }

  render() {
    return <p>{this.props.text}</p>;
  }
}

export default TruncateText;
