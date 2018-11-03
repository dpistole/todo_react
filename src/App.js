import React, { Component } from 'react';
import autobind from 'class-autobind';
import _ from 'lodash';

import toDoItems from '__mocks__/toDoItems';

import ToDoList from 'Components/ToDoList';
import ToDoItemForm from 'Components/ToDoItemForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      toDoItems,
      nextId: (toDoItems.length + 1),
    };
    autobind(this);
  }

  getToDoItems = () => {
    return this.state.toDoItems;
  }

  addNewItem(item) {
    const {
      toDoItems,
      nextId,
    } = this.state;
    // create our new array of toDoItems
    const nextToDoItems = [
      ...toDoItems,
      {
        id: nextId,
        ...item,
      }
    ];
    this.setState({
      isFormOpen: false,
      toDoItems: nextToDoItems,
      nextId: (nextId + 1),
    });
  }

  completeItem(item) {
    const {
      toDoItems, 
    } = this.state;
    // copy our array of toDoItems
    const nextToDoItems = [
      ...toDoItems,
    ];
    // find the item in our array
    const itemToComplete = _.find(nextToDoItems, (toDoItem) => toDoItem.id === item.id);
    // if we found it, mark it completed
    if(itemToComplete) itemToComplete.isDone = true;
    // update state with our new toDoitems
    this.setState({
      toDoItem: nextToDoItems,
    });
  }

  render() {
    const {
      isFormOpen,
    } = this.state;

    return (
      <div className="app">
        <div className="container">
          <div className="title">
            <h1>ToDo App</h1>
          </div>
          <div className="controls">
            {
              isFormOpen
                ?
                <button
                  onClick={() => { this.setState({ isFormOpen: false }) }}
                >
                  Back To List
                </button>
                :
                <button
                  onClick={() => { this.setState({ isFormOpen: true }) }}
                >
                  Add New Item
                </button>
            }

          </div>
          {
            isFormOpen
              ? <ToDoItemForm onSubmit={this.addNewItem} />
              : <ToDoList
                  items={this.getToDoItems()}
                  onItemClick={this.completeItem}
                />
          }
        </div>
      </div>
    );
  }
}

export default App;
