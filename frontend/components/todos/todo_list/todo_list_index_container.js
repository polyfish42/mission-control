import TodoListIndex from "./todo_list_index";
import { fetchTodoLists } from "../../../actions/todo_list_actions";
import { selectTodoLists } from "../../../reducers/selectors/todo_list_selectors";
import { showCreateTodoListForm } from "../../../actions/ui/todo_list_ui_actions";
import { connect } from "react-redux";

const mapStateToProps = ({ entities }) => {
  return {
    todoLists: selectTodoLists(entities)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoLists: () => dispatch(fetchTodoLists()),
    showCreateTodoListForm: () => dispatch(showCreateTodoListForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndex);
