import React from 'react';
import Detail from './Detail';
import Detail1 from '../img/detail1.png';
import Detail2 from '../img/detail2.png';
import Detail3 from '../img/detail3.png';
import { Row, Col } from 'react-bootstrap';

const Details = () => {
  return (
    <Row>
      <Col xs={12} sm={12} md={4}>
        <Detail
          title="Front End Development"
          description="React solutions using HTML, SCSS, Javascript, Typescript, NextJS."
          back={Detail1}
        />
      </Col>
      <Col xs={12} sm={12} md={4}>
        <Detail
          title="Back End Development"
          description="Node, Express, MongoDB, Amazon Web Service, NextJS and GraphQL"
          back={Detail2}
        />
      </Col>
      <Col xs={12} sm={12} md={4}>
        <Detail
          title="UX/UI Design"
          description="Clean and modern User Experience/User Interface designs"
          back={Detail3}
        />
      </Col>
    </Row>
  );
};

export default Details;
