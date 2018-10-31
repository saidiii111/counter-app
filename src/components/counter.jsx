import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };
  // instead for using constructor we can use arrow func to define this
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDelete = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
