import { useRouter } from "next/router";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import styles from "./style.module.scss";
import { productData } from "productData.js";
import { useMediaQuery } from "@material-ui/core";
import Link from "next/link";

const Productlist = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const router = useRouter();
  const { search } = router.query;

  const getCols = () => {
    if (isDesktop) return 5;
    if (isTablet) return 3;
    return 2;
  };

  return (
    <div className={styles.productlist}>
      <GridList cellHeight={350} className={styles.gridList} cols={getCols()} spacing={8}>
        {productData.map((product) => (
          <GridListTile key={product.id} cols={1}>
            <Link href={`/product/${product.id}`}>
              <div className={styles.tile}>
                <img className={styles.image} src={product.img} alt={search} />
                <GridListTileBar title={product.brand} titlePosition={"top"} classes={{ root: styles.topGridBar }} />
                <GridListTileBar title={product.model} subtitle={product.ko2} classes={{ root: styles.bottomGridBar, title: styles.modelTitle }} />
              </div>
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Productlist;
