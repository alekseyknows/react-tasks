import React, { useState, useRef, useEffect } from 'react';
import CounterContainer from './CounterContainer';
import ParentCounter from '../views/ParentCounter';

function ParentContainer() {
    const [numChildren, setNumChildren] = useState(1);
    const [clicked, setClicked] = useState('none');

    const prevNumChildren = usePrevious(numChildren);

    const addCounter = () => {
        setClicked('add');
        setNumChildren(numChildren + 1);
    };

    const removeCounter = () => {
        setClicked('remove');
        if (numChildren === 1) return;
        setNumChildren(numChildren - 1);
    };

    const resetCounter = () => {
        setClicked('reset');
        setNumChildren(1);
    };

    const buildChildren = () => {
        const children = [];

        for (let i = 0; i < numChildren; i++) {
            children.push(
                <CounterContainer
                    key={i}
                    initialValue={0}
                    numChildren={numChildren}
                    prevNumChildren={prevNumChildren}
                    clicked={clicked}
                />
            );
        }

        return children;
    };

    return (
        <div>
            <ParentCounter
                numChildren={numChildren}
                addCounter={addCounter}
                removeCounter={removeCounter}
                resetCounter={resetCounter}
            />
            {buildChildren()}
        </div>
    );
}

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export default ParentContainer;
