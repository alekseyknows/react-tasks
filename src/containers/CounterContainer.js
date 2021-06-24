// здесь вся логика счетчика (хранение + изменение), не должен содержать html
// в return <Counter {...props}/>

import React, { Component } from 'react';
import Counter from '../views/Counter/index';

class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increment = () => {
        this.setState((state) => ({
            counter: ++state.counter,
        }));
    };

    decrement = () => {
        this.setState((state) => ({
            counter: --state.counter,
        }));
    };

    reset = () => {
        this.setState(() => ({
            counter: 0,
        }));
    };

    render() {
        return (
            <Counter
                counter={this.state.counter}
                increment={this.increment}
                decrement={this.decrement}
                reset={this.reset}
            />
        );
    }
}

export default CounterContainer;
