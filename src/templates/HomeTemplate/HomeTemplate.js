import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import MiniNav from "../../components/MiniNav/MiniNav"
// import Playlist from "../../components/Playlist/Playlist"
import Footer from "../../components/Footer/Footer";
const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <MiniNav />
      {/* <Playlist/> */}
      {props.children}
      <Footer />
    </Fragment>
  );
};
export const HomeTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <props.Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};
