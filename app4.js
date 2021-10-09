const ctx = new(window.AudioContext || window.webkitAudioContext)();

const audioElement = document.querySelector('audio');

const mediaElement = ctx.createMediaElementSource(audioElement);

const filter = ctx.createBiquadFilter();

filter.frequency.value = 800;

mediaElement.connect(filter);
filter.connect(ctx.destination);

