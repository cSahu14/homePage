import React from "react";
import styles from "../styles/Plan.module.css";
import V4 from "../svgIcons/V4.svg";
import V6 from "../svgIcons/V6.svg";
import RightIcon from "../svgIcons/RightIcon.svg";
import RightArrow from "../svgIcons/RightArrow.svg"
import Bestseller from "../svgIcons/Bestseller.svg"

const Plans = () => {
  return (
    <div className={styles.planContainer}>
      <div className={styles.headingContainer}>
        <h2>
          You choose, we <span className={styles.blueText}>Deliver!</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </p>
      </div>
      <div className={styles.plansDiv}>
        <div className={styles.plansDivOne}>
          <div className={styles.plansHeaderDiv}>
            <div>
              <img src={V4} alt="" />
              <h3 className={styles.subHeading}>IPv4 Proxies</h3>
              <p className={styles.routingText}>Static/Rotating</p>
            </div>
            <div className={styles.plansHeaderTextDiv}>
              <p className={styles.plansHeaderPriceText}>FROM</p>
              <p className={styles.plansHeaderText}>
                {" "}
                <span className={styles.blueText}>$4.75</span><span className={styles.perPlan}>/day</span> 
              </p>
              <p className={styles.plansHeaderPriceText}>OR</p>
              <p className={styles.plansHeaderText}>
                {" "}
                <span className={styles.blueText}>$116.75</span><span className={styles.perPlan}>/mo</span>
              </p>
            </div>
          </div>
          <hr className={styles.hrLine}/>
          <div className={styles.plansDetail}>
            <p>Plan Includes :</p>
            <ul>
              <li><img src={RightIcon} alt="right icon" />100 Threads</li>
              <li><img src={RightIcon} alt="right icon" />Dedicated IP Pool</li>
              <li><img src={RightIcon} alt="right icon" />Residential Proxy</li>
              <li><img src={RightIcon} alt="right icon" />Unlimited Bandwidth</li>
              <li><img src={RightIcon} alt="right icon" />Worldwide Locations</li>
              <li><img src={RightIcon} alt="right icon" />40 GBps</li>
            </ul>
          </div>
          <hr className={styles.hrLine}/>
          <button className={styles.blueBtn}>View Pricing <img src={RightArrow} alt="right arrow" /></button>
        </div>
        <div className={`${styles.plansDivTwo} ${styles.plansDivBorder}`}>
          <div className={styles.planBestSeller}>
            BEST SELLER
          </div>
          <div className={styles.plansHeaderDiv}>
            <div>
              <img src={V6} alt="" />
              <h3 className={styles.subHeading}>IPv6 Proxies</h3>
              <p className={styles.routingText}>Static/Rotating</p>
            </div>
            <div className={styles.plansHeaderTextDiv}>
              <p className={styles.plansHeaderPriceText}>FROM</p>
              <p className={styles.plansHeaderText}>
                {" "}
                <span className={styles.greenText}>$4.75</span><span className={styles.perPlan}>/day</span>
              </p>
              <p className={styles.plansHeaderPriceText}>OR</p>
              <p className={styles.plansHeaderText}>
                {" "}
                <span className={styles.greenText}>$116.75</span><span className={styles.perPlan}>/mo</span>
              </p>
            </div>
          </div>
          <hr className={styles.hrLine}/>
          <div className={styles.plansDetail}>
            <p>Plan Includes :</p>
            <ul>
              <li><img src={RightIcon} alt="right icon" />100 Threads</li>
              <li><img src={RightIcon} alt="right icon" />Dedicated IP Pool</li>
              <li><img src={RightIcon} alt="right icon" />Residential Proxy</li>
              <li><img src={RightIcon} alt="right icon" />Unlimited Bandwidth</li>
              <li><img src={RightIcon} alt="right icon" />Worldwide Locations</li>
              <li><img src={RightIcon} alt="right icon" />Dedicated Subnets</li>
              <li><img src={RightIcon} alt="right icon" />1 Octilion IPS</li>
              <li><img src={RightIcon} alt="right icon" />Septiltion per Location</li>
            </ul>
          </div>
          <hr className={styles.hrLine}/>
          <button className={styles.greenBtn}>View Pricing <img src={RightArrow} alt="right arrow" /></button>
        </div>
      </div>
      <div className={styles.bestseller}>
        <div className={styles.bestsellerDiv}>
          <img src={Bestseller} alt="bestseller" className={styles.bestsellerImg}/>
          <p className={styles.heading}>Become a Reseller</p>
          <p className={styles.bestSellerText}>200+ Happy Resellers</p>
        </div>
        <div className={styles.bestSellerSecondDiv}>
          <p>Plan Includes :</p>
          <ul>
            <li><img src={RightIcon} alt="right icon" />100 Threads</li>
            <li><img src={RightIcon} alt="right icon" />Whitelabel IP Pool</li>
            <li><img src={RightIcon} alt="right icon" />Whitelabel Subnets</li>
            <li><img src={RightIcon} alt="right icon" />Residential Proxy</li>
            <li><img src={RightIcon} alt="right icon" />Custom Bandwidth</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Plans;
