import axios from "../axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import categories from "../categories";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div>
      <div className="carousel-container mt-4">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img
              src="https://res.cloudinary.com/camtu/image/upload/v1686889814/asus-gaming-banner-thinkpro_npy9qw.jpg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/camtu/image/upload/v1686889814/lenovo-laptop-thinkpad-banner-1143x357_etvckk.jpg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/camtu/image/upload/v1686921332/Dark_Laptop_Review_Youtube_Thumbnail_qey9us.png"
              alt="Slide 3"
            />
          </div>
        </Carousel>
      </div>
      <div className="featured-products-container container mt-4">
        <h2>Popular products</h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>
      {/* sale banner */}
      <Container className="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="marquee-container d-flex">
                <div className="mx-4 w-25">
                  <img
                    src="images/asus.png"
                    alt="brand"
                    className="marquee-image"
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/acer.png"
                    alt="brand"
                    className="marquee-image"
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/dell.png"
                    alt="brand"
                    className="marquee-image"
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/lenovo1.png"
                    alt="brand"
                    className="marquee-image"
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              key={category.name}
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
