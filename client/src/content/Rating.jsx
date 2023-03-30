import React from "react";
import styles from "../styles/Plan.module.css";
import Star1 from "../svgIcons/Star1.svg";
import Profile from "../svgIcons/Profile.svg";

const Rating = () => {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.headingContainer}>
        <h2>
          Customers <span className={styles.greenText}>Love</span> our Proxies
        </h2>
        <p className={styles.customerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </p>
      </div>
      <div className={styles.ratingMainDiv}>
        <div className={styles.ratingDiv}>
          <div className={styles.starImg}>
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
          </div>
          <div className={styles.reviewText}>
            “Integer facilisis metus magna, non eleifend est ultricies sit amet.
            Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor
            velit, quis convallis tor et tellus.”
          </div>
          <div className={styles.profileDetails}>
            <img src={Profile} alt="profile" className={styles.profileImg} />
            <div>
              <h5>ECHO DZNS</h5>
              <p>Web Designer, CreativeProxies</p>
            </div>
          </div>
        </div>
        <div className={styles.ratingDiv}>
          <div className={styles.starImg}>
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
          </div>
          <div className={styles.reviewText}>
            “Integer facilisis metus magna, non eleifend est ultricies sit amet.
            Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor
            velit, quis convallis tor et tellus.”
          </div>
          <div className={styles.profileDetails}>
            <img src={Profile} alt="profile" className={styles.profileImg} />
            <div>
              <h5>John Doe</h5>
              <p>Web Designer, CreativeProxies</p>
            </div>
          </div>
        </div>
        <div className={styles.ratingDiv}>
          <div className={styles.starImg}>
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
            <img src={Star1} alt="star" />
          </div>
          <div className={styles.reviewText}>
            “Integer facilisis metus magna, non eleifend est ultricies sit amet.
            Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor
            velit, quis convallis tor et tellus.”
          </div>
          <div className={styles.profileDetails}>
            <img src={Profile} alt="profile" className={styles.profileImg} />
            <div>
              <h5>ECHO DZNS</h5>
              <p>Web Designer, CreativeProxies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
