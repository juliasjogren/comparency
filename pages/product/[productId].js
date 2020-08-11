import styles from "./style.module.scss";
import Router, { useRouter } from "next/router";
import { productData } from "data.js";
import ProductTable from "components/productTable";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;

  const product = productData.find((p) => p.id == productId);

  if (product) {
    return (
      <div className={styles.product}>
        <div className={styles.title}>
          <h1>{product.brand}</h1>
          {product.model}
        </div>
        <img className={styles.image} src={product.img} />
        <ProductTable product={product} />
      </div>
    );
  } else return <div></div>;
};

export default Product;
