import React from "react";
import Footer from "../content/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "../styles/Content.module.css";
import style from "../styles/Proxy.module.css";
import RightArrow from "../svgIcons/RightArrow.svg"
import RightIcon1 from "../svgIcons/RightIcon1.svg"

const Proxy = () => {
  return (
    <div className={style.mainProxyContainer}>
      <Navbar />
      <div className={style.proxyContainerMain}>
        <div>
          <p className={styles.welcomeText}>PROXY LOCATION CHECKER</p>
          <p className={style.infoText}>
            Check Locations of all your Proxies{" "}
            <span className={styles.blueText}>Free</span> of Cost
          </p>
          <p className={style.infoText2}>
          To Check location, enter the address or proxies you want to check (1 IP Per line)
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
              By using our tool, you agree our <span>Terms of Service</span> and <span>Privacy
              Policy</span> 
            </div>
          </div>
        </div>
        <div className={style.tableDiv}>
            <div>
                <p className={`${styles.blueText} ${style.tableDivText}`}>Your Results</p>
            </div>
            <div className={style.tableInnerDiv}>
                <table rules="rows">
                    <thead>
                        <tr className={style.tableRow}>
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
            <span className={styles.blueText}>View Tool<img src={RightIcon1} alt="Right arrow" className={style.rightArrowIcon}/></span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Proxy;
