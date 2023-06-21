import React, {Component} from "react";
import './ColorPicker.css';

class ColorPicker extends Component {

   state = {
      activeOptionInx: 2,
   }

   setActiveIndex = (index) => {
      this.setState({
         activeOptionInx: index,
      })
   }

   makeOptionClassName = (index) => {
      const optionClasses = ['ColorPicker__option'];

      if (index === this.state.activeOptionInx) {
         optionClasses.push('ColorPicker__option--active') 
      }

      return optionClasses.join(' ')
   }
   render() {
      const {activeOptionInx} = this.state;
      const {options} = this.props;
      const {label} = options[activeOptionInx]
      return (
         <div className="ColorPicker">
         <h2 className="ColorPicker__title">Color Picker</h2>
         <p>Выбран цвет: {label}</p>
         <div>
           {options.map(({ label, color }, index) => (
             <button
               key={label}
               className={this.makeOptionClassName(index)}
               style={{ backgroundColor: color }}
               onClick={(() => this.setActiveIndex(index))}
               
             ></button>
           )
           )}
         </div>
       </div>
      )
   }
}

export default ColorPicker;