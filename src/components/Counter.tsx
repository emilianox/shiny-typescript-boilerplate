import React, { Component } from 'react';

export interface ICounterState {
  value: number;
}

export class Counter extends Component<{}, ICounterState> {
  public readonly state: ICounterState = { value: 0 };

  public render() {
    return (
      <>
        <div>{this.state.value}</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </>
    );
  }

  private handleIncrement = () => this.setState({ value: this.state.value + 1 });
  private handleDecrement = () => this.setState({ value: this.state.value - 1 });
}
