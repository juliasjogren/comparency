import styles from "./style.module.scss";
import React, { useState } from "react";
import { filters } from "data.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import NativeSelect from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles({
  removeUnderline: styles.removeUnderline,
});

function RemoveIcon() {
  return (
    <SvgIcon viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" width="80" height="80" rx="15" fill="grey" />
    </SvgIcon>
  );
}

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

  const removeFilter = (filter) => {
    let newActiveFilters = activeFilters.filter((f) => f.id !== filter.id);
    setActiveFilters(newActiveFilters);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <div className={styles.filterWrap} key={filter.id}>
            <span className={styles.title}>{filter.name}</span>
            <FormControl classes={{ root: styles.removeUnderline }}>
              <NativeSelect multiple value={[]} input={<Input />}>
                {filter.sub.map((sub) => (
                  <MenuItem key={sub.name} value={sub}>
                    <Checkbox checked={activeFilters.indexOf(sub) > -1} onChange={() => handleChange(sub)} />
                    <ListItemText primary={sub.name} />
                  </MenuItem>
                ))}
              </NativeSelect>
            </FormControl>
          </div>
        ))}
      </div>
      <div className={styles.activeFilters}>
        {activeFilters.map((filter) => (
          <div key={filter.id} className={styles.activeFilter} onClick={() => removeFilter(filter)}>
            <span className={styles.filterTitle}>{filter.name}</span>
            <RemoveIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
