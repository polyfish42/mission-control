import React from "react";
import ToolHeaderEdit from './tool_header_edit';

const ToolHeader = ({ title, buttonText, buttonAction, editable }) => {
  return (
    <div className="tool_header">
      <div className="tool_header__edit_wrapper">
        <ToolHeaderEdit editable={ editable }/>
      </div>
      <div className="tool_header__container">
        <button
          className="button button--green tool_header__button"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
        <h1 className="tool_header__h1">{title}</h1>
        <span className={"tool_header__placeholder_" + title} />
      </div>
      <div className="tool_header__line" />
    </div>
  );
};

export default ToolHeader;
