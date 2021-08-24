import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Doctor from "../Images/doctor.png";

function About() {
  return (
    <>
      <Container>
        <div className="page-title">
          <p className="title">About </p>
          <h1 className="heading">Skin Square</h1>
        </div>
        <div className="my-5">
          <p className="text-center">
            <b>---Our Team---</b>
          </p>
          <h3 className="text-center">We Have Some Awsome People</h3>
          {Array.from({ length: 6 }).map((_, idx) => (
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
    </>
  );
}

export default About;
