import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { routesHome, routesAdmin } from './routes';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import PageNotFound from './pages/PageNotFound'
class App extends Component {
  render() {
    const showLayoutHome = (routes) => {
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };

    const showLayoutAdmin = (routes) => {
      if (routes && routes.length > 0) {
        return routes.map((item, index) => {
          return (
            <AdminTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };

    return (
      <BrowserRouter>
        <Switch>
          {showLayoutAdmin(routesAdmin)}
          {showLayoutHome(routesHome)}
  <Route path='' component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
