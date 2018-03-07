import React from 'react';
import ProjectHeaderContainer from './project_header/project_header_container';
import Project from './project';

class MemberArea extends React.Component {
  render () {
    return (
      <div>
        <ProjectHeaderContainer />
        <Project />
      </div>
    );
  }
}

export default MemberArea;
