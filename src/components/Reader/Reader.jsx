import React, { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index'

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({
      index: state.index + value,
    }));
  };

  componentDidMount() {
   // const saveIndex = Number(localStorage.getItem(LS_KEY))
   

   // this.setState({
   //    index: saveIndex
   // })
   const savedState = localStorage.getItem(LS_KEY);
   if(savedState) {
      this.setState({
         index: Number(savedState),
      })
   }
  }
  
  componentDidUpdate(prevProps, prevState) {
   if(prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index)
   }
  }
  render() {
    const { items } = this.props;
    const { index } = this.state;
    const currentItem = items[index];
    const totalItems = items.length;
    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        <Progress currentRage={index + 1} totalPage={totalItems} />
        <Publication text={currentItem.text} title={currentItem.title} />
      </div>
    );
  }
}
