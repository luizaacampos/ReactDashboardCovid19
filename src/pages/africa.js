import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { FaGlobeAfrica } from 'react-icons/fa'

import Card from '../components/Card'
import Menu from '../components/Menu'

export default function Africa() {
    
    const [africaData, setAfricaData] = useState('')
    const [countries, setCountries] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/continents/Africa?yesterday=true&twoDaysAgo=true&strict=true')
            .then(res => {
            setAfricaData(res.data)
            setCountries(res.data.countries)
    
            console.log(res.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
                <Menu />
                <div className="dataDiv">
                    <h1>África <FaGlobeAfrica /></h1>
                    <div className="cards-container">
                        <Card title="Número atualizado de casos:" info={africaData.cases}/>
                        <div className="part">
                            <div>
                                <Card title="Número de países atingidos:" info={countries.length} />
                                <Card title="Número de casos ativos:" info={africaData.active} />
                                <Card title="Número de casos registrados hoje:" info={africaData.todayCases} />
                            </div>
                            <div>
                                <Card title="População:" info={africaData.population} />
                                <Card title="Número de mortes:" info={africaData.deaths} />
                                <Card title="Número de mortes registradas hoje:" info={africaData.todayDeaths} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
