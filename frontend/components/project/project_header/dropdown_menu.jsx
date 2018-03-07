import React from 'react';
import onClickOutside from "react-onclickoutside";

class DropDownMenu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {logout_panel_showing: true};
    this.logout = this.logout.bind(this);
  }

  handleClickOutside (e) {
    this.setState({logout_panel_showing: false});
    this.props.resetParentState();
  }

  menu () {
    return (
      <div className="project-header__logout-panel">
        <p className="project-header__logout" onClick={this.logout}>Log out</p>
      </div>
    );
  }

  render () {
    return (
      <div>
        { this.state.logout_panel_showing && this.menu() }
      </div>
    );
  }

  logout () {
    this.props.logout();
    this.setState({logout_panel_showing: false});
    this.props.resetParentState();
  }

  togglePanel () {
    if (this.state.logout_panel_showing === true) {
      this.setState({logout_panel_showing: false});
    } else {
      this.setState({logout_panel_showing: true});
    }
  }
}

export default onClickOutside(DropDownMenu);
