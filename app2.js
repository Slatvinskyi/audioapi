var ctx = new (window.AudioContext || window.webkitAudioContext)();
var osc = ctx.createOscillator();
//osc.type = "sine";
//osc.type = "square";
//osc.type = "triangle";
//osc.type = "sawtooth";

playit.onclick = function() {
    osc.type = "square";
   
    osc.connect(ctx.destination);
    osc.start();
    setTimeout(() =>{
        osc.stop();
    },2000);
 }
 
 


