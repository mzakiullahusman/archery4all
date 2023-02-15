import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Archery 4 All</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keywords"
          content="archery, diy, hunting, bow, arrow, archery for all, bow and arrow"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Archery 4 All</h1>
          <p>Making Archery Accessible for All&nbsp;</p>
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.myImg} src="/archery_pic.jpg" alt="" />
        </div>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogitem}>
            <h3>How to Learn Archery in 2023?</h3>
            <p>
              This blog discusses how you can pick up a bow and start to learn
              archery in 2023.
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogitem}>
            <h3>How to Learn Archery in 2023?</h3>
            <p>
              This blog discusses how you can pick up a bow and start to learn
              archery in 2023.
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogitem}>
            <h3>How to Learn Archery in 2023?</h3>
            <p>
              This blog discusses how you can pick up a bow and start to learn
              archery in 2023.
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>
    </>
  );
}
