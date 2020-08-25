import { useRouter } from "next/router";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import styles from "./style.module.scss";
import { useMediaQuery } from "@material-ui/core";
import Link from "next/link";
import ProductList from "components/productList";
import { productData } from "data.js";

const filterBySearch = (search, product) => {
  return product.category.includes(search) || product.model.includes(search) || product.brand.includes(search);
};

const Search = () => {
  const router = useRouter();
  const { search } = router.query;

  const products = productData.filter((product) => filterBySearch(search, product));

  const hasProducts = products.length > 0;

  return (
    <div className={styles.container}>
      <Link href={"/compare"}>
        <Button className={styles.button} variant="contained">
          compare products
        </Button>
      </Link>

      {hasProducts ? <div>Visar resultat för "{search}"</div> : <div>Inga resultat för "{search}"</div>}

      <div className={styles.productlist}>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Search;
