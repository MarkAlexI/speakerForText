import React from 'react';

import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';

export const SSControls = () => {
  
  return (
    <Col className="class-col">
      <Button className="btn-light">
        Stop
      </Button>
      <Button className="btn-success" type="submit">
        Start
      </Button>
    </Col>
  )
};