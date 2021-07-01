import { Button, TextField } from '@material-ui/core';
import { useStyles } from './styles';

export default function Login(props) {
    
    const formik = props.formik;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div className={classes.pair}>
                    <TextField
                        className={classes.item}
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        placeholder='Enter your email'
                        autoComplete='on'
                    />
                    <div className={classes.mirror}>{formik.values.email}</div>
                </div>
                <div className={classes.pair}>
                    <TextField
                        className={classes.item}
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                        autoComplete='off'
                    />
                     <div className={classes.mirror}>{formik.values.password}</div>
                </div>
                <Button
                    className={classes.item}
                    color="secondary"
                    variant="contained"
                    type="submit"
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}
