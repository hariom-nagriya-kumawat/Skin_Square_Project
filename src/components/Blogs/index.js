import React from "react";
import { Row, Container, Col, Card, ListGroup } from "react-bootstrap";
import BlogsLogo from "../Images/blogs-logo.png";
import Blog from "../Images/blog.png";
import Bloger from "../Images/bloger.png";

function Blogs() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={5}>
            <div className="page-title">
              <p className="title">Blog</p>
              <h1 className="heading">Our Gallery</h1>
            </div>
          </Col>
          <Col lg={7}>
            <div className="page-title">
              <img src={BlogsLogo} alt="BlogsLogo" width="730" height="426" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Row className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col lg={6}>
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
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Header>
                <h5>Letest Post</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex d-flex justify-content-around">
                  <img src={Bloger} alt="Bloger" width="66" height="52" />
                  <p className="px-3 m-0">Minimal Post With A Preview Image</p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex d-flex justify-content-around">
                  <img src={Bloger} alt="Bloger" width="66" height="52" />
                  <p className="px-3 m-0">Minimal Post With A Preview Image</p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex d-flex justify-content-around">
                  <img src={Bloger} alt="Bloger" width="66" height="52" />
                  <p className="px-3 m-0">Minimal Post With A Preview Image</p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex d-flex justify-content-around">
                  <img src={Bloger} alt="Bloger" width="66" height="52" />
                  <p className="px-3 m-0">Minimal Post With A Preview Image</p>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blogs;
