import "./index.css";

const texts = [
  "In the heart of our homeland, a shadow looms—a relentless enemy threatens to plunge us into darkness.",
  "The time for action is now. As the chosen defender, you must place your submarines strategically and lead us to victory.",
  "The fate of our land rests on YOUR shoulders. Will you rise, or will you cower up and leave?",
];
const container = document.getElementById("container");

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
      div.className = "text dialogue";
      typeWriter(div, text, 0, 80); // Adjust speed as needed
      container.appendChild(div);
    },
    i * (text.length * 100 + 1000)
  ); // Adjust timing as needed
});
