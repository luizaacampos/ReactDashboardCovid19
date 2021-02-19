import React from 'react'

import './styles.css'

export default function Card({ title, info }) {
    return (
        <div className="card">
            <h2 className="title">{title}</h2>
            <p className="info">{info}</p>
        </div>
    )
}
