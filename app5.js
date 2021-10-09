const ctx = new(window.AudioContext || window.webkitAudioContext)();

const osc = ctx.createOscillator();
const amp = ctx.createGain();
osc.frequency.value = 3;
osc.connect(amp.gain);

osc.start(0);

const audioElement = document.querySelector('audio');

const mediaElement = ctx.createMediaElementSource(audioElement);

mediaElement.connect(amp);
amp.connect(ctx.destination);