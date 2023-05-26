import { store } from '../store.js';

const { speechSynthesis } = globalThis;
let voices = [];
let voicesList = '';

const generateVoices = () => {
  try {
    voices = speechSynthesis.getVoices();

    voicesList = voices.map((voice, index) => {
      return /uk|en|pl/.test(voice.lang) && `<option value=${index}>${voice.name} (${voice.lang})</option>`;
    }).join('');
  } catch (error) {
    console.log(error);
    store.dispatch({ type: 'CHANGE_TEXT', payload: 'Your browser does not support speech synthesis. Try Chrome instead.' });
  }
};

const stop = () => {
  console.log('stop');
  speechSynthesis.cancel();
};

const speak = () => {
  let activeVoice = store.getState().activeVoice.value || voices[0];
  let pitch = store.getState().pitchRate.value;
  let rate = store.getState().speechSpeed.value;
  let text = store.getState().textField.value;

  if (speechSynthesis.speaking) return;

  if (text !== '') {
    const ssUtterance = new SpeechSynthesisUtterance(text);
    ssUtterance.addEventListener('end', () => console.log('end'));
    ssUtterance.addEventListener('error', () => console.log('error'));

    ssUtterance.voice = voices[activeVoice];
    ssUtterance.pitch = pitch;
    ssUtterance.rate = rate;

    speechSynthesis.speak(ssUtterance);
  }
};

generateVoices();

speechSynthesis?.addEventListener('voiceschanged', generateVoices);

export { voicesList, stop, speak };