import styles from "./style.module.css";
import ProductList from "components/productList";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { productData } from "data.js";

function getTotalKo2(product) {
  return product.framställning + product.frakt + product.tvätt + product.återvinning + product.odling;
}

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const products = productData.sort((a, b) => getTotalKo2(a) - getTotalKo2(b));

  const productsToShow = showAll ? products : products.slice(0, 5);

  return (
    <div className={styles.home}>
      <ProductList products={productsToShow} />

      {!showAll && (
        <Button onClick={() => setShowAll(true)} className={styles.button} variant="contained">
          Explore More...
        </Button>
      )}
    </div>
  );
};

export default Home;
