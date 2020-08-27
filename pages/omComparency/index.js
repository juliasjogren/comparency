import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#a0adad'
  },
}));

export default function OmComparency() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Lite text</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Mer text</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Annan text</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Text</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Ännu mer text</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Text igen</Paper>
        </Grid>
      </Grid>
    </div>
  );
}