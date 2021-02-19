import React from 'react'
import { RiVirusFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import Menu from '../components/Menu'

export default function Home () {
    return (
        <div className="home">
            <h1>COVID-19 <RiVirusFill /></h1>
            <p>Dashboard</p>
            <Link to="/mundo">
                <button>Acessar</button>
            </Link>
        </div>
    )
}
