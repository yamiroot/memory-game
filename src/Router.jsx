import React from 'react';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import GameCards from './components/GameCards';
import GameRules from './components/GameRules';
import PageError from './components/PageError';
import dataCards from './data/cards';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/gamecards" />)} />
      <Route
        path="/gamecards"
        render={() => <GameCards name="Juego de cartas" dataCards={dataCards.sort(() => (0.5 - Math.random()))} />}
      />
      <Route
        path="/gamerules"
        render={() => <GameRules name="Reglas del juego" />}
      />
      <Route component={PageError} />
    </Switch>
  </HashRouter>
);


export default Router;
