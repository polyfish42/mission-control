import TodoShow from "./todo_show";
import { fetchTodo } from "../../../actions/todo_actions";
import { withRouter } from 'react-router-dom';
import { openEditTodoForm } from '../../../actions/ui/todo_ui_actions';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodo: (id) => dispatch(fetchTodo(id)),
    editAction: () => dispatch(openEditTodoForm())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoShow));
