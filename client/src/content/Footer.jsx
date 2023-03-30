import React from "react";
import styles from "../styles/Footer.module.css";
import CompanyLogo from "../svgIcons/CompanyLogo.svg";
import Discord from "../svgIcons/Discord.svg";

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.footerFirstDiv}>
        <div className={styles.footerLogoDiv}>
          <div className={styles.logoDiv}>
              <img src={CompanyLogo} alt="logo" />
              <span className={styles.logoText}>CreativeProxies</span>
          </div>
          <div className={styles.copyright}>Copyright © 2023 Creative Proxies. All rights reserved.</div>
        </div>
        <div className={styles.discordBtn}>
          <button>
            <img src={Discord} alt="discord" />
            <span>Join Our Discord</span>
          </button>
        </div>
      </div>
      <div className={styles.footerSecondDiv}>
        <div className={styles.listDiv}>
            <p>Explore</p>
            <ul>
                <li>Proxy Location Checker</li>
                <li>IPv6 Comptability</li>
                <li>Blogs</li>
            </ul>
        </div>
        <div className={styles.listDiv}>
        <p>Explore</p>
            <ul>
                <li>FAQs</li>
                <li>Branding</li>
                <li>Network Information</li>
                <li>Imprint</li>
            </ul>
        </div>
        <div className={styles.listDiv}>
        <p>Explore</p>
            <ul>
                <li>Status</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
