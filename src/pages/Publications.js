// src/pages/Publications.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Publications.css';
import motherImg from '../assets/images/mother.png';

function Publications() {
  return (
    <section className="py-md-5 py-3 writing-page">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="p-md-5 p-3">
            <h1 className="section-title mb-4">Publications</h1>

            <h4>Poetry</h4>
            <ul>
              <li><a href="https://poets.org/2024-paul-r-voertman-prize" target="_blank" rel="noopener noreferrer">
              "Elegy to My Mother's Breasts."
                </a> <em>Poets.org</em>
              </li>

              <li><a href="https://www.wayfaremagazine.org/p/for-time-and-all-eternity-years-1" target="_blank" rel="noopener noreferrer">"Time and All Eternity: Years 1–5."</a> <em>Wayfare</em></li>
              <li><a href="https://poetrywales.co.uk/product/poetry-wales-59-3-spring-2024/" target="_blank" rel="noopener noreferrer">"Ode to the Great Salt Lake."</a> <em>Poetry Wales</em> 59.3 Spring 2024</li>
              <li>"Postpartum Anxiety and Horses." <em>Cimarron Review</em></li>
              <li><a href="https://citronreview.com/2021/09/23/estrogen-gives-and-estrogen-takes/" target="_blank" rel="noopener noreferrer">"Estrogen Gives and Estrogen Takes."</a> <em>Citron Review</em>, 2021</li>
              <li><a href="https://www.pinchjournal.com/print/2019/4/30/5dtl7jxlj2enmitmuw7jsy3a80w3lw-yf9ez" target="_blank" rel="noopener noreferrer">"At My Brother’s House."</a> <em>The Pinch</em>, 2019</li>
              <li><a href="https://inscape.byu.edu/2017/04/12/colin-nathaniel-scott-falls-into-yellowstone-geyser/" target="_blank" rel="noopener noreferrer">"Boy Falls into Yellowstone Geyser."</a> <em>Inscape</em>, 2017</li>
              <li><a href="https://inscape.byu.edu/2017/10/13/luna-and-i/" target="_blank" rel="noopener noreferrer">"Luna and I."</a> <em>Inscape</em>, 2015</li>
              <li><a href="https://inscape.byu.edu/2016/01/28/the-aptitude-test/" target="_blank" rel="noopener noreferrer">"The Aptitude Test."</a> <em>Inscape</em>, 2014</li>
            </ul>

            <h4>Short Story</h4>
            <ul>
              <li><a href="https://inscape.byu.edu/2016/09/30/when-things-stopped-decomposing-3/" target="_blank" rel="noopener noreferrer">"When Things Start Decomposing."</a> <em>Inscape</em>, 2015</li>
            </ul>

            <h4>Book Reviews</h4>
            <ul>
              <li><a href="https://artistsofutah.org/15Bytes/index.php/david-lees-newest-collection-mines-the-gems-and-the-dross/#comments" target="_blank" rel="noopener noreferrer">"David Lee’s Newest Collection..."</a> <em>15 Bytes</em>, 2020</li>
              <li><a href="https://artistsofutah.org/15Bytes/index.php/reflections-on-modern-manhood-joey-franklins-my-wife-wants-you-to-know-im-happily-married/" target="_blank" rel="noopener noreferrer">"Reflections on Modern Manhood..."</a> <em>15 Bytes</em>, 2016</li>
            </ul>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center text-center">
            <Image src={motherImg} alt="Mother and baby artwork" fluid className="transparent-image-mom" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Publications;
