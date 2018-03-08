import TodoListForm from "./todo_list_form";
import { createTodoList } from "../../../actions/todo_list_actions";
import { closeCreateTodoListForm } from "../../../actions/ui/todo_list_ui_actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    todoList: { name: "", description: "" },
    showing: state.ui.todoList.createTodoListFormShowing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: todoList => dispatch(createTodoList(todoList)),
    close: () => dispatch(closeCreateTodoListForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListForm);
