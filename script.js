const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clearBtn");
const randomBtn = document.querySelector("#randomBtn");
let useRandomColor = false;

function generateRandomRgbColor() {
  // Generate random integers between 0 and 255 (inclusive) for each color channel
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Return the color in the CSS rgb() format using template literals
  return `rgb(${r}, ${g}, ${b})`;
}

function handlePixelHover(pixelDiv) {
  pixelDiv.style.backgroundColor = useRandomColor
    ? generateRandomRgbColor()
    : "black";
}

if (container) {
  for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
      const pixelDiv = document.createElement("div");
      pixelDiv.style.backgroundColor = "white";
      pixelDiv.classList.add("pixel");
      pixelDiv.addEventListener("mouseenter", () => handlePixelHover(pixelDiv));
      container.appendChild(pixelDiv);
    }
  }
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

