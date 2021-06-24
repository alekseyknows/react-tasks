import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useStyles } from './styles';

const ParentCounter = (props) => {
    ParentCounter.propTypes = {
        addCounter: PropTypes.func,
        removeCounter: PropTypes.func,
        resetCounter: PropTypes.func,
    };

    const classes = useStyles();

    return (
        <div>
            <ButtonGroup className={classes.buttons}>
                <Button
                    className={classes.addButton}
                    onClick={props.addCounter}
                >
                    Add
                </Button>
                <Button
                    className={classes.removeButton}
                    onClick={props.removeCounter}
                >
                    Remove
                </Button>
                <Button
                    className={classes.resetButton}
                    onClick={props.resetCounter}
                >
                    Reset
                </Button>
            </ButtonGroup>
            <span className={classes.counter}>{props.numChildren}</span>
        </div>
    );
};

export default ParentCounter;
