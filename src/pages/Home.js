import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import megPortrait from '../assets/images/meg.jpg'; 
import floralHeader from '../assets/images/flower.png';

function Home() {
  return (
    <section className="py-md-5 py-3 home-hero d-flex align-items-center">
      <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="section-title mb-4">About</h1>

          <p className="lead">
            Meg McManama is a poet and writing instructor. She holds an MFA from Brigham Young University and is pursuing her Ph.D. at the University of North Texas.
          </p>

          <p>
            Her work is published and forthcoming in <em>Poets.org</em>, <em>Poetry Wales</em>, <em>Western Humanities Review</em>, <em>The Pinch</em>, <em>Citron Review</em>, <em>Cimarron Review</em>, and elsewhere.
          </p>
          <p>
            Meg loves to ride her bike, read books with her children and husband, eat tomatoes fresh from the garden, and swim in the ocean.
          </p>

          {/* Megan image moved here so it appears below all text */}
          <div className="text-center mb-4 d-md-none">
            <img
              src={megPortrait}
              alt="Meg McManama"
              className="home-image"
            />
          </div>

          <img
            src={floralHeader}
            alt="Floral accent"
            className="img-fluid floral-decorator mb-4"
          />
        </Col>

        {/* Only show image on medium+ screens */}
        <Col md={6} className="text-center d-none d-md-block">
          <img
            src={megPortrait}
            alt="Meg McManama"
            className="home-image"
          />
        </Col>
      </Row>
      </Container>
    </section>
  );
}

export default Home;
