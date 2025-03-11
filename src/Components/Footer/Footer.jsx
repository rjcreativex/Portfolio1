import React from 'react'
import './Footer.css'
import { UserOutlined,GitlabOutlined } from "@ant-design/icons";
import plogo from '../../assets/portfolio/pinterest.png'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={plogo} className='plogo' alt="Pinterest logo" />
                    <p>I am a frontend & backend developer from the Philippines with 3 years of experience, currently working at OpSolutions Inc. <GitlabOutlined/></p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <UserOutlined />
                        <input type="email" placeholder="Enter your email." id="email" name="email"/>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'> @ 2025 Ryan Joseph. All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}
export default Footer