//HOME
import styles from "./style.module.css";
import ProductList from "components/productList";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("Explore");
  return (
    <div className={styles.home}>
      <ProductList type={"explore"} />
      <Link href={`/productlist/${input}`}>
        <Button className={styles.button} variant="contained">
          Explore More...
        </Button>
      </Link>
    </div>
  );
};

export default Home;
