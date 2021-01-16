import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { routesHome, routesAdmin } from './routes';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
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
          {/* <HomeTemplate exact path='/' Component={Home} />
          <HomeTemplate exact path='/home' Component={Home} />
          <HomeTemplate exact path='/allmovie' Component={AllMovie} />
          <HomeTemplate
            exact
            path='/moviedetail/:maphim'
            Component={DetailMovie}
          />
          <HomeTemplate
            exact
            path='/booking/:maLichChieu'
            Component={BookingTicket}
          />
          <HomeTemplate exact path='/login' Component={Login} />
          <HomeTemplate exact path='/register' Component={Register} />
          <HomeTemplate exact path='/profile' Component={Profile} />
          <HomeTemplate exact path='/clustercinema' Component={ClusterCinema} />
          <HomeTemplate exact path='/news' Component={News} />
          <HomeTemplate
            exact
            path='/detailnews/:matintuc'
            Component={DetailNews}
          />
          <AdminTemplate exact path='/dashboard' Component={Dashboard} />
          <AdminTemplate
            exact
            path='/usermanagement'
            Component={UserManagement}
          />
          <AdminTemplate
            exact
            path='/moviemanagement'
            Component={MovieManagement}
          />
          <AdminTemplate
            exact
            path='/createshowtime'
            Component={CreateShowTime}
          />
          <AdminTemplate
            exact
            path='/newsmanagement'
            Component={NewsManagement}
          /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
