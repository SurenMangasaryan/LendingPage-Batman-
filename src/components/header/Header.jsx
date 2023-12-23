import React from 'react'
import Menu from '../../features/headerFeatures/Menu/Menu'
import Logo from '../../features/headerFeatures/Logo/Logo'
import '../header/Header.css'

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Menu />
        </header>
    )
}

export default Header