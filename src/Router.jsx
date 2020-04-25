import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import GameCards from './components/GameCards';
import GameRules from './components/GameRules';
import PageError from './components/PageError';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/gamecards" />)} />
      <Route
        exact
        path="/gamecards"
        render={() => <GameCards name="Juego de cartas" />}
      />
      <Route
        exact
        path="/gamerules"
        render={() => <GameRules name="Reglas del juego" />}
      />
      <Route component={PageError} />
    </Switch>
  </BrowserRouter>
);


export default Router;
