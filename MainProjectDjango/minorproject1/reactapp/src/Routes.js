import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import App from './App';
import Webcam from '../src/webcam';
import Detail from './DetailedReport'
import Log from    './log'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/webcamlive" exact component={Webcam} />
                <Route path="/detailedreport" exact component={Detail} />
                <Route path="/log" exact component={Log} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;