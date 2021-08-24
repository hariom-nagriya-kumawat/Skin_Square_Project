import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import UserImg from "../Images/user-image.png";

function Testimonials() {
  return (
    <>
      <Container>
        <div className="page-title">
          <p className="title">Testimonials</p>
          <h1 className="heading">What People Say About Us!</h1>
        </div>
        <div className="mt-5 mx-5">
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
      </Container>
    </>
  );
}

export default Testimonials;
