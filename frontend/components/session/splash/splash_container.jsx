import Splash from "./splash";
import { connect } from "react-redux";
import { demo } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => {
  return {
    demo: () => dispatch(demo())
  };
};

export default connect(null, mapDispatchToProps)(Splash);
