import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import 'babel-polyfill';

class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {this.setState({editorState});
    console.log(convertToRaw(editorState.getCurrentContent()));}
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render () {
    return (
      <div className="main-content">
        <h1 className="main-content__h1">MessageBoard</h1>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange}/>
      </div>
    );
  }
}

export default MessageBoard;
