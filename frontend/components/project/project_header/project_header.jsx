import React from "react";
import LoadingBar from 'react-redux-loading-bar';
import DropDownMenu from "./dropdown_menu";
import { Link } from "react-router-dom";

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logout_panel_showing: false };

    this.togglePanel = this.togglePanel.bind(this);
    this.logout = this.logout.bind(this);
    this.resetParentState = this.resetParentState.bind(this);
  }

  render() {
    if (!this.props.loggedIn) {
      return null;
    }

    return (
      <div className="project-header">
        <LoadingBar progressIncrease={35} className="loading-bar"/>
        <nav className="project-header__nav">
          <Link to="/project">
            <img src={window.smallLogo} className="project-header__img" />
          </Link>
          <img
            src={window.avatar}
            className="project-header__img"
            onClick={this.togglePanel}
          />
        </nav>
        {this.state.logout_panel_showing && (
          <DropDownMenu
            resetParentState={this.resetParentState}
            logout={this.logout}
          />
        )}
      </div>
    );
  }

  logout() {
    this.props.logout();
  }

  resetParentState() {
    this.setState({ logout_panel_showing: false });
  }

  togglePanel() {
    this.setState({ logout_panel_showing: true });
  }
}

export default ProjectHeader;
