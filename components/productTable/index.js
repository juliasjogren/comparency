import styles from "./style.module.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  productName: {
    width: "150px",
    textAlign: "center",
    overflowWrap: "break-word",
    fontWeight: "bold",
  },
  total: {
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCellValue: {
    textAlign: "center",
  },
});

const ProductTable = ({ product }) => {
  const classes = useStyles();

  const getTotalKo2 = () => {
    return product.framställning + product.frakt + product.tvätt + product.återvinning + product.odling;
  };

  const rows = [
    { id: 1, name: "total", value: getTotalKo2(), className: classes.total },
    { id: 2, name: "odling", value: product.odling, className: classes.odling },
    { id: 3, name: "framställning", value: product.framställning, className: classes.framställning },
    { id: 4, name: "frakt", value: product.frakt, className: classes.frakt },
    { id: 5, name: "tvätt", value: product.tvätt, className: classes.tvätt },
    { id: 6, name: "återvinning", value: product.återvinning, className: classes.återvinning },
  ];

  return (
    <div className={styles.impactTable}>
      <TableContainer>
        <Table className={styles.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell key={product.id} className={classes.productName}>
                {product.model}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" classes={{ root: styles.tableRowName }}>
                  {row.name}
                </TableCell>
                <TableCell key={row.id} className={classes.tableCellValue} classes={{ root: row.className }}>
                  {row.value} KG CO2
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductTable;
