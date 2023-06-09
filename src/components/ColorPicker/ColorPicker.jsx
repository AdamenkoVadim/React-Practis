import React, { Component } from "react";
import './ColorPicker.css';
class ColorPicker extends Component {

state = {
    activeOptionIdx: 1,
};

setActiveIndex = ( index ) => {
    this.setState({activeOptionIdx: index});
};

makeOptionClassName = ( index) => {
    const optionClasses = ['ColorPicker__option'];

    if(index===this.state.activeOptionIdx) {
        optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
}

render () {
    const {label} = this.props.options[this.state.activeOptionIdx];
    console.log(label);
    return(

    <div className="ColorPicker">
      <h2 className="ColorPicker__title">ColorPicker</h2>
      <p>Цвет:{label}</p>
      <div>
        {this.props.options.map(({ label, color}, index) => (
            <button
            key = {label}
            className = {this.makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick = {()=> this.setActiveIndex(index)}
            ></button>
       
        ))}
      </div>
    </div>
    );
  }
}

export default ColorPicker;