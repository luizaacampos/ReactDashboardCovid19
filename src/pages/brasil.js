import React, { useEffect, useState} from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Menu from '../components/Menu'

export default function Brasil() {
    
    const [brData, setBrData] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/countries/Brazil?yesterday=true&twoDaysAgo=true&strict=true')
            .then(res => {
            setBrData(res.data)
    
            console.log(res.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
                <Menu />
                <div className="dataDiv">
                    <h1>Brasil</h1>
                    <div className="cards-container">                        <div className="part">
                            <div>
                                <Card title="Número atualizado de casos:" info={brData.cases}/>
                                <Card title="Número de casos ativos:" info={brData.active} />
                                <Card title="Número de casos registrados hoje:" info={brData.todayCases} />
                            </div>
                            <div>
                                <Card title="População:" info={brData.population} />
                                <Card title="Número de mortes:" info={brData.deaths} />
                                <Card title="Número de mortes registradas hoje:" info={brData.todayDeaths} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
