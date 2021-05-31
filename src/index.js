import "./index.css";

const image = document.querySelector("#gifImage");

function printImage(src) {
  image.src = src;
}

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=R3NCo8jcFVzkPWBWhzgHMt7yIDE5KNRO&s=cats",
  { mode: "cors" }
)
  .then((response) => response.json())
  .then((response) => {
    printImage(response.data.images.original.url);
  });
