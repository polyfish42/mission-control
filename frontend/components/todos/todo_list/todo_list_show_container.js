import TodoListShow from "./todo_list_show";
import { selectTodoList } from "../../../reducers/selectors/todo_list_selectors";
import { fetchTodoList, deleteTodoList } from "../../../actions/todo_list_actions";
import { showEditTodoListForm } from "../../../actions/ui/todo_list_ui_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, { match: { params } }) => {
  return {
    todoList: selectTodoList(state.entities, params.todoListId),
    formShowing: state.ui.todoList.editTodoListFormShowing,
    deleteMe: state.entities.todos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTodoList: id => dispatch(fetchTodoList(id)),
    showEditTodoListForm: () => dispatch(showEditTodoListForm()),
    deleteTodoList: id => dispatch(deleteTodoList(id)).then(ownProps.history.push("/todolists"))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoListShow)
);
