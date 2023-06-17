import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="container">
          <div className="row">
            {" "}
            <footer className="py-4">
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="footer-top-data d-flex gap-30 align-items-center">
                      <h4 className="mb-0 text-white">Đăng nhập với</h4>
                    </div>
                  </div>

                  <div className="col-7">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="Địa chỉ email"
                        aria-label="Địa chỉ email"
                        aria-describedby="basic-addon2"
                      />
                      <span class="input-group-text p-2" id="basic-addon2">
                        Đăng ký
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <footer className="py-4">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-4">
                    <h5 className="text-white mb-4">Liên lạc</h5>
                    <div>
                      <address className="text-white fs-6">
                        15 Tôn Thất Tùng, <br /> Đà Lạt, Lâm Đồng
                      </address>
                      <a
                        href="Tel: 0974953348"
                        className="mt-3 d-block mb-3 text-white"
                      >
                        0974953348
                      </a>
                      <a
                        href="Mail: tu75657@gmail.com"
                        className="mt-2 d-block mb-3 text-white"
                      >
                        tu75657@gmail.com
                      </a>
                      <div className="social_icons d-flex align-items-center gap-30 mt-4">
                        <a className="text-white" href="#">
                          <BsFacebook className=" fs-4" />
                        </a>

                        <a className="text-white" href="#">
                          <BsInstagram className="fs-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <h5 className="text-white mb-4">Thông tin</h5>
                    <div className="footer-link d-flex flex-column">
                      <Link to="/privacy" className="text-white py-2 mb-1">
                        Bảo mật
                      </Link>
                      <Link to="/refund" className="text-white py-2 mb-1">
                        Hoàn tiền
                      </Link>
                      <Link to="/shipping" className="text-white py-2 mb-1">
                        Vận chuyển
                      </Link>
                      <Link
                        to="/termandconditon"
                        className="text-white py-2 mb-1"
                      >
                        Điều khoản dịch vụ
                      </Link>
                      <Link to="/privacy" className="text-white py-2 mb-1">
                        Blogs
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <h5 className="text-white mb-4">Tài khoản</h5>
                    <div className="footer-link d-flex flex-column">
                      <Link className="text-white py-2 mb-1">Về shop</Link>
                      <Link className="text-white py-2 mb-1">Fag </Link>
                      <Link className="text-white py-2 mb-1">Liên lạc</Link>
                    </div>
                  </div>
                  <div className="col-2">
                    <h5 className="text-white mb-4">Links</h5>
                    <div className="footer-link d-flex flex-column">
                      <Link className="text-white py-2 mb-1">Macbook</Link>
                      <Link className="text-white py-2 mb-1">HP</Link>
                      <Link className="text-white py-2 mb-1">ASus</Link>
                      <Link className="text-white py-2 mb-1">Dell</Link>
                      <Link className="text-white py-2 mb-1">Lenovo</Link>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <footer className="py-4">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <p className="text-center mb-0 text-white">
                      &copy; {new Date().getFullYear()};Nguyễn Cẩm Tú
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
