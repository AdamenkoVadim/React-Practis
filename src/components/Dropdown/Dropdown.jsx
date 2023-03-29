import React, { Component } from 'react';
import './Dropdown.css';


class Dropdown extends Component {
    state = {
        visable: false
    }

    toggle = () => {
        this.setState(prevState =>({
            visable: !prevState.visable,
        }));
    };

/*     show = () => {
     this.setState({visable: true})
    }

    hide = () => {
        this.setState({visable: false})
    } */
    render() {
        return (
          <div className="Dropdown">
            <button
              type="button"
              className="Dropdown__toggle"
              onClick={this.toggle}
            >{this.state.visable ? 'YES': 'NO'}
            </button>
            
            {this.state.visable && (
            <div className = "Dropdown__menu">menu</div>
            )} 
          </div>
        );
      };
    };
    
    export default Dropdown;