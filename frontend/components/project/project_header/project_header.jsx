import React from "react";
import LoadingBar from 'react-redux-loading-bar';
import DropDownMenu from "./dropdown_menu";
import {Link} from "react-router-dom";

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logout_panel_showing: false,
      scrolling: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    this.logout = this.logout.bind(this);
    this.resetParentState = this.resetParentState.bind(this);
  }

  handleScroll() {
    const scrolling = window.scrollY > 1
      ? true
      : false
    this.setState({scrolling})
  }

  componentWillMount() {
    document.addEventListener("scroll", this.handleScroll, false)
  }

  componentWillUnmount() {
    document.addEventListener("scroll", this.handleScroll, false)
  }

  render() {
    if (!this.props.loggedIn) {
      return null;
    }

    return (<div>
      <div className="project-header">
        <LoadingBar progressIncrease={35} className="loading-bar"/>
        <nav className="project-header__nav">
          <Link to="/project">
            <img src={window.smallLogo} className="project-header__img"/>
          </Link>
          <img src={window.avatar} className="project-header__img" id="project-header__img" onClick={this.togglePanel}/>
        </nav>
        {this.state.logout_panel_showing && (<DropDownMenu resetParentState={this.resetParentState} logout={this.logout}/>)}
        <div className={`project-header__scroll ${this.state.scrolling
            ? "project-header__scroll--scrolling"
            : ""}`}></div>
      </div>
    </div>);
  }

  logout() {
    this.props.logout();
  }

  resetParentState() {
    this.setState({logout_panel_showing: false});
  }

  togglePanel() {
    if (this.state.logout_panel_showing === true) {
      this.setState({logout_panel_showing: false});
    } else {
      this.setState({logout_panel_showing: true});
    }
  }
}

export default ProjectHeader;
