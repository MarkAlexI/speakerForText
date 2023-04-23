import React, { useState } from 'react';

import Container from 'reactstrap/lib/Container';

import { Voices } from '@/Voices';
import { SpeechSpeed } from '@/SpeechSpeed';
import { PitchRate } from '@/PitchRate';
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
  
  const [speed, setSpeed] = useState(1);
  const changeSpeed = (newValue) => {
    setSpeed(newValue);
  };
  
  const [pitch, setPitch] = useState(1);
  const changePitch = (newValue) => {
    setPitch(newValue);
  };
  
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
      <SpeechSpeed
        changeSpeed={changeSpeed}
      />
      <PitchRate
        changePitch={changePitch}
      />
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