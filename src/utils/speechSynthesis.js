const { speechSynthesis } = globalThis;
let voices = []; let voicesList;

const generateVoices = () => {
  voices = speechSynthesis.getVoices();

  voicesList = voices.map((voice, index) => {
    return /uk|en|pl/.test(voice.lang) && `<option value=${index}>${voice.name} (${voice.lang})</option>`;
  }).join('');
};

generateVoices();

speechSynthesis.addEventListener('voiceschanged', generateVoices);

export { voices, voicesList };