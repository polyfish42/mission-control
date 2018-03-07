import React from 'react';

class ProjectHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {logout_panel_showing: false};

    this.togglePanel = this.togglePanel.bind(this);
    this.logout = this.logout.bind(this);
  }

  render () {
    if (!this.props.loggedIn) {
      return null;
    }

    return (
      <div>
        <nav className="project-header">
          <img src={ window.small_logo } className="project-header__img"/>
          <img src={ window.avatar } className="project-header__img" onClick={this.togglePanel}/>
      </nav>
      { this.state.logout_panel_showing && this.logoutPanel() }
    </div>
    );
  }

  logoutPanel() {
    return (
      <div className="project-header__logout-panel" >
        <p className="project-header__logout" onClick={this.logout}>Log out</p>
      </div>
    );
  }

  logout () {
    this.props.logout();
    this.setState({logout_panel_showing: false});
  }

  togglePanel () {
    if (this.state.logout_panel_showing === true) {
      this.setState({logout_panel_showing: false});
    } else {
      this.setState({logout_panel_showing: true});
    }
  }
}

export default ProjectHeader;
