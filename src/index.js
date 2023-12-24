import "./index.css";

const texts = [
  "In our homeland's heart, a shadow looms—a relentless foe threatens to plunge us into darkness.",
  "As the chosen defender, you must place your submarines strategically and lead us to victory.",
  "The fate of our land rests on YOUR shoulders. Will you rise, or will you cower and leave us?",
];
const container = document.getElementById("container");
const muteBtn = document.querySelector(".mute-btn");

function typeWriter(element, text, i, speed) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1, speed), speed);
  } else {
    setTimeout(() => (element.style.animation = "fadeOut 1s forwards"), 1000); // Start fade out after 1 second
  }
}

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

function toggleMute() {
  const audio = document.getElementById("background-music");
  audio.muted = !audio.muted;

  // Change the icon based on the mute state
  muteBtn.textContent = audio.muted ? "🔇" : "🔊";
}

muteBtn.addEventListener("click", function () {
  toggleMute();
});
