import React from 'react';
import {BrowserRouter as Router, Route, link} from 'react-router-dom';

import MainScreen from './screen/MainScreen';
import AddScreen from './screen/AddScreen';
import ContactScreen from './screen/ContactScreen';

function AppRouter(){

    return(
        <Router>
            <Route path='/' exact component={MainScreen} />
            <Route path='/add' exact component={AddScreen} />
            <Route path='/contact/:id' exact component={ContactScreen} />
        </Router>
    )
}

export default AppRouter;