import React from "react";
import Footer from "../content/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "../styles/Content.module.css";
import style from "../styles/Proxy.module.css";
import RightArrow from "../svgIcons/RightArrow.svg"

const Proxy = () => {
  return (
    <div>
      <Navbar />
      <div className={style.proxyContainerMain}>
        <div>
          <p className={styles.welcomeText}>PROXY LOCATION CHECKER</p>
          <p className={styles.infoText}>
            Check Locations of all your Proxies{" "}
            <span className={styles.blueText}>Free</span> of Cost
          </p>
          <p className={styles.infoText2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            augue sit amet mollis molestie.
          </p>
        </div>

        <div className={style.mainContent}>
          <textarea
            name="proxy"
            id=""
            cols="30"
            rows="10"
            placeholder={`8.8.8.8 \n1.1.1.1 \n192.168.1.1`}
          ></textarea>
          <div className={style.btnDiv}>
            <button>Check Location</button>
            <div className={style.policyText}>
              By using our tool, you agree our Terms of Service and Privacy
              Policy
            </div>
          </div>
        </div>
        <div className={style.tableDiv}>
            <div>
                <p className={styles.blueText}>Your Results</p>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>IP</td>
                            <td>PROXY</td>
                            <td>CITY</td>
                            <td>COUNTRY</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8.8.8.8</td>
                            <td>192.168.0.0</td>
                            <td>New York</td>
                            <td>US</td>
                           
                        </tr>
                        <tr>
                            <td>8.8.8.8</td>
                            <td>192.168.0.0</td>
                            <td>New York</td>
                            <td>US</td>
                           
                        </tr>
                        <tr>
                            <td>8.8.8.8</td>
                            <td>192.168.0.0</td>
                            <td>New York</td>
                            <td>US</td>
                           
                        </tr>
                        <tr>
                            <td>8.8.8.8</td>
                            <td>192.168.0.0</td>
                            <td>New York</td>
                            <td>US</td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className={style.checker}>
            <p>Check out our IPv6 Compatibility Checker</p>
            <span className={styles.blueText}>View Tool<img src={RightArrow} alt="Right arrow" /></span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Proxy;
