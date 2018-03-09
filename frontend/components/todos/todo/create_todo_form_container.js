import TodoForm from "./todo_form";
import { createTodo } from "../../../actions/todo_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    todo: {
      name: "",
      description: ""
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: todo => dispatch(createTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
