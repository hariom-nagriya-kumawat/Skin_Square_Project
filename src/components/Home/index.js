import React from "react";
import Slider from "react-slick";
import {
  Row,
  Container,
  Col,
  Card,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import Banner from "../Images/banner-img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TreatImg1 from "../Images/treat1.png";
import TreatImg2 from "../Images/treat2.png";
import TreatImg3 from "../Images/treat3.png";
import TreatImg4 from "../Images/treat4.png";
import TreatImg5 from "../Images/treat5.png";
import UserImg from "../Images/user-image.png";
import Blog from "../Images/blog.png";
import Doctor from "../Images/doctor.png";

function Home() {
  const settings = {
    dots: true,
    fade: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="silderImg">
          <img src={Banner} alt="Banner" />
          {/* <div className="sliderTxt">
            <p>Skin square</p>
            <h5>We offer more possibilities to meet your every need</h5>
          </div> */}
        </div>
        <div>
          <img src={Banner} alt="Banner" />
        </div>
        <div>
          <img src={Banner} alt="Banner" />
        </div>
      </Slider>
      <Container>
        <div className="mt-5 mb-5">
          <p className="text-center">
            <b>---Treatments---</b>
          </p>
          <h3 className="text-center">Our Popular Treatments</h3>
          <Row className="centered my-5 g-5">
            <Col lg={4} className="p-3">
              <div>
                <img src={TreatImg1} alt="treatment" width="370" height="313" />
              </div>
            </Col>
            <Col lg={4} className="p-3">
              <div>
                <img src={TreatImg2} alt="treatment" width="370" height="313" />
              </div>
            </Col>
            <Col lg={4} className="p-3">
              <div>
                <img src={TreatImg3} alt="treatment" width="370" height="313" />
              </div>
            </Col>
            <Col lg={4} className="p-3">
              <div>
                <img src={TreatImg4} alt="treatment" width="370" height="313" />
              </div>
            </Col>
            <Col lg={4} className="p-3">
              <div>
                <img src={TreatImg5} alt="treatment" width="370" height="313" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="my-5">
          <p className="text-center">
            <b>---Our Team---</b>
          </p>
          <h3 className="text-center">We Have Some Awsome People</h3>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Row
              className={`my-5 ${
                idx % 2 !== 0 ? "d-flex flex-row-reverse" : null
              }`}
            >
              <Col lg={6}>
                <div className="team-border">
                  <img
                    src={Doctor}
                    alt="Doctor"
                    width="423"
                    height="392"
                    className="team-img"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="h-100 d-inline-block d-flex flex-column justify-content-center">
                  <h5>Wade Warren</h5>
                  <small className="text-muted">Doctor</small>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Scelerisque non hendrerit convallis mattis pharetra, sed
                    facilisi. Nulla facilisis viverra leo egestas hendrerit
                    urna.
                  </p>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
      <div className="my-5">
        <p className="text-center">
          <b>---Contact Us---</b>
        </p>
        <h3 className="text-center">Feel Free To Contact With Us</h3>
        <div className="contact-div mt-5"></div>
      </div>
      <Container>
        <div className="mt-5 mb-5">
          <p className="text-center">
            <b>---Testimonials---</b>
          </p>
          <h3 className="text-center">What People Say About Us!</h3>
          <div className="my-5 mx-5">
            <Row className="g-5">
              {Array.from({ length: 2 }).map((_, idx) => (
                <Col lg={6} md={6}>
                  <Card className="position-relative border border-light">
                    <Card.Img
                      variant="top"
                      src={UserImg}
                      className="user-img"
                    />
                    <Card.Body>
                      <Card.Text className="p-3">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Leo a sem sed nibh netus morbi auctor nam
                        suscipit. Nisl, id ut eget nullam.”
                        <div className="mt-3">
                          <b>Mike taylor</b>
                          <br />
                          <small>Mp, India</small>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <p className="text-center">
            <b>---Our Blog---</b>
          </p>
          <h3 className="text-center">Every Signel Update From Here</h3>
          <Row className="my-3 g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col lg={4}>
                <Card>
                  <Card.Img variant="top" src={Blog} className="rounded" />
                  <Card.Body>
                    <Card.Title classNam="form-label">
                      Questions every man wants to ask a dermatologist
                    </Card.Title>
                    <Card.Text className="mt-3">
                      <small>
                        <i class="fas fa-stopwatch"></i> January 25, 2021
                      </small>
                      &nbsp;&nbsp;
                      <small>
                        <i class="far fa-user"></i> Cristofer Westervelt
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Home;
