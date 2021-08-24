import React, { useState } from "react";
import { Row, Container, Col, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

function Appointment() {
  const [startDate, setStartDate] = useState(new Date());
  function disabledDate(current) {
    // Can not select sundays and predfined days
    return moment(current).day() === 0;
  }
  return (
    <>
      <Container>
        <div className="page-title">
          <p className="title">Appointment</p>
          <h1 className="heading">Make an Appointment </h1>
        </div>
        <div className="m-3 mt-5">
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Choose Doctor</Form.Label>
                <Form.Select aria-label="Select Doctor" size="lg">
                  <option>Select Doctor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Choose Problem</Form.Label>
                <Form.Select aria-label="Select Problem" size="lg">
                  <option>Select Problem</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Choose Date and Time</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  disabledDate={disabledDate}
                  inline
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Available Slots on {moment(startDate).format('DD MMMM YYYY')}</Form.Label>
                <Row>
                  <Col lg={4}>
                    <Button variant="light" className="mb-3 border">09:00 AM</Button>
                  </Col>
                  <Col lg={4}>
                    <Button variant="light" className="mb-3 border">10:00 AM</Button>
                  </Col>
                  <Col lg={4}>
                    <Button variant="light" className="mb-3 border">12:00 PM</Button>
                  </Col>
                  <Col lg={4}>
                    <Button variant="light" className="mb-3 border">03:00 PM</Button>
                  </Col>
                  <Col lg={4}>
                    <Button variant="light" className="mb-3 border">04:00 PM</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          <h3 className="mb-5">Personal Information</h3>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  size="lg"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  size="lg"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Phone Number"
                  size="lg"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Age"
                  size="lg"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Write Your Problem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write Your Problem"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button className="appointBtn mt-3 mb-5 pt-2 pb-2">
            Book Appointment
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Appointment;
