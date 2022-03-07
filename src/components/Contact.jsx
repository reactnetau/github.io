import React from 'react';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <h3>Andrew Day</h3>
      <h4>Melbourne, Australia</h4>
      <div className="contact-box">
        <h3>Linkedin</h3>
        <p>
          <a href="https://www.linkedin.com/in/reactnetau">
            https://www.linkedin.com/in/reactnetau
          </a>
        </p>
      </div>
      <div className="contact-box">
        <h3>Email</h3>
        <p>
          <a href="mailto:andrew@react.net.au">andrew@react.net.au</a>
        </p>
      </div>
      <div className="contact-box">
        <h3>Mobile</h3>
        <p>
          <a href="tel:+61430744579">+61430744579</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
