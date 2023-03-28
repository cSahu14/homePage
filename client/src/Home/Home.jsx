import React from 'react'
import Blog from '../content/Blog'
import Content from '../content/Content'
import Footer from '../content/Footer'
import Plans from '../content/Plans'
import Rating from '../content/Rating'
import Navbar from '../Navbar/Navbar'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Content/>
        <Plans/>
        <Rating/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home