import React, { Fragment } from "react";
import Carousel from "../components/Carousel/Carousel";
import ListMovie from "../components/ListMovie/ListMovie";
import ShowTimeHome from "../components/ShowTimeHome/ShowTimeHome";
import News from "../components/News/News";
import AppMobile from "../components/AppMobile/AppMobile";
import Scroll from "../components/Scroll/ScrollBackToTop"

import ScrollAnimation from "react-animate-on-scroll";

export default function Home() {
  return (
    <Fragment>
      <Scroll showBelow={250} />
      <Carousel />
      <ListMovie />
      <ScrollAnimation animateIn="fadeIn">
        <ShowTimeHome />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <News />
      </ScrollAnimation>
      <AppMobile />
    </Fragment>
  );
}
