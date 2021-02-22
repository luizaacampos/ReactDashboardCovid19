import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

import './styles.css'

export default function MenuHamburger() {

    const [open, setOpen] = useState(false)

    const handleToggleMenu = () => {
        setOpen(!open)
    }

    return (
        <span className="menu-mobile" onClick={handleToggleMenu}>
            <AiOutlineMenu />
            <div className={`menu-lista ${open ? "open" : "hide"}`}>
                <ul>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>COVID-19</li>
                    </Link>
                    <Link to={'/mundo'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Mundo</li>
                    </Link>
                    <Link to={'/brasil'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Brasil</li>
                    </Link>
                    <Link to={'/africa'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>África</li>
                    </Link>
                    <Link to={'/america-do-norte'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>América do Norte</li>
                    </Link>
                    <Link to={'/america-do-sul'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>América do Sul</li>
                    </Link>
                    <Link to={'/asia'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Ásia</li>
                    </Link>
                    <Link to={'/europa'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Europa</li>
                    </Link>
                    <Link to={'/oceania'} style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Oceania</li>
                    </Link>
                </ul>
            </div>
        </span>
    )
}
