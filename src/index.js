import "./index.css";
import getGIF from "./getGIF";

const image = document.querySelector("#gifImage");

function printImage(src) {
  image.src = src;
}

const button = document.querySelector("#test");
getGIF.getURL().then((url) => printImage(url));
console.log(getGIF.getArrayafgad());
