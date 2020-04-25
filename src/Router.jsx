import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import GameCards from './components/GameCards';
import GameRules from './components/GameRules';
import PageError from './components/PageError';
import Footer from './components/Footer';


const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Redirect
        from="/"
        to="/gamecards"
      />
      <Switch>
        <Route
          exact
          path="/gamecards"
          component={GameCards}
        />
        <Route
          exact
          path="/gamerules"
          render={() => <GameRules name="Reglas del juego" />}
        />
        <Route component={PageError} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);


export default Router;
