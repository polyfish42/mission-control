import React from 'react';

const Person = (props) => {
  const {person, removeLastPerson, clickable} = props;

  return (
    <div>
      {
        person && (<div className="todo-assignee"
        onClick={() => clickable === true ? removeLastPerson() : null}>
        { person.name }
        <span className="todo-assignee__x"> x</span>
      </div>)
      }
    </div>
  );
}

export default Person;
