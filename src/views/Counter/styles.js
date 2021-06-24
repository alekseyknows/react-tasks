// material-ui
// стили, представленные в виде js

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    
    container: {
        margin: '50px auto 0px',
        maxWidth: '1120px',
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: '20px',
    },
    buttons: {
        margin: '25px 0px 15px 0px',
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
        marginTop: '10px',
    }
});

export { useStyles };
