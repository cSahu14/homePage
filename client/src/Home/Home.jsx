import React from 'react'
import Blog from '../content/Blog'
import Content from '../content/Content'
import Footer from '../content/Footer'
import Plans from '../content/Plans'
import ProxyProviders from '../content/ProxyProviders'
import Rating from '../content/Rating'
import Navbar from '../Navbar/Navbar'
import styles from "../styles/Home.module.css"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.homeContainer}>
          <Content/>          
          <Plans/>
          <Rating/>
          <Blog/> 
          <Footer/>
        </div>
    </div>
  )
}

export default Home