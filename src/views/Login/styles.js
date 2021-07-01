import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        
    },
    form: {
        marginTop: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'block',
        marginBottom: '40px',
        '&::after': {
            content: 'asd',
        },
        maxWidth: '180px',
    },
    pair:{
        position: 'relative',
    },
    mirror: {
        position: 'absolute',
        left: '230px',
        bottom: '45px',
    }
});

export {useStyles};