import React from 'react'
import { Link } from 'react-router-dom'
import { RiVirusFill } from 'react-icons/ri'

import './styles.css'

export default function Menu() {
    return (
        <aside className="menu">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                <h2 className="menuTitle">COVID-19 <RiVirusFill /></h2>
            </Link>
            <Link to={'/mundo'} style={{ textDecoration: 'none', color: 'black' }}>
                <button className="menuBtn">
                    Mundo
                </button>
            </Link>
            <Link to={'/brasil'} style={{ textDecoration: 'none', color: 'black' }}>
                <button className="menuBtn brBtn">
                    Brasil
                </button>
            </Link>
            <Link to={'/africa'} style={{ textDecoration: 'none', color: 'black' }}>
                <button className="menuBtn">
                    África
                </button>
            </Link>
            <Link to={'/america-do-norte'} style={{ textDecoration: 'none', color: 'black' }}>
                <button className="menuBtn">
                    América do Norte
                </button>
            </Link>
            <Link to={'/america-do-sul'} style={{ textDecoration: 'none', color: 'black' }}>
                <button className="menuBtn">
                    América do Sul
                </button>
            </Link>
            <Link to={'/asia'} style={{ textDecoration: 'none', color: 'black' }}>
                <button className="menuBtn">
                    Ásia
                </button>
            </Link>
            <Link to={'/europa'} style={{ textDecoration: 'none', color: 'black' }}>
                <button className="menuBtn">
                    Europa
                </button>
            </Link>
            
            <Link to={'/oceania'} style={{ textDecoration: 'none', color: 'black' }}>
                <button className="menuBtn">
                    Oceania
                </button>
            </Link>
        </aside>
    )
}
