import "./index.css";

const texts = [
  "In our homeland's heart, a shadow looms—a relentless foe threatens to plunge us into darkness.",
  "As the chosen defender, you must place your submarines strategically and lead us to victory.",
  "The fate of our land rests on YOUR shoulders. Will you become a legend, or will you cower and leave us?",
];

/* SELECTORS */
const container = document.getElementById("container");
const muteBtn = document.querySelector(".mute-btn");
const startBattle = document.querySelector(".battle-btn");
const main = document.querySelector(".main");

// Typewriter function to write letter by letter the each text inside of texts array
function typeWriter(element, text, i, speed) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1, speed), speed);
  } else {
    setTimeout(() => (element.style.animation = "fadeOut 1s forwards"), 1000); // Start fade out after 1 second
  }
}

// Start typewriter after 1 second
setTimeout(() => {
  texts.forEach((text, i) => {
    setTimeout(
      () => {
        const div = document.createElement("div");
        div.className = "opacity dialogue";
        typeWriter(div, text, 0, 60); // Adjust speed as needed
        container.appendChild(div);
      },
      i * (text.length * 60 + 2000) // Adjust timing as needed, added 1.5 seconds delay
    );
  });
}, 1000);

// Mutes or unmutes music
function toggleMute() {
  const audio = document.getElementById("background-music");
  if (audio.muted) {
    audio.muted = false;
    muteBtn.textContent = "🔊"; // Change the icon to unmuted
    audio.play(); // Unmute and resume playback
  } else {
    audio.muted = true;
    muteBtn.textContent = "🔇"; // Change the icon to muted
    audio.pause(); // Mute and pause playback
  }
}

// Toogle audio sound when clicking muteBtn
muteBtn.addEventListener("click", () => {
  toggleMute();
});

// Hide the display of intro when clicking startBattle button
startBattle.addEventListener("click", () => {
  main.classList.add("no-display");
});
