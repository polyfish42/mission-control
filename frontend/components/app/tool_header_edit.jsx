import React from 'react';
import onClickOutside from "react-onclickoutside";

class ToolHeaderEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
    this.toggle = this.toggle.bind(this);
    this.menuClassOpen = this.menuClassOpen.bind(this);
  }

  handleClickOutside(e) {
    if (!this.menu.contains(e.target)) {
      this.setState({open: false})
    }
  }

  toggle() {
    const newOpen = this.state.open === true ? false : true
    this.setState({open: newOpen})
  }

  menuClassOpen() {
    return this.state.open ? " tool_header__edit-menu--opened" : ""
  }

  render() {
    const { editable } = this.props;
    return (
      <div>
        {
          editable &&
          <div className="tool_header__edit-container">
            <div className="tool_header__edit" onClick={this.toggle}>
          </div>
          <div className="tool_header__edit-animation-wrapper" ref={i => this.menu = i}>
            <div className={ "tool_header__edit-menu" + this.menuClassOpen()}>
              <div className="tool_header__edit-menu-button" onClick={this.toggle}></div>
              <div className="tool_header__edit-menu-edit" onClick={this.toggle}>
                <img className="tool_header__edit-wrench" src={window.editWrench}/>
                <div className="tool_header_edit-menu-edit-text">
                  Edit
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default onClickOutside(ToolHeaderEdit);
