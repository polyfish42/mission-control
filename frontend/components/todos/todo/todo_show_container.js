import TodoShow from "./todo_show";
import { fetchTodo, deleteTodo } from "../../../actions/todo_actions";
import { withRouter } from 'react-router-dom';
import { openEditTodoForm } from '../../../actions/ui/todo_ui_actions';
import { connect } from "react-redux";

const mapStateToProps = state => {
  debugger
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.todoId
  const todoListId = ownProps.match.params.todoListId

  return {
    fetchTodo: (id) => dispatch(fetchTodo(id)),
    editAction: () => dispatch(openEditTodoForm()),
    deleteAction: () => dispatch(deleteTodo(id)).then(() => ownProps.history.push(`/todolists/${todoListId}`))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoShow));
