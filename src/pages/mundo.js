import React, { useEffect, useState} from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Menu from '../components/Menu'

export default function Mundo() {
    
    const [mundialData, setMundialData] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=true')
            .then(res => {
            setMundialData(res.data)
    
            console.log(res.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
               <Menu />
                <div className="dataDiv">
                    <h1>Mundo</h1>
                    <div className="cards-container">
                        <div className="part">
                            <div>
                                <Card title="Número atualizado de casos:" info={mundialData.cases}/>
                                <Card title="Número de casos ativos:" info={mundialData.active} />
                                <Card title="Número de casos registrados hoje:" info={mundialData.todayCases} />
                            </div>
                            <div>
                                <Card title="População:" info={mundialData.population} />
                                <Card title="Número de mortes:" info={mundialData.deaths} />
                                <Card title="Número de mortes registradas hoje:" info={mundialData.todayDeaths} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
