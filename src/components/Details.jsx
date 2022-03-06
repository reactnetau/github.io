import React from 'react';
import Detail from './Detail';

const Details = () => {
  return (
    <div className="grid container">
      <Detail
        title="Front End Development"
        description="React solutions using HTML, SCSS, Javascript/Typescript, NextJS and GraphQL."
      />

      <Detail
        title="Back End Development"
        description="Node, Express, MongoDB, Amazon Web Service, NextJS"
      />

      <Detail
        title="UX/UI Design"
        description="Clean and modern User Experience/User Interface designs"
      />
    </div>
  );
};

export default Details;
