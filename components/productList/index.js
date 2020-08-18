import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { productData } from "data.js";
import { useMediaQuery } from "@material-ui/core";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

function AddIcon() {
  return (
    <SvgIcon viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="white" />
    </SvgIcon>
  );
}

const ProductList = ({ type }) => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const [compareList, setCompareList] = useState([]);
  let products = [];

  function getTotalKo2(product) {
    return product.framställning + product.frakt + product.tvätt + product.återvinning + product.odling;
  }

  if (type === "explore") {
    productData.forEach((product) => {
      product.total = getTotalKo2(product);
    });

    productData.sort(function (a, b) {
      return a.total - b.total;
    });

    products = productData.filter((product) => product.id < 6);
  } else {
    products = productData;
  }

  const getCols = () => {
    if (isDesktop) return 5;
    if (isTablet) return 3;
    return 2;
  };

  const addToCompare = (product) => {
    if (!compareList.find((pro) => pro.id === product.id)) {
      setCompareList([...compareList, product]);
      product.compare = true;
    }
    console.log("compare list", compareList);
  };

  return (
    <div className={styles.productlist}>
      <GridList cellHeight={350} className={styles.gridList} cols={getCols()} spacing={8}>
        {products.map((product) => (
          <GridListTile key={product.id} cols={1}>
            <div className={styles.tile}>
              <Link href={`/product/${product.id}`}>
                <img className={styles.image} src={product.img} />
              </Link>
              <GridListTileBar
                title={product.brand}
                titlePosition={"top"}
                actionIcon={
                  <IconButton onClick={() => addToCompare(product)}>
                    <AddIcon />
                  </IconButton>
                }
                classes={{ root: styles.topGridBar }}
              />
              <GridListTileBar title={product.model} subtitle={product.ko2} classes={{ root: styles.bottomGridBar, title: styles.modelTitle }} />
            </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ProductList;
