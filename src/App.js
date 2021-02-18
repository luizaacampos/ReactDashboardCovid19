import React, { useState, useEffect } from 'react'

import axios from 'axios'

import './App.css'
import Card from './components/Card'

function App() {

  const [mundialData, setMundialData] = useState('')
  const [brData, setBrData] = useState('')

  function showMundialData() {
    axios
      .get('https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=true')
      .then(res => {
        setMundialData(res.data)

        console.log(res.data)
      })
  }

  useEffect(() => {
    showMundialData()
  }, [])

  function showBrasilData() {
    axios
      .get('https://disease.sh/v3/covid-19/countries/Brazil?yesterday=true&twoDaysAgo=true&strict=true')
      .then(res => {
        setBrData(res.data)
        
        // console.log(res.data)
      })
  }

  return (
    <div className='App'>
      <div className="container">
        <aside className="menu">
        <h2 className="menuTitle">COVID-19</h2>
          <div className="menuBtn">Mundo</div>
          <div className="menuBtn">Brasil</div>
        </aside>
        <div className="dataDiv">
          <h1>Mundo</h1>
          <div className="cards-container">
            <Card title="Número atualizado de casos:" info={mundialData.cases.toLocaleString('pt-BR')}/>
            <div className="part">
              <div>
                <Card title="Número de casos ativos:" info={mundialData.active.toLocaleString('pt-BR')} />
                <Card title="Número de casos registrados hoje:" info={mundialData.todayCases.toLocaleString('pt-BR')} />
              </div>
              <div>
                <Card title="Número de mortes:" info={mundialData.deaths.toLocaleString('pt-BR')} />
                <Card title="Número de mortes registradas hoje:" info={mundialData.todayDeaths.toLocaleString('pt-BR')} />
              </div>
            </div>
          </div>
        </div>  
      </div>
       

      {/* <h1>Brasil</h1>
      <div className="cards-container">
        <Card title="Número atualizado de casos:" info={brData.cases.toLocaleString('pt-BR')}/>
        <Card title="Número de casos ativos:" info={brData.active.toLocaleString('pt-BR')} />
        <Card title="Número de casos registrados hoje:" info={brData.todayCases.toLocaleString('pt-BR')} />
        <Card title="Número de mortes:" info={brData.deaths.toLocaleString('pt-BR')} />
        <Card title="Número de mortes registradas hoje:" info={brData.todayDeaths.toLocaleString('pt-BR')} />
      </div> */}
    </div>
  );
}

export default App;