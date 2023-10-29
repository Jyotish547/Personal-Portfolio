/*
1. Done - Create Selected Element state for nav-bar and other required elements
2. Create dropdown menu for the filter options in projects.html
3. Create formspree for Contact Form
4. Initite download of resume
*/

// CSS Declaration

import '../public/output.css';

// Icons Declaration

import '@fortawesome/fontawesome-free/css/all.css';

// About Image Declaration

import imgUrl from '../assets/about.png';

let img = document.getElementById("about-img") as HTMLImageElement;

if (img) {
    img.src = imgUrl;
  }

// Project Images

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

// Nav Bar Selected State

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        navItems.forEach(i => i.classList.remove("selected"));

        (event.target as HTMLElement).classList.add("selected");
    });
});

// Dropdown Menu for Projects Section

const selectedFilter = document.getElementById("selected-filter");
const dropdownMenu = document.getElementById("dropdown-menu");
const colorClasses = ["text-blue-500", "text-amber-500", "text-red-500", "text-emerald-600", "text-violet-500", "text-green-500"];

if (selectedFilter && dropdownMenu) {
    selectedFilter.addEventListener("click", () => {
        if (dropdownMenu.classList.contains("hidden")) {
            dropdownMenu.classList.remove("hidden");
        } else {
            dropdownMenu.classList.add("hidden");
        }
    });

    // Color changes
    dropdownMenu.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        const item = target.closest('div');

        if (item && dropdownMenu.contains(item)) {
            // Update content
            selectedFilter.innerHTML = item.innerHTML;

            // Update color
            const newColor = item.getAttribute("data-color");
            if (newColor) {
                colorClasses.forEach(color => {
                    selectedFilter.classList.remove(color);
                });
                selectedFilter.classList.add(newColor);
            }
            
            dropdownMenu.classList.add("hidden");
        }
    });

    // Change selected filter when clicking on an item from the dropdown
    dropdownMenu.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        const item = target.closest('div');

        // Check if the clicked target is indeed one of the items
        if (item && dropdownMenu.contains(item)) {
            selectedFilter.innerHTML = item.innerHTML;
            dropdownMenu.classList.add("hidden");
        }
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!selectedFilter.contains(event.target as Node)) {
            dropdownMenu.classList.add("hidden");
        }
    });
}




console.log("Bolla");