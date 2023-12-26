import "./index.css";

const texts = [
  "In our homeland's heart, a shadow looms—a relentless foe threatens to plunge us into darkness.",
  "As the chosen defender, you must place your submarines strategically and lead us to victory.",
  "The fate of our land rests on YOUR shoulders. Will you become a legend, or will you cower and leave us?",
];

/* SELECTORS */
const muteBtn = document.querySelector(".mute-btn");
const startBattle = document.querySelector(".battle-btn");
const main = document.querySelector(".main");
const placeSubmarinesSection = document.querySelector(".place-submarines");
const gameboard = document.querySelector(".gameboard");
const warships = document.querySelectorAll(".warship");
const carrierSelector = document.querySelector(".carrier");
const battleshipSelector = document.querySelector(".battleship");
const destroyerSelector = document.querySelector(".destroyer");
const submarineSelector = document.querySelector(".submarine");
const patrolBoatSelector = document.querySelector(".patrol-boat");

// Create 100 gameboard-cells inside of gameboard
for (let i = 1; i <= 100; i++) {
  const div = document.createElement("div");
  div.className = `gameboard-cell gc${i}`;
  gameboard.appendChild(div);
}

const gameboardCells = document.querySelectorAll(".gameboard-cell");

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
        main.appendChild(div);
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

// Toggle audio sound when clicking muteBtn
muteBtn.addEventListener("click", () => {
  toggleMute();
});

// Hide the display of intro when clicking startBattle button and remove no-display of place-submarines section
startBattle.addEventListener("click", () => {
  main.classList.add("no-display");
  placeSubmarinesSection.classList.remove("no-display");
});

// Factory function for warships
function createWarship(length, hits, sunk) {
  return {
    length,
    hits,
    sunk,
    hit() {
      this.hits = this.hits + 1;
    },
    isSunkVerification() {
      if (this.hits === this.length) {
        this.sunk = true;
      }
    },
  };
}

// Created warships
const carrier = createWarship(5, 0, false);
const battleship = createWarship(4, 0, false);
const destroyer = createWarship(3, 0, false);
const submarine = createWarship(3, 0, false);
const patrolBoat = createWarship(2, 0, false);

/* DRAG FUNCTIONALITY */
// Add dragover event listener to allow a drop
gameboardCells.forEach((cell) => {
  cell.addEventListener("dragover", (event) => {
    // Prevent default to allow dropping
    event.preventDefault();
  });
});

// To make the opacity of the carrier 0.5 when dragging it
carrierSelector.ondragstart = () => {
  carrierSelector.style.opacity = "0.5";
};

carrierSelector.ondragleave = () => {
  // To make the opacity of the carrier 1 when finished dragging it
  carrierSelector.style.opacity = "1";

  gameboardCells.forEach((cell) => {
    cell.addEventListener("drop", (event) => {
      // Prevent default to allow dropping
      event.preventDefault();

      for (let i = 1; i <= 100; i++) {
        // Skip specified indices
        if (
          i === 7 ||
          i === 8 ||
          i === 9 ||
          i === 10 ||
          i === 17 ||
          i === 18 ||
          i === 19 ||
          i === 20 ||
          i === 27 ||
          i === 28 ||
          i === 29 ||
          i === 30 ||
          i === 37 ||
          i === 38 ||
          i === 39 ||
          i === 40 ||
          i === 47 ||
          i === 48 ||
          i === 49 ||
          i === 50 ||
          i === 57 ||
          i === 58 ||
          i === 59 ||
          i === 60 ||
          i === 67 ||
          i === 68 ||
          i === 69 ||
          i === 70 ||
          i === 77 ||
          i === 78 ||
          i === 79 ||
          i === 80 ||
          i === 87 ||
          i === 88 ||
          i === 89 ||
          i === 90 ||
          i === 97 ||
          i === 98 ||
          i === 99 ||
          i === 100
        ) {
          continue;
        } else if (cell.classList.contains(`gc${i}`)) {
          const gcNow = document.querySelector(`.gc${i}`);
          const gcAfter = document.querySelector(`.gc${i + 1}`);
          const gcAfterAfter = document.querySelector(`.gc${i + 2}`);
          const gcAfterAfterAfter = document.querySelector(`.gc${i + 3}`);
          const gcAfterAfterAfterAfter = document.querySelector(`.gc${i + 4}`);

          gcNow.style.backgroundColor = "white";
          gcAfter.style.backgroundColor = "white";
          gcAfterAfter.style.backgroundColor = "white";
          gcAfterAfterAfter.style.backgroundColor = "white";
          gcAfterAfterAfterAfter.style.backgroundColor = "white";

          carrierSelector.style.display = "none";
        }
      }
    });
  });
};

// To make the opacity of the battleship 0.5 when dragging it
battleshipSelector.ondragstart = () => {
  battleshipSelector.style.opacity = "0.5";
};

battleshipSelector.ondragleave = () => {
  // To make the opacity of the battleship 1 when finished dragging it
  battleshipSelector.style.opacity = "1";

  gameboardCells.forEach((cell) => {
    cell.addEventListener("drop", (event) => {
      // Prevent default to allow dropping
      event.preventDefault();

      for (let i = 1; i <= 100; i++) {
        // Skip specified indices
        if (
          i === 8 ||
          i === 9 ||
          i === 10 ||
          i === 18 ||
          i === 19 ||
          i === 20 ||
          i === 28 ||
          i === 29 ||
          i === 30 ||
          i === 38 ||
          i === 39 ||
          i === 40 ||
          i === 48 ||
          i === 49 ||
          i === 50 ||
          i === 58 ||
          i === 59 ||
          i === 60 ||
          i === 68 ||
          i === 69 ||
          i === 70 ||
          i === 78 ||
          i === 79 ||
          i === 80 ||
          i === 88 ||
          i === 89 ||
          i === 90 ||
          i === 98 ||
          i === 99 ||
          i === 100
        ) {
          continue;
        } else if (cell.classList.contains(`gc${i}`)) {
          const gcNow = document.querySelector(`.gc${i}`);
          const gcAfter = document.querySelector(`.gc${i + 1}`);
          const gcAfterAfter = document.querySelector(`.gc${i + 2}`);
          const gcAfterAfterAfter = document.querySelector(`.gc${i + 3}`);

          gcNow.style.backgroundColor = "black";
          gcAfter.style.backgroundColor = "black";
          gcAfterAfter.style.backgroundColor = "black";
          gcAfterAfterAfter.style.backgroundColor = "black";

          battleshipSelector.style.display = "none";
          carrierSelector.style.display = "inline-block";
        }
      }
    });
  });
};

// To make the opacity of the destroyer 0.5 when dragging it
destroyerSelector.ondragstart = () => {
  destroyerSelector.style.opacity = "0.5";
};

destroyerSelector.ondragleave = () => {
  // To make the opacity of the destroyer 1 when finished dragging it
  destroyerSelector.style.opacity = "1";

  gameboardCells.forEach((cell) => {
    cell.addEventListener("drop", (event) => {
      // Prevent default to allow dropping
      event.preventDefault();

      for (let i = 1; i <= 100; i++) {
        // Skip specified indices
        if (
          i === 9 ||
          i === 10 ||
          i === 19 ||
          i === 20 ||
          i === 29 ||
          i === 30 ||
          i === 39 ||
          i === 40 ||
          i === 49 ||
          i === 50 ||
          i === 59 ||
          i === 60 ||
          i === 69 ||
          i === 70 ||
          i === 79 ||
          i === 80 ||
          i === 89 ||
          i === 90 ||
          i === 99 ||
          i === 100
        ) {
          continue;
        } else if (cell.classList.contains(`gc${i}`)) {
          const gcNow = document.querySelector(`.gc${i}`);
          const gcAfter = document.querySelector(`.gc${i + 1}`);
          const gcAfterAfter = document.querySelector(`.gc${i + 2}`);

          gcNow.style.backgroundColor = "gray";
          gcAfter.style.backgroundColor = "gray";
          gcAfterAfter.style.backgroundColor = "gray";

          destroyerSelector.style.display = "none";
          battleshipSelector.style.display = "inline-block";
        }
      }
    });
  });
};

// To make the opacity of the submarine 0.5 when dragging it
submarineSelector.ondragstart = () => {
  submarineSelector.style.opacity = "0.5";
};

submarineSelector.ondragleave = () => {
  // To make the opacity of the submarine 1 when finished dragging it
  submarineSelector.style.opacity = "1";

  gameboardCells.forEach((cell) => {
    cell.addEventListener("drop", (event) => {
      // Prevent default to allow dropping
      event.preventDefault();

      for (let i = 1; i <= 100; i++) {
        // Skip specified indices
        if (
          i === 9 ||
          i === 10 ||
          i === 19 ||
          i === 20 ||
          i === 29 ||
          i === 30 ||
          i === 39 ||
          i === 40 ||
          i === 49 ||
          i === 50 ||
          i === 59 ||
          i === 60 ||
          i === 69 ||
          i === 70 ||
          i === 79 ||
          i === 80 ||
          i === 89 ||
          i === 90 ||
          i === 99 ||
          i === 100
        ) {
          continue;
        } else if (cell.classList.contains(`gc${i}`)) {
          const gcNow = document.querySelector(`.gc${i}`);
          const gcAfter = document.querySelector(`.gc${i + 1}`);
          const gcAfterAfter = document.querySelector(`.gc${i + 2}`);

          gcNow.style.backgroundColor = "navy";
          gcAfter.style.backgroundColor = "navy";
          gcAfterAfter.style.backgroundColor = "navy";

          submarineSelector.style.display = "none";
          destroyerSelector.style.display = "inline-block";
        }
      }
    });
  });
};

// To make the opacity of the patrolBoat 0.5 when dragging it
patrolBoatSelector.ondragstart = () => {
  patrolBoatSelector.style.opacity = "0.5";
};

patrolBoatSelector.ondragleave = () => {
  // To make the opacity of the patrolBoat 1 when finished dragging it
  patrolBoatSelector.style.opacity = "1";

  gameboardCells.forEach((cell) => {
    cell.addEventListener("drop", (event) => {
      // Prevent default to allow dropping
      event.preventDefault();

      for (let i = 1; i <= 100; i++) {
        // Skip specified indices
        if (
          i === 10 ||
          i === 20 ||
          i === 30 ||
          i === 40 ||
          i === 50 ||
          i === 60 ||
          i === 70 ||
          i === 80 ||
          i === 90 ||
          i === 100
        ) {
          continue;
        } else if (cell.classList.contains(`gc${i}`)) {
          const gcNow = document.querySelector(`.gc${i}`);
          const gcAfter = document.querySelector(`.gc${i + 1}`);

          gcNow.style.backgroundColor = "green";
          gcAfter.style.backgroundColor = "green";

          patrolBoatSelector.style.display = "none";
          submarineSelector.style.display = "inline-block";
        }
      }
    });
  });
};
