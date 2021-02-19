import React from 'react'
import { Link } from 'react-router-dom'
import { RiVirusFill } from 'react-icons/ri'

import './styles.css'

export default function Menu() {
    return (
        <aside className="menu">
            <Link to={'/mundo'} style={{ textDecoration: 'none', color: 'black' }}>
                <h2 className="menuTitle">COVID-19 <RiVirusFill /></h2>
            </Link>
            <Link to={'/brasil'} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menuBtn">
                    Brasil
                </div>
            </Link>
            <Link to={'/africa'} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menuBtn">
                    África
                </div>
            </Link>
            <Link to={'/america-do-norte'} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menuBtn">
                    América do Norte
                </div>
            </Link>
            <Link to={'/america-do-sul'} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menuBtn">
                    América do Sul
                </div>
            </Link>
            <Link to={'/asia'} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menuBtn">
                    Ásia
                </div>
            </Link>
            <Link to={'/europa'} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menuBtn">
                    Europa
                </div>
            </Link>
            <Link to={'/oceania'} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menuBtn">
                    Oceania
                </div>
            </Link>
        </aside>
    )
}
