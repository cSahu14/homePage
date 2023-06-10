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
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    alert(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
  }

  function error() {
    alert("Unable to retrieve your location");
  }

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
  } else {
    alert("Locating…");
    navigator.geolocation.getCurrentPosition(success, error);
  }

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