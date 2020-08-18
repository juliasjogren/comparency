import React, { useState, useEffect } from "react";
import Link from "next/link";
import { routes } from "routes";
import styles from "./style.module.css";
import classNames from "classnames";

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <div
      className={classNames(styles.navButton, {
        [styles.transformNav]: isOpen && isOpen === true,
      })}
      onClick={onClick}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
};

const Navigation = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <nav className={styles.navigation}>
      <Hamburger onClick={toggleOpen} isOpen={isOpen} />

      {isOpen ? (
        <div className={styles.routes}>
          {routes.map((route) => (
            <div key={route.id}>
              <Link href={route.route}>
                <a className={styles.route}>{route.name}</a>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.logo}>
          <Link href="/">
            <img className={styles.comperencyLogo} src="https://uploads-ssl.webflow.com/5e7731979105fadedae227ef/5e7f7a5a9d755140dec49212_comparency%20titel%20demo.svg" alt=""></img>
          </Link>
        </div>
      )}
      {/* <div>Compare</div> */}
    </nav>
  );
};

export default Navigation;
