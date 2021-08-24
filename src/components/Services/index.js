import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import ServicesLogo from "../Images/services.png";
import UserImg from "../Images/user-image.png";

function Services() {
  return (
    <>
      <Container>
        <div className="page-title">
          <p className="title">Services</p>
          <h1 className="heading">What We DO</h1>
        </div>
        <div className="mt-5 mb-5">
          <Row className="g-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col lg={4}>
                <Card>
                  <Card.Img variant="top" src={ServicesLogo} />
                  <Card.Body>
                    <Card.Title classNam="form-label">
                      Alopecia Areata
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra risus senectus maecenas et morbi.
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      Read More{" "}
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5 mb-5">
          <p className="text-center">
            <b>---Testimonials---</b>
          </p>
          <h3 className="text-center">What People Say About Us!</h3>
          <div className="my-5 mx-5">
          <Row className="g-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col lg={6} md={6}>
                <Card className="position-relative border border-light">
                  <Card.Img variant="top" src={UserImg} className="user-img" />
                  <Card.Body>
                    <Card.Text className="p-3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Leo a sem sed nibh netus morbi auctor nam suscipit. Nisl,
                      id ut eget nullam.”
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
      </Container>
    </>
  );
}

export default Services;
