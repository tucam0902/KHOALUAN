import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container-xxl">
        <div className="row">
          <div className="contact-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.5513410192366!2d108.43570603853024!3d11.96739219706583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112c8e427c9a3%3A0x882fed7c42911fa1!2zMTUgxJDGsOG7nW5nIFTDtG4gVGjhuqV0IFTDuW5nLCBQaMaw4budbmcgOCwgVGjDoG5oIHBo4buRIMSQw6AgTOG6oXQsIEzDom0gxJDhu5NuZyA2NzAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1684123143652!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style={{ border: "0", width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="col-12 mt-5">
                  <div className="contact-inner-wrapper d-flex justify-content-between">
                    <div>
                      <h3 className="contact-title">Liên lạc </h3>
                      <form action="" className="d-flex flex-column gap-15">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tên"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Điện thoại"
                          />
                        </div>
                        <div>
                          <textarea
                            name=""
                            id=""
                            className="w-100 form-control"
                            cols="30"
                            row="10"
                            placeholder="Nội dung"
                          ></textarea>
                        </div>
                        <div>
                          <button className="button">Gửi</button>
                        </div>
                      </form>
                    </div>
                    <div>
                      <h3 className="contact-title">Liên lạc với chúng tôi </h3>
                      <div>
                        <ul className="ps-0">
                          <li className="mb-3 d-flex gap-15 align-item-center">
                            <AiOutlineHome className="fs-5" />
                            <address className="mb-0">
                              15 Tôn Thất Tùng - Phường 8 - Đà Lạt - Lâm Đồng
                            </address>
                          </li>
                          <li className="mb-3 d-flex gap-15 align-item-center">
                            <AiOutlineMail className="fs-5" />
                            <a href="mail to: tu75657@gmai.com">
                              tu75657@gmai.com
                            </a>
                          </li>
                          <li className="mb-3 d-flex gap-15 align-item-center">
                            <BsTelephone className="fs-5" />
                            <a href="tel: 0974953348">0974953348</a>
                          </li>
                          <li className="mb-3 d-flex gap-15 align-item-center">
                            <AiOutlineInfoCircle className="fs-5" />
                            <p className="mb-0">Thứ 2 - Chủ Nhật 7AM - 10PM</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
