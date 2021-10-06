const ctx = new (window.AudioContext || window.webkitAudioContext)();

const osc = ctx.createOscillator();


osc.connect(ctx.destination);

//osc.frequency.value = 220;


playit.onclick = function() {
   osc.start();
}

stopit.onclick = function() {
    osc.stop();
};



const frequencyRange = document.querySelector("input");

frequencyRange.addEventListener("input", (event) => {
    console.log(event.target.value);
    osc.frequency.value = event.target.value;

}
);