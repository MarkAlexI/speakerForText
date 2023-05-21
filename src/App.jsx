import React, { useState } from 'react';
import { store } from './store.js';

import Container from 'reactstrap/lib/Container';

import { Voices } from '@/Voices';
import SpeechSpeed from '@/SpeechSpeed';
import PitchRate from '@/PitchRate';
import { TextArea } from '@/TextArea';
import { SSControls } from '@/SSControls';

import { voicesList, stop, speak } from './utils/speechSynthesis';

import '/src/assets/styles/style.css';

export const App = () => {
  const [list, setList] = useState(voicesList);
  
  const [activeVoice, setActiveVoice] = useState('');
  const changeActiveVoice = (newValue) => {
    setActiveVoice(newValue);
  };
  
  const speed = store.getState().speechSpeed.value;
  
  const pitch = store.getState().pitchRate.value;
  
  const [text, setText] = useState('');
  const changeText = (newValue) => {
    setText(newValue);
  };
  
  setInterval(() => setList(voicesList), 2000);
  
  return (
    <Container>
      <Voices
        list={list}
        changeActiveVoice={changeActiveVoice}
      />
      <SpeechSpeed />
      <PitchRate />
      <TextArea
        changeText={changeText}
      />
      <SSControls
        leftBtnMethod={stop}
        rightBtnMethod={speak(activeVoice, pitch, speed, text)}
      />
    </Container>
  )
};