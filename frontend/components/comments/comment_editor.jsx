import React from 'react';
import ReactQuill from 'react-quill';


class Editor extends React.Component {
  constructor(props) {
   super(props)
   this.state = props.comment
   this.handleInput = this.handleInput.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 componentDidMount() {
  this.nameInput.focus();
 }

 handleInput(e) {
   this.setState({ title: e.currentTarget.value})
 }

 handleChange(value) {
   this.setState({ body: value })
 }

 handleSubmit() {
  this.props.handleSubmit({body: this.state.body, [this.props.idName]: this.props.id})
 }

 modules() {
   return {
    toolbar: [
      { 'header': '1'},
      'bold',
      'italic',
      'strike',
      { 'color': [] },
      { 'background': [] },
      'blockquote',
      'link',
      'image',
      {'list': 'ordered'},
      {'list': 'bullet'}
    ]
  }
}

formats() {
  [
  'header', 'font', 'size',
  'bold', 'italic', 'strike', 'blockquote',
  'list', 'bullet',
  'link', 'image'
  ]
}

render() {
   return (
      <form onSubmit={this.handleSubmit} >
        <div className={"comment-editor" + (this.props.readOnly ? " comment-editor--readOnly" : "")}>
          <ReactQuill value={this.state.body}
            modules={this.props.readOnly ? {toolbar: null} : this.modules()}
            readOnly={this.props.readOnly}
            formats={this.formats()}
            onChange={this.handleChange}
            tabIndex={2}
            placeholder={'Write away...'}
            ref={input => {this.nameInput = input;}}/>
        </div>
        {
          this.props.readOnly === false &&
          <button type="submit" className="button button--green comment-form__button">Add this comment</button>
        }
      </form>
   )
 }
}

export default Editor;
