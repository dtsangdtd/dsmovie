import React, { Component } from "react";
import "./News.scss";
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
                                href="https://kfcvietnam.com.vn/vi/khuyen-mai/81/tet-den-xuan-sang-phuc-loc-an-khang.html"
                              >
                                TẾT ĐẾN XUÂN SANG - PHÚC LỘC AN KHANG!!
                              </a>
                            </h1>
                            <p className="text-description">
                              Cơ hội nhận miễn phí hàng ngàn bộ quà tặng 6 lon
                              Pepsi Tết 2021!!! Chỉ cần gọi ngay 19006886 hoặc
                              đặt hàng trực tuyến qua website
                              www.kfcvietnam.com.vn, ứng dụng “KFC Vietnam” (cho
                              cả điện thoại iPhone và Android) để thưởng thức
                              ngay những combo với giá cực ưu đãi
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
                                href="https://zalopay.com/%f0%9f%92%99-cung-zalopay-chung-tay-noi-than-thuong.html"
                              >
                                CÙNG ZALOPAY CHUNG TAY NỐI THÂN THƯƠNG
                              </a>
                            </h1>
                            <p className="text-description">
                              Trong những năm qua, chương trình thiện nguyện
                              ‘Như chưa hề có cuộc chia ly’ đã mang đến những
                              cuộc đoàn tụ đầy xúc động; chúng ta đã từng chứng
                              kiến người anh gặp lại các em của mình sau 45 năm
                              li tán, người mẹ già lần đầu tiên gặp lại con trai
                              sau 81 năm đằng đẵng ngóng trông…
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
                            src="https://khenphim.com/wp-content/uploads/2020/12/Doraemon-2020-4-banner-e1607620367703.jpg"
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
                              src="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843500427339.jpg"
                              alt="hinhansdsddh"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="/#">
                              [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là
                              đây chứ đâu xa
                            </a>
                            <p className="item__description">
                              Brahms: The Boy II có những màn hù dọa ấn tượng
                              nhưng cái kết lại không tương xứng với phần mở đầu
                              hứa hẹn.
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
                              src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907845631.jpg"
                              alt="hinhaa212anh"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="/#">
                              [Review] Nhím Sonic - Cười thả ga cùng chàng nhím
                              siêu thanh lầy lội
                            </a>
                            <p className="item__description">
                              Nhờ tiếp thu ý kiến của fan mà Nhím Sonic đã trở
                              thành một trong những bộ phim chuyển thể từ trò
                              chơi điện tử xuất sắc nhất.
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
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg"
                                alt="ad223"
                              />
                            </div>
                            <div className="item__title">
                              [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ
                              chưa bao giờ là việc dễ dàng
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src="https://s3img.vcdn.vn/123phim/2020/02/review-bi-mat-cua-gio-cau-chuyen-tinh-nguoi-duyen-ma-day-nuoc-mat-15806427358700.jpg"
                                alt="hinhanh"
                              />
                            </div>
                            <div className="item__title">
                              [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện
                              đời mình qua phim ảnh
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src="https://s3img.vcdn.vn/123phim/2020/01/gai-gia-lam-chieu-3-cuoc-chien-me-chong-nang-dau-cua-gioi-sieu-giau-xu-hue-15798623446424.jpg"
                                alt="gai-gia-lam-chieu"
                              />
                            </div>
                            <div className="item__title">
                              [Review] Birds of Prey - Màn lột xác hoành tráng
                              của Harley Quinn và DC
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src="https://s3img.vcdn.vn/123phim/2020/01/30-chua-phai-tet-phim-vong-lap-thoi-gian-thuong-hieu-viet-15797534706701.jpg"
                                alt="30chualatet"
                              />
                            </div>
                            <div className="item__title">
                              [Review] Bí Mật Của Gió - Câu chuyện “tình người
                              duyên ma” đầy nước mắt
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
                            src="http://s3img.vcdn.vn/123phim/2017/06/bhd-star-gia-ve-45k-tai-bhd-star-quang-trung-14974982146099.jpg"
                            alt="bhdkhuyenami"
                          />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="/#">
                          CGV &amp; BHD Star – Mua 2 vé tính tiền 1 khi thanh
                          toán qua ZaloPay
                        </a>
                        <p className="item__description">
                          Áp dụng cho khách hàng mới của ZaloPay khi mua tại CGV
                          HOẶC BHD Star các suất chiếu Thứ 6, Thứ 7, Chủ Nhật.
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
                            src="https://s3img.vcdn.vn/123phim/2017/09/bhd-star-goi-phim-trang-yeu-thuong-15065869628551.jpg"
                            alt="bhdstarthay"
                          />
                        </a>
                      </div>
                      <div className="item__text">
                        <a className="item__title" href="/#">
                          Mua vé phim BHD Star - Nhận ngay Hoàn Tiền 20%
                        </a>
                        <p className="item__description">
                          Mua vé BHD Star thả ga, nhận ngay hoàn tiền xả láng
                          20% khi thanh toán qua ZaloPay.
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
                              src="http://s3img.vcdn.vn/123phim/2017/05/bhd-uu-dai-grab-14943206847693.jpg"
                              alt="212grapb"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="/#">
                              Chào bạn mới - BHD Star Mua 2 Tính Tiền 1
                            </a>
                            <p className="item__description">
                              Ưu đãi cực chất: Mua 2 vé BHD Star chỉ cần trả
                              tiền 1 vé khi thanh toán qua ZaloPay.
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
                              src="http://s3img.vcdn.vn/123phim/2017/06/zalo-pay-phim-hot-gia-hoi-14975106730615.jpg"
                              alt="zaloshs"
                            />
                          </div>
                          <div className="item__text">
                            <a className="item__title" href="/#">
                              Vui Tết cùng ZaloPay - CGV Mua 1 Tặng 1
                            </a>
                            <p className="item__description">
                              Ưu đãi mua 1 tặng 1 vé xem phim tại CGV cho khách
                              hàng mới khi thanh toán bằng ZaloPay.
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
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src="http://s3img.vcdn.vn/123phim/2017/03/galaxy-hoa-than-sieu-nhan-nhan-nhieu-uu-dai-14906148212096.jpg"
                                alt="galaxys2"
                              />
                            </div>
                            <div className="item__title">
                              CGV – 79.000Đ/vé cuối tuần khi thanh toán bằng
                              ZaloPay!
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src="http://s3img.vcdn.vn/123phim/2017/06/123phim-ddc-mua-ve-online-nhan-qua-lien-tay-14969118909584.jpg"
                                alt="ddcs22"
                              />
                            </div>
                            <div className="item__title">
                              [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt
                              11k/vé Anh Trai Yêu Quái
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src="http://s3img.vcdn.vn/123phim/2017/06/ddc-xem-phim-gia-re-truoc-10h-va-sau-22h-14968911599222.jpg"
                                alt="ddc-morgana"
                              />
                            </div>
                            <div className="item__title">
                              [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt
                              vé Pháp Sư Mù: Ai Chết Giơ Tay
                            </div>
                          </a>
                        </li>
                        <li className="right__item">
                          <a className="item__link" href="/#">
                            <div className="item__img">
                              <img
                                src="http://s3img.vcdn.vn/123phim/2017/06/ff4a2d1afce265cae66b8872197f1e5e.png"
                                alt="hinhgido"
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
