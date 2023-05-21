import React, { useState } from 'react';

import { connect } from 'react-redux';
import { changePitch } from '../actions';
import { store } from '../store.js';

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

const PitchRate = ({ dispatch }) => {
  const [pitch, setPitch] = useState(store.getState().pitchRate.value);
  const handleChange = (event) => {
    setPitch(event.target.value);
    dispatch(changePitch(event.target.value));
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

export default connect()(PitchRate);