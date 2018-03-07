import Tool from './tool';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    name: "To-dos",
    iconPath: `${ window.todos_tool_icon }`,
    description: "Make lists of work that needs to get done, assign items, set due dates, and discuss."
  };
};

export default connect(mapStateToProps, null)(Tool);
