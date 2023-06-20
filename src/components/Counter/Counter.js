import React, { Component } from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';

class Counter extends Component {

   static defaultProps = {
      initialValue: 0,
   };

   static propTypes = {
      // 
   };

  state = {
   value: this.props.initialValue,
  };

  handleIncrement = () => {
   this.setState(prevState => ({
      value: prevState.value + 1,
   }))
  };

  handleDecrement = () => {
   this.setState(prevState => ({
      value: prevState.value - 1,
   }))
  }

  render() {
   return (<div className="Counter">
   {/* <span className="Counter__value">{this.state.value}</span> */}
   <Value value={this.state.value}/>
   <Controls 
   onIncrement={this.handleIncrement} 
   onDecrement={this.handleDecrement} />   
 </div>)
  }
}

export default Counter;