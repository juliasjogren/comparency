import styles from "./style.module.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import Filter from "../filter/index.js";

const Search = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div
      className={cn(styles.search, {
        [styles.home]: isHomePage,
      })}
    >
      <TextField className={styles.input} label="Sök klädesplagg..." variant="outlined" size="small" onChange={(e) => setSearch(e.target.value)} value={search} />

      <Link href={`/productlist/${search}`}>
        <Button className={styles.button} variant="contained">
          Sök
        </Button>
      </Link>
      <Filter />
    </div>
  );
};

export default Search;
