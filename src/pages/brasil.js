import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { GiBrazil } from 'react-icons/gi'
import { motion } from 'framer-motion';

import Card from '../components/Card'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MenuHamburger from '../components/MenuHamburger'

export default function Brasil() {
    
    const [cases, setCases] = useState('')
    const [active, setActive] = useState('')
    const [todayCases, setTodayCases] = useState('')
    const [population, setPopulation] = useState('')
    const [deaths, setDeaths] = useState('')
    const [todayDeaths, setTodayDeaths] = useState('')

    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/countries/Brazil?yesterday=true&twoDaysAgo=true&strict=true')
            .then(res => {
            
                setCases(res.data.cases)
                setActive(res.data.active)
                setTodayCases(res.data.todayCases)
                setPopulation(res.data.population)
                setDeaths(res.data.deaths)
                setTodayDeaths(res.data.todayDeaths)
        
                // console.log(res.data)
            })
    }, [])

    return (
        <div>
            <MenuHamburger />
            <div className="container">
                <Menu />
                <motion.div 
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        show: { opacity: 1 },
                        hidden: { opacity: 0 },
                    }}
                    initial="hidden"
                    animate="show"
                    className="dataDiv"
                >
                    <h1>Brasil <GiBrazil /></h1>
                    <div className="cards-container">                        
                    <div className="part">
                            <div>
                                <Card title="Casos atualizados:" info={cases.toLocaleString('pt-BR')}/>
                                <Card title="Casos ativos:" info={active.toLocaleString('pt-BR')} />
                                <Card title="Casos registrados hoje:" info={todayCases.toLocaleString('pt-BR')} />
                            </div>
                            <div>
                                <Card title="População:" info={population.toLocaleString('pt-BR')} />
                                <Card title="Mortes:" info={deaths.toLocaleString('pt-BR')} />
                                <Card title="Mortes registradas hoje:" info={todayDeaths.toLocaleString('pt-BR')} />
                            </div>
                        </div>
                    </div>
                </motion.div>  
            </div>
            <Footer />
        </div>
    )
}
