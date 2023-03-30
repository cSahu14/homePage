import React from "react";
import styles from "../styles/Proxy.module.css";
import Feature1 from "../svgIcons/Feature1.svg";
import ProxyIcon2 from "../svgIcons/ProxyIcon2.svg"
import ProxyIcon3 from "../svgIcons/ProxyIcon3.svg"
import ProxyIcon4 from "../svgIcons/ProxyIcon4.svg"
import ProxyIcon5 from "../svgIcons/ProxyIcon5.svg"
import ProxyIcon6 from "../svgIcons/ProxyIcon6.svg"
import ProxyIcon7 from "../svgIcons/ProxyIcon7.svg"
import ProxyIcon8 from "../svgIcons/ProxyIcon8.svg"


const ProxyProviders = () => {
  return (
    <div className={styles.proxyContainer}>
        <div className={styles.innercontainer}>
            <div className={styles.innerTop}>
                <p className={styles.proxyHeading}>
                Why we are the Best Proxy Providers
                </p>
                <p className={styles.proxySubText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
                augue sit amet mollis molestie.
                </p>
            </div>
            <div className={styles.innerBottom}>
                <div className={styles.innerBottomDiv}>
                    <img src={Feature1} alt="" />
                    <h3>Feature No 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        ultricies interdum eros non suscipit.
                    </p>
                </div>
                <div className={styles.innerBottomDiv}>
                    <img src={ProxyIcon2} alt="" />
                    <h3>Feature No 2</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        ultricies interdum eros non suscipit.
                    </p>
                </div>
                <div className={styles.innerBottomDiv}>
                    <img src={ProxyIcon3} alt="" />
                    <h3>Feature No 3</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        ultricies interdum eros non suscipit.
                    </p>
                </div>
                <div className={styles.innerBottomDiv}>
                    <img src={ProxyIcon4} alt="" />
                    <h3>Feature No 4</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        ultricies interdum eros non suscipit.
                    </p>
                </div>
                <div className={styles.innerBottomDiv}>
                    <img src={ProxyIcon5} alt="" />
                    <h3>Feature No 5</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        ultricies interdum eros non suscipit.
                    </p>
                </div>
                <div className={styles.innerBottomDiv}>
                    <img src={ProxyIcon6} alt="" />
                    <h3>Feature No 6</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        ultricies interdum eros non suscipit.
                    </p>
                </div>
                <div className={styles.innerBottomDiv}>
                    <img src={ProxyIcon7} alt="" />
                    <h3>Feature No 7</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        ultricies interdum eros non suscipit.
                    </p>
                </div>
                <div className={styles.innerBottomDiv}>
                    <img src={ProxyIcon8} alt="" />
                    <h3>Feature No 8</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        ultricies interdum eros non suscipit.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProxyProviders;
