import TodoForm from "./todo_form";
import { updateTodo } from "../../../actions/todo_actions";
import { selectTodo } from "../../../reducers/selectors/todo_selectors";
import { openCreateTodoForm, closeCreateTodoForm } from "../../../actions/ui/todo_ui_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const defaultTodo =  {
      name: "",
      assignees: [],
      description: ""
    }

  return {
    todo: selectTodo(state, ownProps.id) || defaultTodo,
    showing: state.ui.todo.createTodoFormShowing,
    submitting: state.ui.todo.createTodoFormSubmitting,
    assigneeInput: ""
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: todo => dispatch(updateTodo(todo)),
    open: () => dispatch(openCreateTodoForm()),
    close: () => dispatch(closeCreateTodoForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
