import React, { useEffect, useState} from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Menu from '../components/Menu'

export default function Europa() {
    
    const [europaData, setEuropaData] = useState('')
    const [countries, setCountries] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/continents/Europe?yesterday=true&twoDaysAgo=true&strict=true')
            .then(res => {
            setEuropaData(res.data)
            setCountries(res.data.countries)
    
            console.log(res.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
                <Menu />
                <div className="dataDiv">
                    <h1>Europa</h1>
                    <div className="cards-container">
                        <Card title="Número atualizado de casos:" info={europaData.cases}/>
                        <div className="part">
                            <div>
                                <Card title="Número de países atingidos:" info={countries.length} />
                                <Card title="Número de casos ativos:" info={europaData.active} />
                                <Card title="Número de casos registrados hoje:" info={europaData.todayCases} />
                            </div>
                            <div>
                                <Card title="População:" info={europaData.population} />
                                <Card title="Número de mortes:" info={europaData.deaths} />
                                <Card title="Número de mortes registradas hoje:" info={europaData.todayDeaths} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
