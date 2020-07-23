import styles from "./style.module.scss";
import Router, { useRouter } from "next/router";
import { productData } from "productData.js";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;

  const product = productData.find((p) => p.id == productId);

  // if (!product) {
  //   Router && Router.push("/");
  // }

  return <div className={styles.product}>Produkt id: {productId}</div>;
};

export default Product;
