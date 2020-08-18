import styles from "./style.module.scss";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { productData } from "data.js";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  productWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    fontWeight: "bold",
    fontSize: "20px",
  },
});

const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(227, 234, 238, 0.747)",
    },
  },
}))(TableRow);

const CompareTable = () => {
  const classes = useStyles();
  const products = productData.filter((product) => product.compare === true);
  console.log("in compare", products);

  products.forEach((product) => {
    product.total = getTotalKo2(product);
  });
  products.sort(function (a, b) {
    return a.total - b.total;
  });

  function getTotalKo2(product) {
    return product.framställning + product.frakt + product.tvätt + product.återvinning + product.odling;
  }

  return (
    <div className={styles.compareTable}>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">Total (Kg CO2)</TableCell>
              <TableCell align="center">Odling</TableCell>
              <TableCell align="center">Framställning</TableCell>
              <TableCell align="center">Frakt</TableCell>
              <TableCell align="center">Tvätt</TableCell>
              <TableCell align="center">Återvinning</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product.id}>
                <TableCell className={classes.productWrap} component="th" scope="row">
                  <img className={styles.image} src={product.img} />
                  {product.model}
                </TableCell>
                <TableCell align="center" className={classes.total}>
                  {product.total}
                </TableCell>
                <TableCell align="center">{product.odling}</TableCell>
                <TableCell align="center">{product.framställning}</TableCell>
                <TableCell align="center">{product.frakt}</TableCell>
                <TableCell align="center">{product.tvätt}</TableCell>
                <TableCell align="center">{product.återvinning}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompareTable;
