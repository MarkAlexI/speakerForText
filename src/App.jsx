import React, { useState } from 'react';
import { store } from './store.js';

import Container from 'reactstrap/lib/Container';

import Voices from '@/Voices';
import SpeechSpeed from '@/SpeechSpeed';
import PitchRate from '@/PitchRate';
import TextArea from '@/TextArea';
import { SSControls } from '@/SSControls';

import { voicesList, stop, speak } from './utils/speechSynthesis';

import '/src/assets/styles/style.css';

export const App = () => {
  const [list, setList] = useState(voicesList);
  if (!voicesList) {
    store.dispatch({ type: 'CHANGE_TEXT', payload: 'Your browser does not support speech synthesis. Try Chrome instead.' });
  }

  setInterval(() => setList(voicesList), 2000);

  return (
    <Container>
      <Voices
        list={list}
      />
      <SpeechSpeed />
      <PitchRate />
      <TextArea />
      <SSControls
        leftBtnMethod={stop}
        rightBtnMethod={speak}
      />
    </Container>
  )
};