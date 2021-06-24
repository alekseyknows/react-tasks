import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    buttons: {
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: 'green',
    },
    removeButton: {
        backgroundColor: 'red',
    },
    resetButton: {
        backgroundColor: 'grey',
    },
    counter: {
        marginLeft: '15px',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export { useStyles };
