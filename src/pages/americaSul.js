import React, { useEffect, useState} from 'react'
import axios from 'axios'

import Card from '../components/Card'
import Menu from '../components/Menu'

export default function AmericaSul() {
    
    const [sulData, setSulData] = useState('')
    const [countries, setCountries] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/continents/South%20America?yesterday=true&twoDaysAgo=true&strict=true')
            .then(res => {
            setSulData(res.data)
            setCountries(res.data.countries)
    
            console.log(res.data)
            })
    }, [])

    return (
        <div>
            <div className="container">
                <Menu />
                <div className="dataDiv">
                    <h1>América do Sul</h1>
                    <div className="cards-container">
                        <Card title="Número atualizado de casos:" info={sulData.cases}/>
                        <div className="part">
                            <div>
                                <Card title="Número de países atingidos:" info={countries.length} />
                                <Card title="Número de casos ativos:" info={sulData.active} />
                                <Card title="Número de casos registrados hoje:" info={sulData.todayCases} />
                            </div>
                            <div>
                                <Card title="População:" info={sulData.population} />
                                <Card title="Número de mortes:" info={sulData.deaths} />
                                <Card title="Número de mortes registradas hoje:" info={sulData.todayDeaths} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
