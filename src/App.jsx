import React from 'react';
import Container from 'reactstrap/lib/Container';
import { Voices } from '@/Voices';
import { SpeechSpeed } from '@/SpeechSpeed';
import { PitchRate } from '@/PitchRate';
import { TextArea } from '@/TextArea';
import '/src/assets/styles/style.css';

export const App = () => {
  
  return (
    <Container>
      <Voices />
      <SpeechSpeed />
      <PitchRate />
      <TextArea />
    </Container>
  )
};