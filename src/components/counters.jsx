import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    title: "My Shopping Cart",
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  deleteHandler = counterId => {
    console.log("counterId:", counterId);
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== counterId)
    });
  };

  render() {
    const banner = <div className="page-header">{this.state.title}</div>;
    const counters = this.state.counters.map(counter => (
      <Counter
        key={counter.id}
        id={counter.id}
        value={counter.value}
        deleteHandler={this.deleteHandler}
      />
    ));

    return (
      <span>
        {banner} {counters}
      </span>
    );
  }
}

export default Counters;
