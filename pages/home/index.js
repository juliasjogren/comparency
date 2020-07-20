//HOME
import styles from "./style.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef, useState } from "react";
import Link from "next/link";

const Home = () => {
  const [search, setSearch] = useState("");

  const searchClick = () => {
    console.log("SEEEEEEAAARCH");
    console.log(search);
  };

  return (
    <div className={styles.home}>
      <div className={styles.searchSection}>
        <img className={styles.background} src="https://uploads-ssl.webflow.com/5e7731979105fadedae227ef/5e773765e5ba0e48a298c229_background-cloth.jpg" alt=""></img>

        <div className={styles.searchContainer}>
          <TextField className={styles.search} label="Sök klädesplagg..." variant="outlined" size="small" onChange={(e) => setSearch(e.target.value)} value={search} />
          <Link href={`/productlist/${search}`}>
            <Button className={styles.searchBtn} variant="contained" onClick={searchClick}>
              Sök
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.vision}>
        <h1 className={styles.title}>
          Vår vision
          <span className={styles.smallTitle}> - en mer hållbar modeindustri</span>
        </h1>
        <div className={styles.visionText}>
          <p className={styles.text}>
            Nästan 10% av jordens koldioxidutsläpp kommer från modeindustrin. Det vill vi ändra på. Snart lanserar vi en tjänst som gör det möjligt för dig som konsument att göra det aktiva valet för
            miljön.
          </p>
          <p className={styles.text}>
            Vi använder data om utsläpp från hela produktionskedjan för att skapa en jämförelsetjänst där du kan identifiera produkten med lägst klimatpåverkan. Sök efter ett plagg, och vi fixar
            resten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
