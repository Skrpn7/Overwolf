import Link from "next/link";
import React from "react";
import styles from "../../styles/nav-bar.module.css";

const NavLinks = () => {
  return (
    <div>
      <Link href="#">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          FPS Games
        </a>
      </Link>
      <Link href="#">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          Horror Games
        </a>
      </Link>
      <Link href="#">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          Action Games
        </a>
      </Link>
      <Link href="https://github.com/Skrpn7">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          About the developers
        </a>
      </Link>
    </div>
  );
};

export default NavLinks;
