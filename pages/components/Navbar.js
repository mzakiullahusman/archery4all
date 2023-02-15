import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link href={"/"} legacyBehavior scroll={false}>
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href={"/about"} legacyBehavior scroll={false}>
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href={"/archery"} legacyBehavior scroll={false}>
          <a>
            <li>Archery</li>
          </a>
        </Link>
        <Link href={"/contact"} legacyBehavior scroll={false}>
          <a>
            <li>Contact</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
