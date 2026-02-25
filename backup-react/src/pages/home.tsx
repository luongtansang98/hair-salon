import React from 'react';
import carousel1 from "../assets/images/banner/womens-haircut-style-banner.jpg";
import carousel2 from "../assets/images/banner/women-banner.jpg";
import carousel3 from "../assets/images/banner/salaries_hero1.png";
import hair1 from "../assets/images/images-girl-hair-cut.png";
import hair2 from "../assets/images/image-69.png";
import hair3 from "../assets/images/5874a2996d953bee20834e7dc0e0759a.jpg";
import hair4 from "../assets/images/232359e241eb09739b83a29040a3baf6.jpg";
import space1 from "../assets/images/noi-that-salon-toc-120-z2U.jpg";
import space2 from "../assets/images/salon-staff.png";
import space3 from "../assets/images/mirror-salon-reception-area.jpeg";
import prod1 from "../assets/images/products/Thuoc-nhuom-toc-Davines-mau-8.0.jpg";
import prod2 from "../assets/images/products/dau-goi-giu-mau-nhuom-loreal-vitamino-color-1500ml.jpg";
import prod3 from "../assets/images/products/dgm_nttt_dau-goi-toi-thorakao-600x600.jpg";
import prod4 from "../assets/images/products/thuocnhuomtoc.jpg";
import { useEffect } from "react";

import api from '../api';

const Home = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    api.get('/')
      .then((res) => {
        console.log(res);
      })
      .catch(error => {
        console.error('Lỗi khi gọi API:', error);
      });
  }, []);
  return (
    <div className="container-fluid background-app">
      

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade container mt-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        id="book-shortcut"
        className="d-flex justify-content-center mt-3 mb-3 container"
      >
        <div className="booking-container booking-wrapper strong-blue">
          <div>
            <p>
              <b>ĐẶT LỊCH GIỮ CHỖ CHỈ 30 GIÂY</b>
            </p>
          </div>
          <div className="input-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập số điện thoại..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-light"
              type="button"
              id="button-addon2"
            >
              Đặt lịch ngay
            </button>
          </div>
        </div>

        <div className="booking-container booking-wrapper  ms-2 w-auto">
          <div>
            <p>
              <b>GỌI TRỰC TIẾP</b>
            </p>
          </div>
          <div className="mb-3 mt-3">
            <button
              className="btn btn-outline-secondary w-100"
              type="button"
              id="button-addon2"
            >
              <i className="fa fa-phone" aria-hidden="true"></i>
              Gọi ngay
            </button>
          </div>
        </div>
      </div>

      <div id="main-content" className="container mb-5">
        <div className="main-service">
          <div className="title">Dịch vụ tóc</div>

          <div className="card-group">
            <div className="card ms-0" style={{ width: "18rem" }}>
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={hair1}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Cắt tóc</h5>
                <div>
                  <span>Chỉ từ 70.000đ</span>
                  <a href="#" className="float-end text-decoration-none">
                    Xem chi tiết{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={hair2}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Duỗi</h5>
                <div>
                  <span>Chỉ từ 180.000đ</span>
                  <a href="#" className="text-decoration-none float-end">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={hair3}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Uốn</h5>
                <div>
                  <span>Chỉ từ 369.000đ</span>
                  <a href="#" className="text-decoration-none float-end">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={hair4}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Nhuộm</h5>
                <div>
                  <span>Chỉ từ 199.000đ</span>
                  <a href="#" className="text-decoration-none float-end">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space">
          <div className="title">Không gian & Đội ngũ</div>

          <div className="d-flex justify-content-between">
            <div className="text-over-img-container">
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={space1}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="img-text-bottom-centered">
                Không gian thoáng, mát và sạch sẽ
              </div>
            </div>

            <div className="text-over-img-container">
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={space2}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="img-text-bottom-centered">
                Đội ngũ chuyên nghiệp
              </div>
            </div>

            <div className="text-over-img-container">
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={space3}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="img-text-bottom-centered">Thiết kế hiện đại</div>
            </div>
          </div>
        </div>
        <div className="feedback">
          <div className="title">Sản phẩm tóc</div>
        </div>

        <div className="card-group">
            <div className="card ms-0" style={{ width: "18rem" }}>
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={prod1}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Thuốc nhuộm tóc màu nâu</h5>
                <div>
                  <span>Chỉ từ 70.000đ</span>
                  <a href="/checkout" className="float-end text-decoration-none">
                    Xem chi tiết{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={prod2}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Dầu gội dưỡng</h5>
                <div>
                  <span>Chỉ từ 180.000đ</span>
                  <a href="#" className="text-decoration-none float-end">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={prod3}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Dầu gội vàng</h5>
                <div>
                  <span>Chỉ từ 369.000đ</span>
                  <a href="#" className="text-decoration-none float-end">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-hover-zoom img-hover-zoom--quick-zoom">
                <img
                  src={prod4}
                  className="card-img-top"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">Thuốc nhuộm đỏ</h5>
                <div>
                  <span>Chỉ từ 199.000đ</span>
                  <a href="#" className="text-decoration-none float-end">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
          </div>

        <div className="feedback">
          <div className="title">Feedback của khách hàng</div>
        </div>
      </div>

      <footer>
        <div className="row">
          <div className="col-3 offset-md-2">
            <p>Về chúng tôi</p>
            <p>Menu</p>
            <p>Địa chỉ: 82 Nguyễn Văn Cừ, Phường 8, Quận 3, TP.HCM</p>
          </div>
          <div className="col-3">
            <p>Giờ phục vụ: 9h-23h (Thứ 2 - Chủ Nhật)</p>
            <p>Số điện thoại: 0929003123</p>
          </div>
          <div className="col-3">
            <button
              className="btn social-btn btn-outline-secondary  mb-2"
              type="button"
              id="button-addon2"
              style={{color: 'white'}}
            >
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              Facebook
            </button>
            <br />
            <button
              className="btn btn-outline-secondary social-btn"
              type="button"
              id="button-addon2"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
              Instagram
            </button>
          </div>
        </div>
      </footer>
      <button onClick={scrollToTop} id="btn-scroll-top" title="Go to top">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </button>

      <button id="btn-mess" title="Go to top">
        <i className="fa fa-comment" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Home;
