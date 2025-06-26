import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';
import blueBirdImage from '../assets/images/blue_bird.png';

function Experience() {
  return (
    <section className="py-md-5 py-3 writing-page">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
          <h1 className="section-title mb-2">Experience</h1>
            <h4>Teaching & Presenting</h4>
            <ul>
              <li>Poetry Reading – American Literary Review, 2024</li>
              <li>Readings & Presentations – Mormon Scholars in the Humanities, 2023–2024</li>
              <li>Reading – LDS Artists Retreat, 2023</li>
            </ul>
            
            <h4>Teaching Positions</h4>
            <ul>
              <li>Teaching Fellow – University of North Texas, 2023–Present</li>
              <li>Adjunct Professor – Brigham Young University, 2015–2023</li>
              <li>Adjunct Professor – Salt Lake Community College, 2019</li>
            </ul>

            <h4>Other</h4>
            <ul>
              <li>Sterling Scholar Judge – English Category, 2021–2023</li>
              <li>Intern – Creative Writing with Lance Larsen & Travel Writing with Steven Tuttle, 2017</li>
              <li>Editor in Chief – <em>Inscape</em>, 2017</li>
              <li>Poetry Editor – <em>Inscape</em>, 2016</li>
              <li>Nonfiction Editor – <em>Inscape</em>, 2015</li>
            </ul>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center text-center">
            <img
              src={blueBirdImage}
              alt="Bluebird Watercolor Illustration"
              fluid
              className="transparent-image-bird"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
