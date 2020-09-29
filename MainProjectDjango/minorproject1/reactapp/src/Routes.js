import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import App from './App';
import Webcam from '../src/webcam';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/webcamlive" exact component={Webcam} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;