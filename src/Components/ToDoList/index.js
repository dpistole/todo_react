import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ToDoItem from 'Components/ToDoItem';

const ToDoList = (props) => {
  const {
    items,
    onItemClick,
  } = props;

  const numberOfItemsLeft = _.filter(items, (item) => !item.isDone).length;

  return (
    <div className="to-do-list">
      {
        items.length && items.map((item, index) => (
          <ToDoItem
            note={item.note}
            onClick={() => onItemClick(item)}
            isDone={item.isDone}
            key={index}
          />
        ))
      }
      <div className="footer">
        <p>{numberOfItemsLeft} of {items.length} items remaining.</p>
      </div>
    </div>
  );
}

ToDoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    note: PropTypes.string,
    isDone: PropTypes.bool,
  })),
  onItemClick: PropTypes.func,
};

ToDoList.defaultProps = {
  items: [],
};

export default ToDoList;


