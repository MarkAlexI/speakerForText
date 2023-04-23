import React, { useState } from 'react';

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

export const SpeechSpeed = ({ changeSpeed }) => {
  const [speed, setSpeed] = useState(1);
  const handleChange = (event) => {
    setSpeed(event.target.value);
    changeSpeed(speed);
  };
  
  return (
    <Row>
      <Col className="col-6">
        <FormGroup>
          <Label for="rate">
            Speed (<span className="rate-value">{speed}</span>)
          </Label>
          <Input
            type="range"
            className="form-control-range"
            id="rate"
            min="0.5"
            max="3"
            value={speed}
            step="0.1"
            onChange={handleChange}
          ></Input>
        </FormGroup>
      </Col>
    </Row>
  )
};