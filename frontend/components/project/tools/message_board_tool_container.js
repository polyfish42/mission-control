import Tool from "./tool";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    name: "Message Board",
    iconPath: `${window.messageToolIcon}`,
    description:
      "Post announcements, pitch ideas, progress updates, etc. and keep feedback on-topic."
  };
};

export default connect(mapStateToProps, null)(Tool);
