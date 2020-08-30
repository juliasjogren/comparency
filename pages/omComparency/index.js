import { Grid, Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "40px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    transition: "200ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  image: {
    width: "100px",
  },
}));

let tempImage = "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
const members = [{ id: "ulrika", name: "Ulrika Hafström", role: "CEO", age: 22, image: tempImage },
{ id: "victor", name: "Victor Friberg", role: "CTO", age: 25, image: tempImage },
{ id: "julia", name: "Julia Sjögren", role: "Lead Developer", age: 26, image: tempImage },
{ id: "ludwig", name: "Ludwig Thurfjell", role: "Technical Advisor", age: 33, image: tempImage },
{ id: "axel", name: "Axel Johansson", role: "Sales and Marketing", age: 22, image: tempImage } ];

export default function OmComparency() {
  const styles = useStyles();

  return (
    <Container className={styles.root}>
      <Grid container justify="center" alignItems="center" spacing={10}>
        {members.map((member) => (
          <Grid item>
            <Paper className={styles.paper} elevation={3}>
              <img
                className={styles.image}
                src={member.image}
                alt={member.id}
              />
              <h1>
                {member.name}, {member.age}
              </h1>
              <p>{member.role}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}