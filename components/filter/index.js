import styles from "./style.module.scss";
import React, { useState } from "react";
import { filters } from "data.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  removeUnderline: styles.removeUnderline,
});

const Filter = () => {
  const classes = useStyles();
  const [activeFilters, setActiveFilters] = useState([]);

  const handleChange = (sub) => {
    if (!activeFilters.find((filter) => filter.name === sub.name)) {
      setActiveFilters([...activeFilters, sub]);
    } else {
      let newActiveFilters = activeFilters.filter((filter) => filter.name !== sub.name);
      setActiveFilters(newActiveFilters);
    }
    console.log("active filters", activeFilters);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.filter}>
        {filters.map((filter) => (
          <div className={styles.filterWrap} key={filter.id}>
            <h4 className={styles.title}>{filter.name}</h4>
            {/* <FormControl classes={{ root: classes.removeUnderline }}> */}
            <FormControl classes={{ root: styles.removeUnderline }}>
              <Select multiple value={[]} input={<Input />}>
                {filter.sub.map((sub) => (
                  <MenuItem key={sub.name} value={sub}>
                    <Checkbox checked={activeFilters.indexOf(sub) > -1} onChange={() => handleChange(sub)} />
                    <ListItemText primary={sub.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        ))}
      </div>
      <div className={styles.activeFilters}>
        {activeFilters.map((filter) => (
          <div key={filter.id} className={styles.activeFilter}>
            {filter.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
