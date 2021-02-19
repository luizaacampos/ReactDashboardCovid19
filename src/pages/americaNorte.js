import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { FaGlobeAmericas } from 'react-icons/fa'

import Card from '../components/Card'
import Menu from '../components/Menu'

export default function AmericaNorte() {
    
    const [norteData, setNorteData] = useState('')
    const [countries, setCountries] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/continents/North%20America?yesterday=true&twoDaysAgo=true&strict=true')
            .then(res => {
            setNorteData(res.data)
            setCountries(res.data.countries)
    
            console.log(res.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
                <Menu />
                <div className="dataDiv">
                    <h1>América do Norte <FaGlobeAmericas /></h1>
                    <div className="cards-container">
                        <Card title="Número atualizado de casos:" info={norteData.cases}/>
                        <div className="part">
                            <div>
                                <Card title="Número de países atingidos:" info={countries.length} />
                                <Card title="Número de casos ativos:" info={norteData.active} />
                                <Card title="Número de casos registrados hoje:" info={norteData.todayCases} />
                            </div>
                            <div>
                                <Card title="População:" info={norteData.population} />
                                <Card title="Número de mortes:" info={norteData.deaths} />
                                <Card title="Número de mortes registradas hoje:" info={norteData.todayDeaths} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
