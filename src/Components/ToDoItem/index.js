import React from 'react';
import PropTypes from 'prop-types';


const ToDoItem = (props) => {
  const {
    note,
    isDone,
    onClick,
  } = props;

  return (
    <div
      className="to-do-item"
      role="button"
      onClick={() => { onClick(); }}
    >
      <div className="note">
        {note}
      </div>
      <div
        className="checkbox"
      >
        <input
          type="checkbox"
          checked={isDone}
          disabled={isDone}
          onChange={(e) => { e.preventDefault()}}
        />
      </div>
    </div>
  );
}

ToDoItem.propTypes = {
  note: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToDoItem;


