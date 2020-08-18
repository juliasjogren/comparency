import { useRouter } from "next/router";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import styles from "./style.module.scss";
import { useMediaQuery } from "@material-ui/core";
import Link from "next/link";
import ProductList from "components/productList";

const Productlist = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href={"/compare"}>
        <Button className={styles.button} variant="contained">
          compare products
        </Button>
      </Link>
      <div className={styles.productlist}>
        <ProductList />
      </div>
    </div>
  );
};

export default Productlist;
