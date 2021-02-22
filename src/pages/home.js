import React from 'react'
import { RiVirusFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Home () {
    return (
        <div className="home">
            <h1>COVID-19 <RiVirusFill /></h1>
            <p>Dashboard</p>
            <Link to="/mundo">
                <button className="homeBtn">Acessar</button>
            </Link>
        </div>
    )
}
