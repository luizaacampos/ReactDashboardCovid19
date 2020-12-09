import React from 'react'

import './styles.css'

export default function Card({ title, info}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{info}</p>
        </div>
    )
}
