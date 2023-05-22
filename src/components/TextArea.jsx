import React, { useState } from 'react';

import { connect } from 'react-redux';
import { changeText } from '../actions';
import { store } from '../store.js';

import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';

const TextArea = ({ dispatch }) => {
  const [text, setText] = useState(store.getState().textField.value);
  const handleChange = (event) => {
    setText(event.target.value);
    dispatch(changeText(event.target.value));
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

export default connect()(TextArea);