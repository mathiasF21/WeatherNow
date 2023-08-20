import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function BaseNavbar() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">WeatherNow</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
