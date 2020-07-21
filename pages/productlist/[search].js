import { useRouter } from "next/router";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import styles from "./style.module.css";

const Productlist = () => {
  const router = useRouter();
  const { search } = router.query;
  const tileData = [
    { img: 1, title: "hohoho" },
    { img: 2, title: "hohoho" },
    { img: 3, title: "hohoho" },
    { img: 4, title: "hohoho" },
    { img: 5, title: "hohoho" },
    { img: 6, title: "hohoho" },
    { img: 7, title: "hohoho" },
    { img: 8, title: "hohoho" },
  ];

  console.log("search: ", search);

  return (
    <div className={styles.productlist}>
      <GridList cellHeight={160} className={styles.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={search} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Productlist;
