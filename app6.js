const ctx = new(window.AudioContext || window.webkitAudioContext)();
const osc = ctx.createOscillator();
osc.type = 'sawtooth';

const filter = ctx.createBiquadFilter();
filter.type = /*'highpass';*/'bandpass';

filter.frequency.value = 500;
filter.Q.value = 10;
osc.connect(filter);
filter.connect(ctx.destination);


osc.start(0);
osc.stop(3);