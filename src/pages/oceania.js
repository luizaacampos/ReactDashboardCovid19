import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { FaGlobeAsia } from 'react-icons/fa'

import Card from '../components/Card'
import Menu from '../components/Menu'

export default function Oceania() {
    
    const [oceaniaData, setOceaniaData] = useState('')
    const [countries, setCountries] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/continents/Australia%2FOceania?yesterday=true&twoDaysAgo=true&strict=true')
            .then(res => {
            setOceaniaData(res.data)
            setCountries(res.data.countries)
    
            console.log(res.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
                <Menu />
                <div className="dataDiv">
                    <h1>Oceania <FaGlobeAsia /></h1>
                    <div className="cards-container">
                        <Card title="Número atualizado de casos:" info={oceaniaData.cases}/>
                        <div className="part">
                            <div>
                                <Card title="Número de países atingidos:" info={countries.length} />
                                <Card title="Número de casos ativos:" info={oceaniaData.active} />
                                <Card title="Número de casos registrados hoje:" info={oceaniaData.todayCases} />
                            </div>
                            <div>
                                <Card title="População:" info={oceaniaData.population} />
                                <Card title="Número de mortes:" info={oceaniaData.deaths} />
                                <Card title="Número de mortes registradas hoje:" info={oceaniaData.todayDeaths} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
