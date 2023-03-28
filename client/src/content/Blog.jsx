import React from "react";
import styles from "../styles/Plan.module.css";
import RightArrow from "../svgIcons/RightArrow.svg"

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.headingContainer}>
        <h2>
          Read our <span className={styles.blueText}>Exclusive</span> Blog
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </p>
      </div>
        <p className={styles.blogText}> Read All Blogs <img src={RightArrow} alt="rightArrow" /></p>
        <div className={styles.blogMainDiv}>
            <div>
                <div className={styles.blogDiv}>

                </div>
                <div className={styles.blogTextDiv}>
                    <h5>Blog Title appear here</h5>
                    <p>Category name here</p>
                </div>
            </div>
            <div>
                <div className={styles.blogDiv}>

                </div>
                <div className={styles.blogTextDiv} >
                    <h5>Blog Title appear here</h5>
                    <p>Category name here</p>
                </div>
            </div>
            <div>
                <div className={styles.blogDiv}>

                </div>
                <div className={styles.blogTextDiv}>
                    <h5>Blog Title appear here</h5>
                    <p>Category name here</p>
                </div>
            </div>
            <div>
                <div className={styles.blogDiv}>

                </div>
                <div className={styles.blogTextDiv}>
                    <h5>Blog Title appear here</h5>
                    <p>Category name here</p>
                </div>
            </div>
            <div>
                <div className={styles.blogDiv}>

                </div>
                <div className={styles.blogTextDiv}>
                    <h5>Blog Title appear here</h5>
                    <p>Category name here</p>
                </div>
            </div>
            <div>
                <div className={styles.blogDiv}>

                </div>
                <div className={styles.blogTextDiv}>
                    <h5>Blog Title appear here</h5>
                    <p>Category name here</p>
                </div>
            </div>
             
        </div>
    </div>
  );
};

export default Blog;
