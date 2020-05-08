import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import GameCards from './components/GameCards';
import GameRules from './components/GameRules';
import PageError from './components/PageError';
import dataCards from './data/cards';

const Router = () => (
  <BrowserRouter>
    <Redirect
      from="/"
      to="/gamecards"
    />
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/gamecards" />)} />
      <Route
        exact
        path="/gamecards"
        render={() => <GameCards name="Juego de cartas" dataCards={dataCards.sort(() => (0.5 - Math.random()))} />}
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
