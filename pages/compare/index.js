import styles from "./style.module.scss";
import CompareTable from "components/compareTable";

const Compare = () => {
  return (
    <div className={styles.compare}>
      <CompareTable />
    </div>
  );
};

export default Compare;
