import React from 'react';

const Tool = ({name, iconPath, description}) => {
  return (
    <div className="tool">
      <h1 className="tool__h1">{ name }</h1>
      <div className="tool__line"></div>
      <img className="tool__icon" src={iconPath} />
      <p className="tool__description">{ description }</p>
    </div>
  )
};

export default Tool;
