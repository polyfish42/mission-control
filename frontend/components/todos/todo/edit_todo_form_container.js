import TodoForm from "./todo_form";
import { updateTodo } from "../../../actions/todo_actions";
import { selectAssignees } from "../../../reducers/selectors/todo_selectors";
import { openCreateTodoForm, closeEditTodoForm } from "../../../actions/ui/todo_ui_actions";
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
    showing: state.ui.todo.editTodoFormShowing,
    submitting: state.ui.todo.createTodoFormSubmitting,
    assigneeInput: "",
    formType: "edit"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: todo => dispatch(updateTodo(todo)),
    open: () => dispatch(openEditTodoForm()),
    close: () => dispatch(closeEditTodoForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
