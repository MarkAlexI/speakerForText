import React, { useState } from 'react';

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

export const PitchRate = () => {
  const [pitch, setPitch] = useState(1);
  const handleChange = (event) => {
    setPitch(event.target.value);
  };
  
  return (
    <Row>
      <Col className="col-6">
        <FormGroup>
          <Label for="pitch">
            Pitch (<span className="pitch-value">{pitch}</span>)
          </Label>
          <Input
            type="range"
            className="form-control-range"
            id="pitch"
            min="0"
            max="2"
            value={pitch}
            step="0.1"
            onChange={handleChange}
          ></Input>
        </FormGroup>
      </Col>
    </Row>
  )
};