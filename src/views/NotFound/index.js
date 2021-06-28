import { useStyles } from './styles';

export default function NotFound(){

    const classes = useStyles();
    
    return(
        <div className={classes.content}>
            404 PAGE IS NOT FOUND
        </div>
    )
}