import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    state = {
        value: 0
    }
    buttonPlus = () => {
        this.setState(prevState => ({
                value:prevState.value + 1,
            }));
    };

    buttonMinus = () => {
        this.setState(prevState => ({
                value:prevState.value - 1,
            }));
    }; 

    render() {
        return (
            <div className='Counter'>
                <span className='Counter__value'>{this.state.value}</span>

                <div className='Counter__controls'>
                    <button type='button' onClick={this.buttonPlus}>Увеличить на 1</button>
                    <button type='button' onClick={this.buttonMinus}>Уменьшить на 1</button>
                </div>
            </div>
        )
    }
}

export default Counter;