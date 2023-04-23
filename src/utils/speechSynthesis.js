const { speechSynthesis } = globalThis;
let voices = []; let voicesList;

const generateVoices = () => {
  voices = speechSynthesis.getVoices();

  voicesList = voices.map((voice, index) => {
    return /uk|en|pl/.test(voice.lang) && `<option value=${index}>${voice.name} (${voice.lang})</option>`;
  }).join('');
};

const stop = () => {
  console.log('stop');
  speechSynthesis.cancel();
};

const speak = (activeVoice = voices[0], pitch, rate, text) => {
  
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

speechSynthesis.addEventListener('voiceschanged', generateVoices);

export { voicesList, stop, speak };