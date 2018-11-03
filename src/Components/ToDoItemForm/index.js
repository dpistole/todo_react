import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

class ToDoItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thingToDo: '',
    };

    this.isTouched = false;
    autobind(this);
  }

  handleSubmit(event) {
    // prevent form submission
    event.preventDefault();

    const {
      onSubmit,
    } = this.props;

    const {
      thingToDo,
    } = this.state;

    // only submit if not an empty string
    if(thingToDo !== ''){
      onSubmit({
        note: thingToDo,
        isDone: false,
      });
    }
  }

  handleInputChange(event)
  {
    this.isTouched = true;
    const thingToDo = event.target.value;
    this.setState({ thingToDo });
  }

  render() {
    return (
      <div
        className="to-do-item-form"
      >
        <form 
          onSubmit={this.handleSubmit}
          noValidate
        >
          <div className="input-group">
            <div className="label">
              <label htmlFor="item-input">
                What needs doing?
              </label>
            </div>
            <div className="input">
              <input
                id="item-input"
                name="item-input"
                type="text"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="validation-error">
            {
              this.isTouched
                && this.state.thingToDo === ''
                && (
                    <span>This field is required.</span>
                )
            }
            </div>
          </div>
          <div className="controls">
            <button
              type="submit"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    )
  }
}

ToDoItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ToDoItemForm;
