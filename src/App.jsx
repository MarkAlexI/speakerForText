import React, { useState } from 'react';

import Container from 'reactstrap/lib/Container';

import { Voices } from '@/Voices';
import { SpeechSpeed } from '@/SpeechSpeed';
import { PitchRate } from '@/PitchRate';
import { TextArea } from '@/TextArea';

import { voices, voicesList } from './utils/speechSynthesis';

import '/src/assets/styles/style.css';

export const App = () => {
  const [list, setList] = useState(voicesList);
  
  setInterval(() => setList(voicesList), 2000);
  
  return (
    <Container>
      <Voices list={list}/>
      <SpeechSpeed />
      <PitchRate />
      <TextArea />
    </Container>
  )
};