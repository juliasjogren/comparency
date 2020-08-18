import styles from "./style.module.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import Filter from "../filter/index.js";

const Search = () => {
  const [input, setInput] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  const router = useRouter();
  const isHomePage = router.pathname === "/";

  function toggleFilter() {
    if (filterVisible === false) {
      setFilterVisible(true);
    } else {
      setFilterVisible(false);
    }
  }

  return (
    <div
      className={cn(styles.search, {
        [styles.home]: isHomePage,
        [styles.filterVisible]: filterVisible,
      })}
    >
      <div
        className={cn(styles.inputWrap, {
          [styles.inputWrapHome]: isHomePage,
        })}
      >
        {/* kolla om next har form */}
        <form className={styles.formWrap} action={`/productlist/${input}`}>
          <TextField className={styles.input} label="Sök.." variant="outlined" size="small" onChange={(e) => setInput(e.target.value)} value={input} />
          <Button type="submit" className={styles.submitButton} variant="contained">
            Sök
          </Button>
        </form>
        <div className={styles.filterButtonWrap}>
          {isHomePage ? (
            <div></div>
          ) : (
            <Button className={styles.filterButton} onClick={() => toggleFilter()}>
              FILTER
            </Button>
          )}
        </div>
      </div>

      <div
        className={cn(styles.filterWrap, {
          [styles.filterWrapHome]: isHomePage,
        })}
      >
        {!isHomePage && filterVisible ? <Filter /> : <div></div>}
      </div>
    </div>
  );
};

export default Search;
