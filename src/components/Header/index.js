import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../Images/Vector.png";
import "./header.css";

function Header() {
  return (
    <>
      <Navbar className="header">
        <Container fluid>
          <Navbar.Brand to="/home">
            <img
              src={
                "https://anima-uploads.s3.amazonaws.com/projects/6114f09a01f7c19157a35288/releases/6117a1c43c87968faf3716dc/img/skin-square--back-ground--1-5@2x.svg"
              }
              alt="Logo"
              width="165"
              height="108"
            />
          </Navbar.Brand>
          <Nav className="w-100 d-flex justify-content-around" /*justify*/>
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink
              to="/services"
              className="nav-link"
              activeClassName="active"
            >
              Services
            </NavLink>
            <NavLink
              to="/testimonials"
              className="nav-link"
              activeClassName="active"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/gallery"
              className="nav-link"
              activeClassName="active"
            >
              Gallery
            </NavLink>
            <NavLink to="/blogs" className="nav-link" activeClassName="active">
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
            <NavLink to="/appointment">
              <Button className="appointBtn">Book Appointment</Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
