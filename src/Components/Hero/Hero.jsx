import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import rnImage from '../../assets/rn.jpg';



const Hero = () => {
  return (
    <div className='hero' id='home'>
    <img src={rnImage} alt="Profile" />

       <h1><span>I'm  Ritik Nagar,</span> frontend developer  based in India.</h1>  
       <p>I am frontend developer,from Rajasthan, I'm looking for new opportunity 'MERN STACK DEVELOPER' and passionate developer. </p>
       <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
        </div>  
       

    </div>
  )
}

export default Hero