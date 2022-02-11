import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Team from './Team';
import Main from './main';

function Router( ) {
    return (
        <div>
        
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/teamsss" component={Team} />
                    
                    
                </Switch>
            
        </div>
    );
}

export default Router;