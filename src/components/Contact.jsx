import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <h3>Andrew Day</h3>
      <h4>Melbourne, Australia</h4>
      <Row>
        <Col sm={12} md={6}>
          <div className="contact-box-left">
            <h3>Linkedin</h3>
            <p>
              <a href="https://www.linkedin.com/in/reactnetau">
                linkedin.com/in/reactnetau
              </a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="contact-box-right">
            <h3>Email</h3>
            <p>
              <a href="mailto:polyrhythmm@gmail.com">polyrhythmm@gmail.com</a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="contact-box-left">
            <h3>Mobile</h3>
            <p>
              <a href="tel:+61430744579">+61430744579</a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="contact-box-right">
            <h3>Github</h3>
            <p>
              <a href="https://github.com/reactnetau">github.com/reactnetau</a>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
