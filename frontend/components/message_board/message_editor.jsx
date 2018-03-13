import React from 'react';
import ReactQuill from 'react-quill';


class Editor extends React.Component {
  constructor(props) {
   super(props)
   this.state = this.props.message
   this.handleInput = this.handleInput.bind(this);
   this.handleChange = this.handleChange.bind(this);
 }

 componentWillMount() {
   this.props.formType === "edit" ? this.props.fetchMessage() : undefined
 }

 componentWillReceiveProps(nextProps) {
   this.setState(nextProps.message)
 }

 handleInput(e) {
   this.setState({ title: e.currentTarget.value})
 }

 handleChange(value) {
   this.setState({ body: value })
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
     <div className="main-content">
      <form onSubmit={() => this.props.handleSubmit(this.state)}
          className="editor__form">
       <input value={this.state.title}
          onChange={this.handleInput}
          className="editor__title"
          placeholder="Title..."/>
       <div className="editor">
         <ReactQuill value={this.state.body}
           modules={this.modules()}
           formats={this.formats()}
           onChange={this.handleChange}
           placeholder={'Write away...'} />
       </div>
       <button type="submit" className="button button--green editor__button">Post this message</button>
      </form>
     </div>
   )
 }
}

export default Editor;
