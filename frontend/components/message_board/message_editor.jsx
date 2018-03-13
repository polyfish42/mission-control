import React from 'react';
import ReactQuill from 'react-quill';


class Editor extends React.Component {
  constructor(props) {
   super(props)
   this.state = this.props.message
   this.handleInput = this.handleInput.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
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

 handleSubmit() {
   this.props.handleSubmit(this.state).then(({message}) => this.props.history.push(`/messages/${message.id}`))
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
      <form onSubmit={this.handleSubmit}
          className="editor__form">
       <input value={this.state.title}
          onChange={this.handleInput}
          className="editor__title"
          tabIndex={1}
          placeholder="Title..."/>
       <div className="editor">
         <ReactQuill value={this.state.body}
           modules={this.modules()}
           formats={this.formats()}
           onChange={this.handleChange}
           onFocus={() => console.log("hello")}
           tabIndex={2}
           placeholder={'Write away...'} />
       </div>
       <button type="submit" className="button button--green editor__button">Post this message</button>
      </form>
     </div>
   )
 }
}

export default Editor;
