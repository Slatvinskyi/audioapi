/*var ctx = new(window.AudioContext || window.webkitAudioContext)();

const osc = ctx.createOscillator();

osc.connect(ctx.destination);*/

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const ctx = new(window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.connect(ctx.destination);
    osc.start(0);
osc.stop(2);
osc.onended = () =>{
    console.log(ctx.state)
}
})

/*function Oscillator(frequency, detune){
this.osc = ctx.createOscillator();
this.osc.type = 'sawtooth';
this.osc.frequency.value = frequency;
this.osc.detune.value = detune;
this.osc.connect(ctx.destination);
this.osc.start(0);
this.osc.stop(3);
}

const osc1 = new Oscillator(440, 0);
const osc2 = new Oscillator(440, 10);
const osc3 = new Oscillator(440, 15);
const osc4 = new Oscillator(440, 20);
//var osc = ctx.createOscillator();*/

//var gain = ctx.createGain();

//console.log(gain)

//osc.connect(ctx.destination);

//osc.start();

//setTimeout(() => {

   // osc.stop();

//},2000)