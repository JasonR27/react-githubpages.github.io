import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrtflAppWrapper } from '../App'
import { RQMAppWrapper } from '../pages/RandomQuoteMachine'
//import { JSCalcAppWrapper } from '../pages/JavascriptCalculator'
//import { DMAppWrapper } from '../pages/DrumMachine'
//import { SPAppWrapper } from '../pages/SurveyPage'
//import { LPAppWrapper } from '../pages/LandingPage'
//import { TPAppWrapper } from '../pages/TributePage'

export function AppRouter() {
    return (
        < Router >
            <Switch>
            <Route path="/" >
            <PrtflAppWrapper />  
            </Route>              
                {/**<Route exact path="/" ><Portfolio /></Route>              
                <Route exact path="/Random-Quote-Machine" ><RQMAppWrapper /></Route>              
                <Route exact path="/Javascript-Calculator" ><JSCalc /></Route>              
    <Route exact path="/Drum-Machine" ><DrumMachine /></Route>*/}
                {/**
                 * <Route exact path="/" component={Portfolio} />                               
                 * <Route exact path="/Random-Quote-Machine" component={RQMAppWrapper} />
                <Route exact path="/Javascript-Calculator" component={JSCalc} />
                <Route exact path="/Drum-Machine" component={DrumMachine} />
                <Route exact path="/Survey-Page" component={SurveyPage} />
                <Route exact path="/Landing-Page" component={LandingPage} />
                <Route exact path="/TributePage" component={TributePage} />
                <Route exact path="/NotFound" component={NotFound} />
                <Route exact path="" component={Page} />
                <Route exact path="" component={Page} />
                <Route exact path="" component={Page} />
                <Route exact path="" component={Page} />*/}
            </ Switch>
        </ Router >
    )
}

/**
const Page = () => {
    return (
        <div>

        </div>
    )
}
*/

export default AppRouter;