import React, { Component } from "react";
import "./AppMobile.scss";
import OwlCarousel from "react-owl-carousel";
import ScrollAnimation from "react-animate-on-scroll";
// import mobile
import mobile_1 from "../../images/mobile/mobile_1.png";
import mobile_2 from "../../images/mobile/mobile_2.jpg";
import mobile_3 from "../../images/mobile/mobile_3.jpg";
import mobile_4 from "../../images/mobile/mobile_4.jpg";
import mobile_5 from "../../images/mobile/mobile_5.jpg";
import mobile_6 from "../../images/mobile/mobile_6.jpg";
import mobile_7 from "../../images/mobile/mobile_7.jpg";
import mobile_8 from "../../images/mobile/mobile_8.jpg";
import mobile_9 from "../../images/mobile/mobile_9.jpg";
export default class AppMobile extends Component {
  render() {
    return (
      <section id="forMobile" className="forMobile background__homeapp">
        <div className="container">
          <div className="forMobile__content">
            <div className="row">
              <div className="forMobile__left col-md-6 col-sm-12">
                <ScrollAnimation animateIn="fadeInLeft">
                  <p className="text__app">
                    Ứng dụng tiện lợi dành cho người yêu điện ảnh
                  </p>
                  <p className="text__description">
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <button className="btn__app">
                    App miễn phí - Tải về ngay
                  </button>
                  <p className="text__appversion">
                   DS Movie có 2 phiên bản
                    <a className="appforos__link" href="/#">
                      {" "}
                      iOS
                    </a>
                    {" & "}
                    <a className="appforos__link" href="/#">
                      Android
                    </a>
                  </p>
                </ScrollAnimation>
              </div>
              <div className="forMobile__right col-md-6 col-sm-12">
                <ScrollAnimation animateIn="fadeInRight">
                  <div className="mobile__frame">
                    <img
                      className="img-fluid"
                      src={mobile_1}
                      alt="hinhanh"
                    />
                    {/* MOBILE CAROUSEL */}
                    <OwlCarousel
                      nav={false}
                      dots={false}
                      items={1}
                      loop
                      autoplay
                      className="mobileCarousel owl-carousel owl-theme"
                    >
                      <div className="item">
                        <img
                          className="img-fluid"
                          src={mobile_2}
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src={mobile_3}
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src={mobile_4}
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src={mobile_5}
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src={mobile_6}
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src={mobile_7}
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src={mobile_8}
                          alt="hinhanh"
                        />
                      </div>
                      <div className="item">
                        <img
                          className="img-fluid"
                          src={mobile_9}
                          alt="hinhanh"
                        />
                      </div>
                    </OwlCarousel>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
