import React from 'react'
import styles from "../styles/Navbar.module.css"
import CompanyLogo from "../svgIcons/CompanyLogo.svg"
import Arrow from "../svgIcons/Arrow.svg"
import Discord from "../svgIcons/Discord.svg"

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.innerLeft}>
                <div className={styles.logoDiv}>
                    <img src={CompanyLogo} alt="logo" className={styles.logo}/>
                    <span className={styles.logoText}>CreativeProxies</span>
                </div>
                <div className={styles.navContents}>
                    <span>Pricing</span>
                    <span>Explore Tools <img src={Arrow} alt="arrow" className={styles.arrow}/></span>
                    <span>Resources <img src={Arrow} alt="arrow" className={styles.arrow}/></span>
                    <span>FAQs</span>
                    <span>Blogs</span>
                </div>
            </div>
            <div className={styles.innerRight}>
                <div className={styles.discordDiv}>
                    <img src={Discord} alt="discord" className={styles.discordImg}/>
                    <span className={styles.discordText}>Join Discord</span>
                </div>
                <div className={styles.loginDiv}>
                    <span>Log in</span>
                    <button className={styles.homeBtn}>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar