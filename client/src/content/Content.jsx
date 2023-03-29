import React from "react";
import styles from "../styles/Content.module.css";
import RightArrow from "../svgIcons/RightArrow.svg";
import StarIcons from "../svgIcons/StarIcons.svg";
import Star from "../svgIcons/Star.svg";
import Rectangle1 from "../svgIcons/Rectangle1.svg";
import Rect1 from "../svgIcons/Rect1.svg";
import Rectangle2 from "../svgIcons/Rectangle2.svg";
import Rect2 from "../svgIcons/Rect2.svg";
import Rectangle3 from "../svgIcons/Rectangle3.svg";
import Rect3 from "../svgIcons/Rect3.svg";
import Rectangle4 from "../svgIcons/Rectangle4.svg";
import Rect4 from "../svgIcons/Rect4.svg";
import ProxyProviders from "./ProxyProviders";
import {useNavigate} from "react-router-dom"

const Content = () => {
  const navigate = useNavigate()
  const handleProxy = () => {
    return navigate("/proxy")
  }
  return (
    <div className={styles.mainContainer}>
      <div>
        <p className={styles.welcomeText}>WELCOME TO CREATIVE PROXIES</p>
        <p className={styles.infoText}>
          We are the <span className={styles.blueText}>Fastest</span> and the{" "}
          <span className={styles.greenText}>Most</span>{" "}
          <span className={styles.greenText}>Reliable</span> Proxy Service since
          2020
        </p>
        <p className={styles.infoText2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </p>
        <button className={styles.contentBtn} onClick={handleProxy}>
          Get Started <img src={RightArrow} alt="" />
        </button>
      </div>
      <div className={styles.ratingDiv}>
        <img src={StarIcons} alt="" />
        <div className={styles.ratingText}>
          Rated 4.5 on{" "}
          <span>
            <img src={Star} alt="star" className={styles.star} />
          </span>{" "}
          Trustpilot
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.boxes}>
        <div>
          <div className={styles.boxImg}>
            <img src={Rectangle1} alt="" className={styles.rectangle} />
            <img src={Rect1} alt="" className={styles.rect1} />
          </div>
          <p className={styles.boxText}>
            Lorem Ipsum <br /> Dolor Sit Amet Top
          </p>
        </div>
        <div>
        <div className={styles.boxImg}>
            <img src={Rectangle2} alt="" className={styles.rectangle} />
            <img src={Rect2} alt="" className={styles.rect1} />
          </div>
          <p className={styles.boxText}>
            Lorem Ipsum <br /> Dolor Sit Amet Top
          </p>
        </div>
        <div>
        <div className={styles.boxImg}>
            <img src={Rectangle3} alt="" className={styles.rectangle} />
            <img src={Rect3} alt="" className={styles.rect1} />
          </div>
          <p className={styles.boxText}>
            Lorem Ipsum <br /> Dolor Sit Amet Top
          </p>
        </div>
        <div>
        <div className={styles.boxImg}>
            <img src={Rectangle4} alt="" className={styles.rectangle} />
            <img src={Rect4} alt="" className={styles.rect1} />
          </div>
          <p className={styles.boxText}>
            Lorem Ipsum <br /> Dolor Sit Amet Top
          </p>
        </div>
      </div>
      <ProxyProviders/>
    </div>
  );
};

export default Content;
