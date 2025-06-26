import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Awards.css';
import mountainImage from '../assets/images/mountain.png';

function Awards() {
  return (
    <section className="py-md-5 py-3 writing-page">
      <Container>
        
      <Row className="align-items-center g-5 flex-column flex-md-row">
        <Col md={6} className="text-center order-2 order-md-1">
            <img
            src={mountainImage}
            alt="Mountain Landscape Illustration"
            className="img-fluid transparent-image-mountain"
            />
        </Col>
        <Col md={6} className="order-1 order-md-2">
            <h1 className="section-title mb-4">Awards</h1>
            <ul>
            <li>Voertman/Academy of American Poets Prize Winner, 2024</li>
            <li>AWP Honorable Mention, 2024</li>
            <li>Clinton F. Larson Poetry Contest Finalist, 2024</li>
            <li>Voertman-Ardoin Fellow, UNT, 2020–2023</li>
            <li>Winner, Ellipsis Poetry Workshop, 2021</li>
            <li>First Place, Mayhew Poetry Contest, 2018</li>
            <li>Second Place, Mayhew Essay Contest, 2018</li>
            </ul>
        </Col>
      </Row>
      </Container>
    </section>
  );
}

export default Awards;
