import React, { Component } from "react";
import "./News.scss";
import news3 from "../../images/news/news3.png";
import news4 from "../../images/news/news4.png";
import news5 from "../../images/news/news5.png";
import news6 from "../../images/news/news6.jpg";
import news7 from "../../images/news/news7.jpg";
import news8 from "../../images/news/news8.jpg";
import news9 from "../../images/news/news9.jpg";
import news10 from "../../images/news/news10.jpg";
import news11 from "../../images/news/news11.png";
import news12 from "../../images/news/news12.jpg";
import news13 from "../../images/news/news13.png";
import news14 from "../../images/news/news14.jpg";
import news15 from "../../images/news/news15.jpg";
import news16 from "../../images/news/news16.jpg";
import doremon from "../../images/news/doremon.jpg"


export default class News extends Component {
  render() {
    return (
      <section id="news" className="news">
        <div className="container">
          <div id="newsTab">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-24h-tab"
                  data-toggle="pill"
                  href="#pills-24h"
                  role="tab"
                  aria-controls="pills-24h"
                  aria-selected="true"
                >
                  Điện Ảnh 24h
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-review-tab"
                  data-toggle="pill"
                  href="#pills-review"
                  role="tab"
                  aria-controls="pills-review"
                  aria-selected="false"
                >
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-promotion-tab"
                  data-toggle="pill"
                  href="#pills-promotion"
                  role="tab"
                  aria-controls="pills-promotion"
                  aria-selected="false"
                >
                  Khuyến Mãi
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-24h"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="tab__content">
                  <div className="card-content row">
                    <div className="example-1 card">
                      <div className="wrapper">
                        <div className="datepost">
                          <span className="daypost">20</span>
                          <span className="monthpost">Tháng 12</span>
                          <span className="yearpost">2020</span>
                        </div>
                        <div className="datanews">
                          <div className="contentnews">
                            <span className="authornews">Huỳnh Dũng</span>
                            <h1 className="titlenews">
                              <a
                                // target="_blank"
                                className="title__link"
                                href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh"
                              >
                                “Bóc tem” tổ hợp giải trí mới toanh của giới Hà
                                Thành
                              </a>
                            </h1>
                            <p className="text-description">
                              Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui
                              chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ
                              chính thức khai trương tại 360 Giải Phóng!
                            </p>
                            <label htmlFor="show-menu" className="menu-button">
                              <span />
                            </label>
                          </div>
                          <input type="checkbox" id="show-menu" />
                          <ul className="menu-content">
                            <li className="menu-content-item">
                              <a className="item__link" href="/#">
                                <i className="fa fa-tag"></i>
                              </a>
                            </li>
                            <li className="menu-content-item">
                              <a href="/#" className="item__link fa fa-heart">
                                <span className="item-data">47</span>
                              </a>
                            </li>
                            <li className="menu-content-item">
                              <a href="/#" className="item__link fa fa-comment">
                                <span className="item-data">8</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="example-2 card">
                      <div className="wrapper">
                        <div className="header-post">
                          <div className="datepost">
                            <span className="daypost">28 </span>
                            <span className="monthpost">Tháng 12 </span>
                            <span className="yearpost">2020</span>
                          </div>
                          <ul className="menu-content">
                            <li className="menu-content-item">
                              <a href="/#" className="item__link">
                                <i className="fa fa-bookmark"></i>
                              </a>
                            </li>
                            <li className="menu-content-item">
                              <a href="/#" className="item__link fa fa-heart">
                                <span className="item-data">172</span>
                              </a>
                            </li>
                            <li className="menu-content-item">
                              <a href="/#" className="item__link fa fa-comment">
                                <span className="item-data">32</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="datanews">
                          <div className="contentnews">
                            <span className="authornews">Huỳnh Dũng </span>
                            <h1 className="titlenews">
                              <a
                                className="title__link"
                                href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
                              >
                                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau
                                2 tuần công chiếu
                              </a>
                            </h1>
                            <p className="text-description">
                              Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia
                              nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng
                              doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim
                              cũng lần đầu tiên hội tụ đầy đủ trong một khung
                              hình để ăn mừng thành tích ấn tượng
                            </p>
                            <a href="/#" className="button-watch">
                              Xem thêm
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="readMore">
                    <button className="btn btn__readmore">XEM THÊM</button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-review"
                role="tabpanel"
                aria-labelledby="pills-review-tab"
              >
                <div className="tab__content">
                  <div className="row__above row">
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="/#">
                          <img
                            className="img-fluid"
                            src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2020/12/12/fb-copy-9-16077556997391074971427.jpg"
                            alt="hinhAnh"
                          />
                        </a>
                      </div>
                      <div className="item__text">
                        <a
                          className="item__title"
                          href="https://kenh14.vn/lay-nhu-bang-com-nghe-sieu-kho-ngay-ban-ga-toi-dieu-tra-ma-cong-kenh-den-kho-vua-hai-lai-vua-duyen-20201212123037793.chn"
                        >
                          [Review] Không phải tự dưng mà Nghề Siêu Khó lại trở
                          thành phim có doanh thu cao nhất mọi thời đại tại Hàn
                          Quốc.
                        </a>
                        <p className="item__description">
                          Lầy như băng cớm Nghề Siêu Khó: Ngày bán gà, tối điều
                          tra mà cồng kềnh đến khổ, vừa hài lại vừa duyên!
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">16</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">6</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="/#">
                          <img
                            className="img-fluid"
                            src={doremon}
                            alt="hinhAnh"
                          />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="/#">
                          [Review nhanh] Phim Doraemon: Nobita Và Những Bạn
                          Khủng Long Mới
                        </a>
                        <p className="item__description">
                          Doraemon là tuổi thơ của rất nhiều người, kể cả tụi
                          nhỏ bây giờ cũng ghiền coi truyện và hoạt hình
                          Doraemon y chang mình khi xưa. Chú mèo máy đáng yêu và
                          màu nhiệm đã vượt ra khỏi ranh giới Nhật Bản, trở
                          thành nhân vật truyện tranh được yêu thích trên toàn
                          cầu.
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">0</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row__below row">
                    <div className="row__left col-md-8">
                      <div className="left__below row">
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img
                              className="img-fluid"
                              src={news3}
                              alt="news3"
                            />
                          </div>
                          <div className="item__text">
                            <a
                              className="item__title"
                              href="https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh"
                            >
                              ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức
                              tỉnh
                            </a>
                            <p className="item__description">
                              Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar
                              2019 của đạo diễn Spike Lee là một lát cắt nữa về
                              nạn phân biệt chủng tộc - nỗi đau gây nhức
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">5</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img
                              className="img-fluid"
                              src={news4}
                              alt="news4"
                            />
                          </div>
                          <div className="item__text">
                            <a
                              className="item__title"
                              href="https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia"
                            >
                              American Sniper - Chính nghĩa hay phi nghĩa?
                            </a>
                            <p className="item__description">
                              American Sniper khắc họa một tay súng bắn tỉa
                              “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến
                              ở Trung Đông. Câu chuyện phim chậm rãi đưa người
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">1</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row__right col-md-4 col-sm-12">
                      <ul>
                        <li className="right__item">
                          <a
                            className="item__link"
                            href="https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre"
                          >
                            <div className="item__img">
                              <img src={news5} alt="news5" />
                            </div>
                            <div className="item__title">
                              Review: Spider-Man: Into The Spider-Vesre
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a
                            className="item__link"
                            href="https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011"
                          >
                            <div className="item__img">
                              <img src={news6} alt="news6" />
                            </div>
                            <div className="item__title">
                              COVID-19 là bản chính thức của MEV-1 phim
                              contagion (2011)
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a
                            className="item__link"
                            href="https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the"
                          >
                            <div className="item__img">
                              <img src={news7} alt="news7" />
                            </div>
                            <div className="item__title">
                              [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống
                              chưa bao giờ lầy lội và hài hước đến thế
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a
                            className="item__link"
                            href="https://tix.vn/review/7881-review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant"
                          >
                            <div className="item__img">
                              <img src={news8} alt="news8" />
                            </div>
                            <div className="item__title">
                              [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ
                              Siêu anh hùng Valiant
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="readMore">
                    <button className="btn btn__readmore">XEM THÊM</button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-promotion"
                role="tabpanel"
                aria-labelledby="pills-promotion-tab"
              >
                <div className="tab__content">
                  <div className="row__above row">
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="/#">
                          <img
                            className="img-fluid"
                            src={news11}
                            alt="news11"
                          />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix">
                          ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX
                        </a>
                        <p className="item__description">
                          ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm
                          và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi
                          đặt vé qua TIX.
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">2</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">0</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__item col-md-6 col-sm-12">
                      <div className="item__img">
                        <a href="/#">
                          <img
                            className="img-fluid"
                            src={news12}
                            alt="news12"
                          />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan">
                        BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!
                        </a>
                        <p className="item__description">
                        Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.
                        </p>
                      </div>
                      <div className="item__icon">
                        <div className="icon__social d-inline">
                          <i className="fa fa-thumbs-up" />
                          <span className="count__number">0</span>
                        </div>
                        <div className="icon__social d-inline">
                          <i className="fa fa-comment-alt" />
                          <span className="count__number">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row__below row">
                    <div className="row__left col-md-8">
                      <div className="left__below row">
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img
                              className="img-fluid"
                              src={news9}
                              alt="news9"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan">
                            BHD 59K/VÉ CẢ TUẦN !!!
                            </a>
                            <p className="item__description">
                            Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">5</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                        <div className="left__item col-6">
                          <div className="item__img">
                            <img
                              className="img-fluid"
                              src={news10}
                              alt="news10"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve">
                            TIX 1K/VÉ NGẠI CHI GIÁ VÉ
                            </a>
                            <p className="item__description">
                            Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga
                            </p>
                          </div>
                          <div className="item__icon">
                            <div className="icon__social d-inline">
                              <i className="fa fa-thumbs-up" />
                              <span className="count__number">1</span>
                            </div>
                            <div className="icon__social d-inline">
                              <i className="fa fa-comment-alt" />
                              <span className="count__number">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row__right col-md-4 col-sm-12">
                      <ul>
                        <li className="right__item">
                          <a className="item__link" href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon">
                            <div className="item__img">
                              <img
                                src={news13}
                                alt="news13"
                              />
                            </div>
                            <div className="item__title">
                            Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai">
                            <div className="item__img">
                              <img
                                src={news14}
                                alt="news14"
                              />
                            </div>
                            <div className="item__title">
                            [123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay">
                            <div className="item__img">
                              <img
                                src={news15}
                                alt="news15"
                              />
                            </div>
                            <div className="item__title">
                            [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src={news16}
                                alt="news16"
                              />
                            </div>
                            <div className="item__title">
                            [Mega GS] Một đoá hoa thay ngàn lời yêu
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="readMore">
                    <button className="btn btn__readmore">XEM THÊM</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
