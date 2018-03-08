import React from "react";

const ToolHeader = ({ title, buttonText, buttonAction }) => {
  return (
    <div className="tool_header">
      <div className="tool_header__edit_wrapper">
        <div className="tool_header__edit" />
      </div>
      <div className="tool_header__container">
        <button
          className="button button--green tool_header__button"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
        <h1 className="tool_header__h1">{title}</h1>
        <span className="tool_header__filter" />
      </div>
      <div className="tool_header__line" />
    </div>
  );
};

export default ToolHeader;
