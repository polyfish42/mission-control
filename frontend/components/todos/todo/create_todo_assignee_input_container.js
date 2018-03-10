import TodoAssigneeInput from "./todo_assignee_input";
import { searchUsers } from "../../../actions/user_actions";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    assignee: ownProps.assignee,
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchUsers: () => dispatch(searchUsers()),
    assignTodo: ownProps.assignTodo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAssigneeInput);
