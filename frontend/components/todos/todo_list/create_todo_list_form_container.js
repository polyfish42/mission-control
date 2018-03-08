import TodoListForm from "./todo_list_form";
import { createTodoList } from "../../../actions/todo_list_actions";
import { connect } from "react-redux";

const mapStateToProps = () => {
  return {
    todoList: { name: "", description: "" }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: todoList => dispatch(createTodoList(todoList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListForm);
