import './Content.css';
import React from 'react';
import {Switch, Route} from'react-router-dom';
import About from '../../views/examples/About';

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    </main>
)

export default Content;