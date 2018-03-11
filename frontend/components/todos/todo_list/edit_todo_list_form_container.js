import TodoListForm from "./todo_list_form";
import { updateTodoList } from "../../../actions/todo_list_actions";
import { closeEditTodoListForm } from "../../../actions/ui/todo_list_ui_actions";
import { selectTodoList } from "../../../reducers/selectors/todo_list_selectors";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const defaultTodoList = {name: "", description: ""}
  return {
    todoList: ownProps.todoList || defaultTodoList,
    showing: state.ui.todoList.editTodoListFormShowing,
    submitting: state.ui.todoList.todoListFormSubmitting,
    formType: "edit"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: todoList => dispatch(updateTodoList(todoList)),
    close: () => dispatch(closeEditTodoListForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListForm);
