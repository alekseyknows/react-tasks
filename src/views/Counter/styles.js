// material-ui
// стили, представленные в виде js

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    
    container: {
        margin: '200px auto 0px',
        maxWidth: '1120px',
        textAlign: 'center',
    },
    buttons: {
        marginTop: '50px',
    },
    incrementButton: {
        color: 'green',
    },
    decrementButton: {
        color: 'red',
    },
    resetButton: {
        color: 'grey',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    }
});

export { useStyles };
