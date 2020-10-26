import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import App from './App';
import Webcam from '../src/webcam';
import Detail from './DetailedReport'
import Log from    './log'
import Contact from './Contact'
import Donate from './Donate'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/webcamlive" exact component={Webcam} />
                <Route path="/detailedreport" exact component={Detail} />
                <Route path="/log" exact component={Log} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/donate" exact component={Donate} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;