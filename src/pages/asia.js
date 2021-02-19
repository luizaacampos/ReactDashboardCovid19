import React, { useEffect, useState} from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Menu from '../components/Menu'

export default function Asia() {
    
    const [asiaData, setAsiaData] = useState('')
    const [countries, setCountries] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/continents/Asia?yesterday=true&twoDaysAgo=true&strict=true')
            .then(res => {
            setAsiaData(res.data)
            setCountries(res.data.countries)
    
            console.log(res.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
                <Menu />
                <div className="dataDiv">
                    <h1>Ásia</h1>
                    <div className="cards-container">
                        <Card title="Número atualizado de casos:" info={asiaData.cases}/>
                        <div className="part">
                            <div>
                                <Card title="Número de países atingidos:" info={countries.length} />
                                <Card title="Número de casos ativos:" info={asiaData.active} />
                                <Card title="Número de casos registrados hoje:" info={asiaData.todayCases} />
                            </div>
                            <div>
                                <Card title="População:" info={asiaData.population} />
                                <Card title="Número de mortes:" info={asiaData.deaths} />
                                <Card title="Número de mortes registradas hoje:" info={asiaData.todayDeaths} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
