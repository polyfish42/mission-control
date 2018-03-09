import TodoForm from "./todo_form";
import { createTodo } from "../../../actions/todo_actions";
import { openCreateTodoForm, closeCreateTodoForm } from "../../../actions/ui/todo_ui_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    todo: {
      name: "",
      description: ""
    },
    showing: state.ui.todo.createTodoFormShowing,
    submitting: state.ui.todo.createTodoFormSubmitting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: todo => dispatch(createTodo(todo)),
    open: () => dispatch(openCreateTodoForm()),
    close: () => dispatch(closeCreateTodoForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
