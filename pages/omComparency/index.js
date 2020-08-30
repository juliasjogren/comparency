import { Grid, Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));

const members = [{ id: "ulrika", name: "Ulrika Hafström", role: "CEO", age: 22 },
{ id: "victor", name: "Victor Friberg", role: "CTO", age: 25 },
{ id: "julia", name: "Julia Sjögren", role: "Lead Developer", age: 26 },
{ id: "ludwig", name: "Ludwig Thurfjell", role: "Technical Advisor", age: 33 },
{ id: "axel", name: "Axel Johansson", role: "Sales and Marketing", age: 22 } ];

export default function OmComparency() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={10}>
          {members.map((member) => (
            <Grid item>
              <Paper className={classes.paper} elevation={3}>
                <h1>
                  {member.name}, {member.age}
                </h1>
                <p>{member.role}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}