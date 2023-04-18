import React from 'react';

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import CardTitle from 'reactstrap/lib/CardTitle';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

export const Voices = () => {

  return (
    <Row>
      <Col className="xs-6 mb-9 offset-3">
        <CardTitle tag="h1" className="mb-3 display-4">Speaker</CardTitle>
        <FormGroup>
          <Label for="voices">Voices</Label>
          <Input type="select" id="voices"></Input>
        </FormGroup>
      </Col>
    </Row>
  )
};