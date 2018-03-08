import Tool from "./tool";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    name: "Schedule",
    iconPath: `${window.scheduleToolIcon}`,
    description:
      "Set important dates on a shared schedule. Subscribe to events in Google Cal, iCal, or Outlook."
  };
};

export default connect(mapStateToProps, null)(Tool);
