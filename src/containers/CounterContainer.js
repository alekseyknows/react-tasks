import React, { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import Counter from '../views/Counter/index';

function CounterContainer(props) {
    const [counter, setCounter] = useState(props.initialValue);
    const prevNumChildren = props.prevNumChildren;

    useEffect(() => {
        if (props.numChildren > prevNumChildren) {
            handleEvenValue();
        }
        if (props.numChildren < prevNumChildren) {
            handleOddValue();
        }
    }, [props.numChildren]);

    const handleEvenValue = () => {
        if (counter % 2 === 0 && counter !== 0) {
            setCounter(counter + 1);
        }
    };

    const handleOddValue = () => {
        if (counter % 2 !== 0 && counter !== 0) {
            setCounter(counter - 1);
        }
    };

    return useMemo(
        () => (
            <Counter
                counter={counter}
                increment={() => setCounter(counter + 1)}
                decrement={() => setCounter(counter - 1)}
                reset={() => setCounter(0)}
            />
        ),
        [counter]
    );
}

export default CounterContainer;
