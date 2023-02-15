import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
// import * as fs from "node:fs";

// Step 1: Collect all the files from  blog data directory
// Step 2: Iterate through the files and display them

const Archery = (props) => {
  // const [blogs, setBlogs] = useState([props.allBlogs]);
  // useEffect(() => {}, []);
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(3)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+1}`);
    setCount(count + 1)
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div className={styles.main}>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className={styles.blogs}>
          {blogs.map((blogitem) => {
            console.log(blogitem.title);
            return (
              <div className={styles.blogitem} key={blogitem.slug}>
                <h2>{blogitem.title}</h2>
                <p>{blogitem.metadesc}</p>
                <Link href={`/blogposts/${blogitem.slug}`}>
                  <button className={styles.btn}>Read More</button>
                </Link>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

// Static Site Generation (Pre-rendering Strategy 1)
// export async function getStaticSideProps(context) {
//   let data = await fs.promises.readdir("blogdata");
//   let myfile;
//   let allBlogs = [];
//   for (let index = 0; index < data.length; index++) {
//     const item = data[index];
//     myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
//     allBlogs.push(JSON.parse(myfile));
//   }

//   return {
//     props: { allBlogs }, // will be passed to the page components as props
//   };
// }

// Server Side Rendering (Pre-rendering Strategy 2)
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allCount = 6;    // !HARDCODED! Tried implementing with data.length and Object.keys(data).length;
  let allBlogs = await data.json();

  return {
    props: { allBlogs, allCount }, // will be passed to the page components as props
  };
}

export default Archery;
