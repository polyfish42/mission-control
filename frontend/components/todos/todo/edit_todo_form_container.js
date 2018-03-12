import TodoForm from "./todo_form";
import { updateTodo } from "../../../actions/todo_actions";
import { selectAssignees } from "../../../reducers/selectors/todo_selectors";
import { openCreateTodoForm, closeCreateTodoForm } from "../../../actions/ui/todo_ui_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const defaultTodo =  {
      name: "",
      assigneeIds: [],
      description: ""
    }

  const todo = state.entities.todos[ownProps.id] || defaultTodo
  return {
    todo: todo,
    assignees: selectAssignees(state, todo),
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
