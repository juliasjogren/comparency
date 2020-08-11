import { useRouter } from "next/router";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import styles from "./style.module.scss";
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

const Productlist = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const router = useRouter();
  const { search } = router.query;
  const [compareList, setCompareList] = useState([]);

  const getCols = () => {
    if (isDesktop) return 5;
    if (isTablet) return 3;
    return 2;
  };

  const addToCompare = (product) => {
    if (!compareList.find((pro) => pro.id === product.id)) {
      setCompareList([...compareList, product]);
    }
    console.log("compare list", compareList);
  };

  return (
    <div className={styles.container}>
      <Link href={"/compare"}>
        <Button className={styles.button} variant="contained">
          compare products
        </Button>
      </Link>

      <div className={styles.productlist}>
        <GridList cellHeight={350} className={styles.gridList} cols={getCols()} spacing={8}>
          {productData.map((product) => (
            <GridListTile key={product.id} cols={1}>
              <div className={styles.tile}>
                <Link href={`/product/${product.id}`}>
                  <img className={styles.image} src={product.img} alt={search} />
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
    </div>
  );
};

export default Productlist;
