import React, { Component } from 'react';
class App extends Component {

  getToDoItems = () => {
    return [
      {
        note: 'Do this.',
        isDone: false,
      },
      {
        note: 'Do that.',
        isDone: false,
      },
      {
        note: 'Do those.',
        isDone: true,
      },
      {
        note: 'Do these.',
        isDone: true,
      },
      {
        note: 'Do them.',
        isDone: true,
      },
      {
        note: 'Do nothing.',
        isDone: true,
      },
    ];
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="title">
            <h1>ToDo App</h1>
          </div>
          <div className="controls">
              <button>Add New Item</button>
          </div>
          <div className="to-do-list">
            {
              this.getToDoItems().map((item, index) => (
                <div className="to-do-item" key={index}>
                  <div className="note">
                    {item.note}
                  </div>
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      checked={item.isDone}
                      disabled={item.isDone}
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="footer">
            <p>2 of 6 items remaining.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
