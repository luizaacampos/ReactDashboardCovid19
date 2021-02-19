import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Mundo from './pages/mundo'
import Brasil from './pages/brasil'
import Asia from './pages/asia'
import Europa from './pages/europa'
import AmericaNorte from './pages/americaNorte'
import AmericaSul from './pages/americaSul'
import Oceania from './pages/oceania'
import Africa from './pages/africa'

const Routes = () => (
    <BrowserRouter>
     <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/mundo" component={Mundo} />
         <Route path="/brasil" component={Brasil} />
         <Route path="/asia" component={Asia} />
         <Route path="/europa" component={Europa} />
         <Route path="/america-do-norte" component={AmericaNorte} />
         <Route path="/america-do-sul" component={AmericaSul} />
         <Route path="/oceania" component={Oceania} />
         <Route path="/africa" component={Africa} />
     </Switch>   
    </BrowserRouter>
)

export default Routes