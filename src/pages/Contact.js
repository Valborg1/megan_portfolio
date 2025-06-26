// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section className="py-md-5 py-3 writing-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="section-title mb-4">Contact</h1>
            <Card className="p-4 shadow">
              {submitted ? (
                <p className="mb-0">Thanks for reaching out! We'll be in touch soon.</p>
              ) : (
                <Form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" name="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} name="message" required />
                    </Form.Group>

                    <Button
                        style={{
                        backgroundColor: 'var(--primary)',
                        borderColor: 'var(--primary)'
                        }}
                        type="submit"
                    >
                        Send
                    </Button>
                    </Form>

              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
