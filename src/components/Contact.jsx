import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <h3>Andrew Day</h3>
      <h4>Melbourne, Australia</h4>
<<<<<<< HEAD
      <div className="contact-box">
        <h3>Linkedin</h3>
        <p>
          <a href="https://www.linkedin.com/in/reactnetau">
            linkedin.com/in/reactnetau
          </a>
        </p>
      </div>
      <div className="contact-box">
        <h3>Email</h3>
        <p>
          <a href="mailto:polyrhythmm@gmail.com">polyrhythmm@gmail.com</a>
        </p>
      </div>
      <div className="contact-box">
        <h3>Mobile</h3>
        <p>
          <a href="tel:+61430744579">+61430744579</a>
        </p>
      </div>
      <div className="contact-box">
        <h3>Github</h3>
        <p>
          <a href="https://github.com/reactnetau">github.com/reactnetau</a>
        </p>
      </div>
=======
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
>>>>>>> d786d526d2b13d01d58c84737042376fde0b763f
    </div>
  );
};

export default Contact;
