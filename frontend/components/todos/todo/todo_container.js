import Todo from "./todo";
import { updateTodo } from "../../../actions/todo_actions";
import { connect } from "react-redux";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: todo => {
      dispatch(updateTodo(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
