import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import batmanLogo from '/React-Lessons/batman-lending-page/src/images/batman.png'
import './RightPanel.css'

const RightPanel = () => {
    return (
        <div className='right-panel'>
            <img src={batmanLogo} alt="" />
            <div className='icons-right'>
                <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/" target='_blank' rel="noreferrer">
                    <FaTwitter />
                </a>
            </div>
        </div>
    )
}

export default RightPanel