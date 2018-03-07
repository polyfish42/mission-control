import TodoListIndex from './todo_list_index';
import { fetchTodoLists } from '../../../actions/todo_list_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities: { todoLists } }) => {
  return {
    todoLists: Object.values(todoLists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoLists: () => dispatch(fetchTodoLists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndex);
