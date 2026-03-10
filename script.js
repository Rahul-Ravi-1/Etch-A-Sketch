const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clearBtn");
const randomBtn = document.querySelector("#randomBtn");
const setSizeBtn = document.querySelector("#setSizeBtn");
let useRandomColor = false;
let size = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function generateRandomRgbColor() {
  // Generate random integers between 0 and 255 (inclusive) for each color channel
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Return the color in the CSS rgb() format using template literals
  return `rgb(${r}, ${g}, ${b})`;
}

function handlePixelHover(pixelDiv) {
  if (useRandomColor) {
    pixelDiv.style.backgroundColor = generateRandomRgbColor();
  } else {
    pixelDiv.style.backgroundColor = "black";
  }
}

if (container) {
  createGrid(size);
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    const pixelDivs = document.querySelectorAll(".pixel");
    pixelDivs.forEach((pixelDiv) => {
      pixelDiv.style.backgroundColor = "white";
    });
  });
}

if (randomBtn) {
  randomBtn.addEventListener("click", () => {
    useRandomColor = !useRandomColor;
  });
}

if (setSizeBtn) {
  setSizeBtn.addEventListener("click", () => {
    const size = prompt("Enter the size of the grid (1-100):");
    if (size >= 1 && size <= 100) {
      createGrid(size);
    }
  });
}

function createGrid(size) {
  container.innerHTML = "";
  const containerSize = 320;
  const pixelSize = containerSize/size;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      const pixelDiv = document.createElement("div");
      pixelDiv.style.backgroundColor = "white";
      pixelDiv.style.width = `${pixelSize}px`
      pixelDiv.style.height = `${pixelSize}px`;
      pixelDiv.classList.add("pixel");
      pixelDiv.addEventListener("mousedown", () => {
        handlePixelHover(pixelDiv);
      });
      pixelDiv.addEventListener("mouseover", () => {
        if (mouseDown) {
          handlePixelHover(pixelDiv);
        }
      });
      container.appendChild(pixelDiv);
    }
  }
}