import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Training from './components/training/training';
import Nutrition from './components/nutrition/nutrition';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/training' component={Training} />
        <Route path='/nutrition' component={Nutrition} />
    </Switch>
)