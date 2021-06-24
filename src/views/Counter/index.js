// arrow function
// здесь вся html разметка
// подключает переданные props для кнопок

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useStyles } from './styles';

const Counter = (props) => {
    Counter.propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func,
        decrement: PropTypes.func,
        reset: PropTypes.func,
    };

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div
                className={classes.text}
            >{`Current counter is ${props.counter}`}</div>
            <ButtonGroup className={classes.buttons}>
                <Button
                    className={classes.incrementButton}
                    //onClick={() => props.increment(props.counter)}
                    onClick={props.increment}
                >
                    Increment (+1)
                </Button>
                <Button
                    className={classes.decrementButton}
                    onClick={props.decrement}
                >
                    Decrement (-1)
                </Button>
                <Button className={classes.resetButton} onClick={props.reset}>
                    Reset
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Counter;
