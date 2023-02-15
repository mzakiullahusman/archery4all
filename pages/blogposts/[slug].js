import React, { useState } from "react";
// import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
// import * as fs from "node:fs";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  // const { slug } = router.query;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </div>
    </div>
  );
};

// Server Side Rendering (Pre-rendering Strategy 2)
export async function getServerSideProps(context) {
  // const router = useRouter();
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog }, // will be passed to the page components as props
  };
}

// Static Site Generation (Pre-rendering Strategy 1)
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "best-budget-compound-bow" } },
//       { params: { slug: "best-budget-takedown-recurve-bows" } },
//       { params: { slug: "best-budget-traditional-recurve-bows" } },
//     ],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// export async function getStaticSideProps(context) {
//   // const router = useRouter();
//   const { slug } = context.params;
//   let myBlog = await fs.promises.readFile(
//     `blogdata/${slug}.json`,
//     "utf-8"
//   );

//   return {
//     props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page components as props
//   };
// }
export default slug;
