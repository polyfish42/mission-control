import PersonPicker from "./person_picker";
import { searchUsers } from "../../actions/user_actions";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    people: ownProps.people,
    // TODO make fetching work in ui reducer
    fetching: false,
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchUsers: () => dispatch(searchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonPicker);
