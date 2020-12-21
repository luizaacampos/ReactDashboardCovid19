import React, { useState, useEffect } from 'react'

import axios from 'axios'

import './App.css'
import Card from './components/Card'

function App() {

  const [cases, setCases] = useState('')
  const [active, setActive] = useState('')
  const [todayCases, setTodayCases] = useState('')
  const [deaths, setDeaths] = useState('')
  const [todayDeaths, setTodayDeaths] = useState('')
  const [brCases, setBrCases] = useState('')
  const [brActive, setBrActive] = useState('')
  const [brTodayCases, setBrTodayCases] = useState('')
  const [brDeaths, setBrDeaths] = useState('')
  const [brTodayDeaths, setBrTodayDeaths] = useState('')
  const [vaccines, setVaccines] = useState('')
  const [vaccinesSource, setVaccinesSource] = useState('')
 
 

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=true')
      .then(res => {
        setCases(res.data.cases)
        setActive(res.data.active)
        setTodayCases(res.data.todayCases)
        setDeaths(res.data.deaths)
        setTodayDeaths(res.data.todayDeaths)
        console.log(res.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/countries/Brazil?yesterday=true&twoDaysAgo=true&strict=true')
      .then(res => {
        setBrCases(res.data.cases)
        setBrActive(res.data.active)
        setBrTodayCases(res.data.todayCases)
        setBrDeaths(res.data.deaths)
        setBrTodayDeaths(res.data.todayDeaths)
        //console.log(res.data);
      }, [])
  })

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/vaccine')
      .then(res => {
        setVaccines(res.data.phases[0].candidates)
        setVaccinesSource(res.data.source)
        
        //console.log(res.data)
      }, [])
  })


  return (
    <div className='App'>
      <h1>Covid-19 pelo mundo</h1>
      <div className="cards-container">
        <Card title="Número atualizado de casos:" info={cases}/>
        <Card title="Número de casos ativos:" info={active} />
        <Card title="Número de casos registrados hoje:" info={todayCases} />
        <Card title="Número de mortes:" info={deaths} />
        <Card title="Número de mortes registradas hoje:" info={todayDeaths} />
      </div>
      <h1>Covid-19 no Brasil</h1>
      <div className="cards-container">
        <Card title="Número atualizado de casos:" info={brCases}/>
        <Card title="Número de casos ativos:" info={brActive} />
        <Card title="Número de casos registrados hoje:" info={brTodayCases} />
        <Card title="Número de mortes:" info={brDeaths} />
        <Card title="Número de mortes registradas hoje:" info={brTodayDeaths} />
      </div>
      <h1>Vacinas</h1>
      <div className="cards-container">
        <Card title="Candidatas em fase 3:" info={vaccines} />
      </div>
      <p className="source"><strong>Fonte: </strong>{vaccinesSource}</p>
    </div>
  );

}

export default App;