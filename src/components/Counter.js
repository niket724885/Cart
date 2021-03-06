import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, Form, FormGroup, Row } from "reactstrap";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.productQuantity };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    this.setState(
      prevState => ({
        value: Number(prevState.value) + 1
      }),
      function() {
        this.props.updateQuantity(this.state.value);
      }
    );
    e.preventDefault();
  }

  decrement(e) {
    e.preventDefault();
    if (this.state.value <= 1) {
      return this.state.value;
    } else {
      this.setState(
        prevState => ({
          value: Number(prevState.value) - 1
        }),
        function() {
          this.props.updateQuantity(this.state.value);
        }
      );
    }
  }

  feed(e) {
    this.setState(
      {
        value: this.refs.feedQty.value
      },
      function() {
        this.props.updateQuantity(this.state.value);
      }
    );
  }

  resetQuantity() {
    this.setState({
      value: 1
    });
  }
  
  render() {
    return (
      
      <div>
        <button style={{backgroundColor:"red", margin:4}} onClick={this.decrement}>-</button>
        <input style={{width:90}} ref="feedQty" type="number" value={this.state.value}
              onChange={this.feed.bind(this)}/>
        <button style={{backgroundColor:"green", margin:4}} onClick={this.increment}>+</button>
      </div>
    
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;