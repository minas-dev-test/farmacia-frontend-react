import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import 'typeface-roboto'

import { theme } from './settings'
import UpdateHandler from './components/UpdateHandler'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/views/Home';
import About from './components/views/About';
import News from './components/views/News';
import NewsSingle from './components/views/NewsSingle';
import PontosApoio from './components/views/PontosApoio';
import MedicinesView from './components/views/Medicines';

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <UpdateHandler appServiceWorker={this.props.appServiceWorker}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/news" component={News} />
                            <Route exact path="/news/:id" component={NewsSingle} />
                            <Route exact path="/news/:id" component={NewsSingle} />
                            <Route exact path="/place" component={PontosApoio} />
                            <Route exact path="/medicine" component={MedicinesView} />
                        </Switch>
                    </UpdateHandler>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
