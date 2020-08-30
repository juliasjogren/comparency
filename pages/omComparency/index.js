import { Grid, Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "40px"
  },
  paper: {
    padding: theme.spacing(2),
    minHeight: "180px",
    width: "100%",
    maxWidth: "240px",
    textAlign: "center",
    transition: "200ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  image: {
    width: "100%",
    height: "100px",
  },
}));

let tempImage = "";
const members = [{ key: "ulrika", name: "Ulrika Hafström", role: "CEO", age: 22, image: tempImage },
{ key: "victor", name: "Victor Friberg", role: "CTO", age: 25, image: tempImage },
{ key: "julia", name: "Julia Sjögren", role: "Lead Developer", age: 26, image: tempImage },
{ key: "ludwig", name: "Ludwig Thurfjell", role: "Technical Advisor", age: 33, image: tempImage },
{ key: "axel", name: "Axel Johansson", role: "Sales and Marketing", age: 22, image: tempImage } ];

export default function OmComparency() {
  const styles = useStyles();

  return (
    <Container className={styles.root}>
      <h1>Our Team</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
      <Grid container justify="center" alignItems="center" spacing={10}>
        {members.map((member) => (
          <Grid item>
            <Paper className={styles.paper} elevation={3}>
              <div
                className={styles.image}
                alt={member.key}
                style={{backgroundImage: `url(${member.image})`}}
              />
              <h2>
                {member.name}, {member.age}
              </h2>
              <p>{member.role}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}