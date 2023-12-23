import React from 'react'
import batmanLogo from '/React-Lessons/batman-lending-page/src/images/Batman-Logo.jpg'
import { useNavigate } from 'react-router'
import '../Logo/Logo.css'

const Logo = () => {
    const navigate = useNavigate();

    return (
        <div className='logo-div' onClick={() => { navigate("") }}>
            <img src={batmanLogo} alt=""/>
        </div>
    )
}

export default Logo