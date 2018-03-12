import TodoShow from "./todo_show";
import { fetchTodo } from "../../../actions/todo_actions";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodo: (id) => dispatch(fetchTodo(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoShow));
