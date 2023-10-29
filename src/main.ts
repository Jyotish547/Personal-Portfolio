import '../public/output.css';

import '@fortawesome/fontawesome-free/css/all.css';

import imgUrl from '../assets/about.png';

let img = document.getElementById("about-img") as HTMLImageElement;

if (img) {
    img.src = imgUrl;
  }

import imgP1 from '../assets/sample1.jpg';

let pGrid1 = document.getElementById("pr-1-img") as HTMLImageElement;

if (pGrid1) {
  pGrid1.src = imgP1;
  pGrid1.style.width = "100%";
}

let pGrid2 = document.getElementById("pr-2-img") as HTMLImageElement;

if (pGrid2) {
  pGrid2.src = imgP1;
  pGrid2.style.width = "100%";
}

let pGrid3 = document.getElementById("pr-3-img") as HTMLImageElement;

if (pGrid3) {
  pGrid3.src = imgP1;
  pGrid3.style.width = "100%";
}

console.log("Bolla");