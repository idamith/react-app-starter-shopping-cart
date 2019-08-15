import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBatchClasses()}>{this.getCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.deleteHandler(this.props.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBatchClasses() {
    const { value: count } = this.state;
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }

  getCount() {
    const { value: count } = this.state; // object descturction
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
