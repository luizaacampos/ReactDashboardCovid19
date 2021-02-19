import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Menu() {
    return (
        <aside className="menu">
            <h2 className="menuTitle">COVID-19</h2>
            <div className="menuBtn">
                <Link to={'/mundo'} style={{ textDecoration: 'none', color: 'black' }}>
                    Mundo
                </Link>
            </div>
            <div className="menuBtn">
                <Link to={'/brasil'} style={{ textDecoration: 'none', color: 'black' }}>
                    Brasil
                </Link>
            </div>
            <div className="menuBtn">
                <Link to={'/america-do-norte'} style={{ textDecoration: 'none', color: 'black' }}>
                    América do Norte
                </Link>
            </div>
            <div className="menuBtn">
                <Link to={'/america-do-sul'} style={{ textDecoration: 'none', color: 'black' }}>
                    América do Sul
                </Link>
            </div>
            <div className="menuBtn">
                <Link to={'/asia'} style={{ textDecoration: 'none', color: 'black' }}>
                    Ásia
                </Link>
            </div>
            <div className="menuBtn">
                <Link to={'/europa'} style={{ textDecoration: 'none', color: 'black' }}>
                    Europa
                </Link>
            </div>
            <div className="menuBtn">
                <Link to={'/oceania'} style={{ textDecoration: 'none', color: 'black' }}>
                    Oceania
                </Link>
            </div>
        </aside>
    )
}
