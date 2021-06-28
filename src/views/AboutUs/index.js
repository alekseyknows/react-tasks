import { useStyles } from './styles';
import aboutUsPic from '../../images/about-us-mock.png';

export default function AboutUs() {
    const classes = useStyles();

    return (
    <div>
        <img className={classes.pic} src={aboutUsPic} alt={'about us'} />
    </div>
    );
}
