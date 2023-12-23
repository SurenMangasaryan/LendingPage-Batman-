import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useTransitionEffects } from '../../hooks/useTransitionEffect'
import '../Menu/Menu.css'

const Menu = () => {
    const [menuBool, setMenuBool] = useState(false);
    const menuRef = useRef("");

    const handleChangeMenuBool = () => {
        setMenuBool(!menuBool);
    }

    useEffect(() => {
        menuRef.current.style.display = "none";
    }, [])
    
    useTransitionEffects(menuRef, menuBool);

    return (
        <nav>
            <ul className={`navbar ${menuBool ? "show" : "hide"}`} ref={menuRef}>
                <li>
                    <NavLink to={''}>General</NavLink>
                </li>
                <li>
                    <NavLink to={'character'}>Character</NavLink>
                </li>
            </ul>

            <div className='icon-div' onClick={handleChangeMenuBool}>
                {menuBool ? <AiOutlineClose className='menu-icon' /> : <AiOutlineMenuFold className='menu-icon' />}
            </div>
        </nav>
    )
}

export default Menu