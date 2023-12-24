import "./index.css";

const texts = [
  "In our homeland's heart, a shadow looms—a relentless foe threatens to plunge us into darkness.",
  "As the chosen defender, you must place your submarines strategically and lead us to victory.",
  "The fate of our land rests on YOUR shoulders. Will you become a legend, or will you cower and leave us?",
];
const container = document.getElementById("container");
const muteBtn = document.querySelector(".mute-btn");

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
      i * (text.length * 60 + 2500) // Adjust timing as needed, added 1.5 seconds delay
    );
  });
}, 1000);

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

muteBtn.addEventListener("click", function () {
  toggleMute();
});
