import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Forecast from './Forecast';

export default function BaseNavbar() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">WeatherNow</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/forecast">Forecast</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </Router>
  );
}
