import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Portfolio } from '../App'
import { RQMAppWrapper } from '../pages/RandomQuoteMachine'
import { JSCalc } from '../pages/JavascriptCalculator'
import { DrumMachine } from '../pages/DrumMachine'
import { SurveyPage } from '../pages/SurveyPage'
import { LandingPage } from '../pages/LandingPage'
import { TributePage } from '../pages/TributePage'

export default function AppRouter() {
    return (

        < Router >
            <Switch>
                <Route exact path="/" component={Portfolio} />                               
                <Route exact path="/Random-Quote-Machine" component={RQMAppWrapper} />
                <Route exact path="/Javascript-Calculator" component={JSCalc} />
                <Route exact path="/Drum-Machine" component={DrumMachine} />
                <Route exact path="/Survey-Page" component={SurveyPage} />
                <Route exact path="/Landing-Page" component={LandingPage} />
                <Route exact path="/TributePage" component={TributePage} />
                <Route exact path="" component={Page} />
                <Route exact path="" component={Page} />
                <Route exact path="" component={Page} />
                <Route exact path="" component={Page} />                
            </ Switch>
        </ Router >
    )
}

const Page = () => {
    return (
        <div>

        </div>
    )
}

