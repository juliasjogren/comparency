//HOME
import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
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
