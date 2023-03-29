import React from 'react'
import styles from "../styles/Navbar.module.css"
import CompanyLogo from "../svgIcons/CompanyLogo.svg"
import Arrow from "../svgIcons/Arrow.svg"
import Discord from "../svgIcons/Discord.svg"
import BurgerMenu from "../svgIcons/BurgerMenu.svg"
import Proxy from '../proxyPage/Proxy'
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();

    const handleProxy = () => {
        return navigate("/proxy") 
    }
    const handleHome = () => {
        return navigate("/")
    }
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.innerLeft}>
                <div className={styles.logoDiv} onClick={handleHome}>
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
                    <button className={styles.homeBtn} onClick={handleProxy}>Get Started</button>
                    <div className={styles.burgerMenu}>
                        <img src={BurgerMenu} alt="berger menu" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar