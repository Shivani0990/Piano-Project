
const pianokeys = document.querySelectorAll(".piano-keys .key");
let volumeSlider = document.querySelector(".volume-slider input");
let keysCheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [];
let audio;

const playTune = (key) => {
    audio = new Audio(`audio/${key}.wav`); // Re-initialize audio with the new source
    audio.play();
    const clickedkey = document.querySelector(`[data-key="${key}"]`); // Select the clicked key, if needed
}

pianokeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const manageVolume = (e) => {
    audio.volume = e.target.value;
}

const ShowHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

const pressedkey = (e) => {
    if (allkeys.includes(e.key))
        playTune(e.key);
}

volumeSlider.addEventListener("input", manageVolume);
document.addEventListener("keydown", pressedkey);
keysCheckbox.addEventListener("click", ShowHideKeys);
