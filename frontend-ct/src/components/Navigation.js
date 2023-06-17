import React, { useRef, useState, useEffect } from "react";
import {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Container,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css";
import { LinkContainer } from "react-router-bootstrap";
import { logout, resetNotifications } from "../features/userSlice";
import axios from "../axios";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = new useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const bellRef = useRef(null);
  const notificationRef = useRef(null);
  const [bellPos, setBellPos] = useState({});

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  // console.log("check >>>", user);
  const unreadNotifications = user?.notifications?.reduce((acc, current) => {
    if (current.status === "unread") return acc + 1;
    return acc;
  }, 0);

  function handleToggleNotifications() {
    const position = bellRef.current.getBoundingClientRect();
    setBellPos(position);
    notificationRef.current.style.display =
      notificationRef.current.style.display === "block" ? "none" : "block";
    dispatch(resetNotifications());
    if (unreadNotifications > 0)
      axios.post(`/users/${user._id}/updateNotifications`);
  }

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Nguyen Cam Tu</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:0974953348">
                  0974953348
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                src="https://res.cloudinary.com/camtu/image/upload/v1686854716/logocam-removebg-preview_hqu6cf.png"
                alt="Logo"
                className="logo-image"
              />
            </Navbar.Brand>
          </LinkContainer>
          <header className="header-bottom py-3">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="menu-bottom d-flex align-items-center ">
                    <div className="menu-links">
                      <div className="d-flex align-items-center gap-15">
                        <NavLink to="/">Trang chủ</NavLink>
                        <NavLink to="/category/all">Cửa hàng</NavLink>
                        <NavLink to="/blog">Blogs</NavLink>
                        <NavLink to="/contact">Liên lạc</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/*no user*/}
              {!user ? (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              ) : (
                <>
                  {!user.isAdmin && (
                    <LinkContainer to="/cart">
                      <Nav.Link>
                        <i className="fas fa-shopping-cart"></i>
                        {user?.cart.count > 0 && (
                          <span className="badge badge-warning" id="cartcount">
                            {user.cart.count}
                          </span>
                        )}
                      </Nav.Link>
                    </LinkContainer>
                  )}

                  <Nav.Link
                    style={{ position: "relative" }}
                    onClick={handleToggleNotifications}
                  >
                    <i
                      className="fas fa-bell"
                      ref={bellRef}
                      data-count={unreadNotifications || null}
                    ></i>
                  </Nav.Link>

                  <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                    {user.isAdmin && (
                      <>
                        <LinkContainer to="/admin">
                          <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/new-product">
                          <NavDropdown.Item>Create Product</NavDropdown.Item>
                        </LinkContainer>
                      </>
                    )}

                    {!user.isAdmin && (
                      <>
                        <LinkContainer to="/cart">
                          <NavDropdown.Item>Cart</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/orders">
                          <NavDropdown.Item>My orders</NavDropdown.Item>
                        </LinkContainer>
                      </>
                    )}

                    <NavDropdown.Divider />
                    <Button
                      variant="danger"
                      onClick={handleLogout}
                      className="logout-btn"
                    >
                      Logout
                    </Button>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* notifications */}
        <div
          className="notifications-container"
          ref={notificationRef}
          style={{
            position: "absolute",
            top: bellPos.top + 30,
            left: bellPos.left,
            display: "none",
          }}
        >
          {user?.notifications.length > 0 ? (
            user?.notifications.map((notification) => (
              <p className={`notification-${notification.status}`}>
                {notification.message}
                <br />
                <span>
                  {notification.time.split("T")[0] +
                    " " +
                    notification.time.split("T")[1]}
                </span>
              </p>
            ))
          ) : (
            <p>No notifcations yet</p>
          )}
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
