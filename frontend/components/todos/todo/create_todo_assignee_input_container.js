import TodoAssigneeInput from "./todo_assignee_input";
import { searchUsers } from "../../../actions/user_actions";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    assignees: ownProps.assignees,
    assigneeInput: ownProps.assigneeInput,
    cancelAssignee: ownProps.cancelAssignee,
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchUsers: () => dispatch(searchUsers()),
    assignTodo: ownProps.assignTodo,
    backspaceAssignee: ownProps.backspaceAssignee,
    readOnly: ownProps.readOnly
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAssigneeInput);
