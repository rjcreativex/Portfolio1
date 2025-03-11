import React from 'react'
import './Hero.css'
import ProfileImage from "../../assets/_DSC1575.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='hero' className="hero">
        <div className="profile-wrapper">
          <img src={ProfileImage} className="profile"  alt="Profile"/>
        </div>
        <h1><span>Hi I'm Ryan Joseph, </span> full stack developer based in Philippines.</h1>
        <p>I'm a full stack developer from Philippines, specialized in web development.</p>
       <div className="hero-action">
       <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink></div>
        <div className="hero-resume"> My Resume </div>
        </div>
    </div>
  )
}
export default Hero