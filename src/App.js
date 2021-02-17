import React, { useState, useEffect } from 'react'

import axios from 'axios'

import './App.css'
import Card from './components/Card'

function App() {

  const [data, setData] = useState('')
  const [brData, setBrData] = useState('')

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=true')
      .then(res => {
        setData(res.data)

        // console.log(res.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/countries/Brazil?yesterday=true&twoDaysAgo=true&strict=true')
      .then(res => {
        setBrData(res.data)
        
        // console.log(res.data)
      })
    }, [])

  return (
    <div className='App'>
      <h1>Covid-19 pelo mundo</h1>
      <div className="cards-container">
        <Card title="Número atualizado de casos:" info={data.cases}/>
        <Card title="Número de casos ativos:" info={data.active} />
        <Card title="Número de casos registrados hoje:" info={data.todayCases} />
        <Card title="Número de mortes:" info={data.deaths} />
        <Card title="Número de mortes registradas hoje:" info={data.todayDeaths} />
      </div>

      <h1>Covid-19 no Brasil</h1>
      <div className="cards-container">
        <Card title="Número atualizado de casos:" info={brData.cases}/>
        <Card title="Número de casos ativos:" info={brData.active} />
        <Card title="Número de casos registrados hoje:" info={brData.todayCases} />
        <Card title="Número de mortes:" info={brData.deaths} />
        <Card title="Número de mortes registradas hoje:" info={brData.todayDeaths} />
      </div>
    </div>
  );
}

export default App;