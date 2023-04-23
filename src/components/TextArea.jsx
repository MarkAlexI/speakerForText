import React, { useState } from 'react';

import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

export const TextArea = ({ changeText }) => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
    changeText(text);
  };
  
  return (
    <FormGroup>
      <Label for="text">
        Text
      </Label>
      <Input
        type="textarea"
        className="form-control"
        id="text"
        cols="10"
        rows="4"
        value={text}
        onChange={handleChange}
      ></Input>
    </FormGroup>
  )
};