import React from 'react';

import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';

export const SSControls = (props) => {
  
  return (
    <Col className="class-col">
      <Button
        className="btn-light"
        onClick={props.leftBtnMethod}
      >
        Stop
      </Button>
      <Button
        className="btn-success"
        type="submit"
        onClick={props.rightBtnMethod}
      >
        Start
      </Button>
    </Col>
  )
};