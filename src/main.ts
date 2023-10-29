/*
1. Done - Create Selected Element state for nav-bar and other required elements
2. Done - Create dropdown menu for the filter options in projects.html
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

let pGrid4 = document.getElementById("pr-4-img") as HTMLImageElement;

if (pGrid4) {
  pGrid4.src = imgP1;
  pGrid4.style.width = "100%";
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

document.addEventListener("DOMContentLoaded", () => {
    showAllGridItems();
});

function showAllGridItems() {
    const gridItemsClasses = document.querySelectorAll("#my-projects-container > div");

    console.log(`Found ${gridItemsClasses.length} grid items.`);


    gridItemsClasses.forEach(item => {
        console.log('Classes for item:', Array.from(item.classList));
        console.log(item);
        item.classList.remove("hidden");

    });
}




const selectedFilter = document.getElementById("selected-filter");
const filterOptions = document.getElementById("filter-options");
const dropdownMenu = document.getElementById("dropdown-menu");
const gridItems = document.getElementById("my-projects-container");
const colorClasses = ["text-blue-500", "text-amber-500", "text-red-500", "text-emerald-600", "text-violet-500", "text-green-500"];

// Declare the array outside the if block
const matchedElements: HTMLElement[] = [];

if (gridItems) {
    const allElements = gridItems.querySelectorAll('*');

    allElements.forEach(element => {
        const classes = element.className.split(' ');
        for (let cls of classes) {
            if (cls.endsWith('-category')) {
                matchedElements.push(element as HTMLElement);
                break;
            }
        }
    });
}
console.log(matchedElements);

// Function to hide/show based on category
function filterElementsByCategory(targetCategory: string) {
    matchedElements.forEach(element => {
        if (element.classList.contains(targetCategory)) {
            element.classList.remove('hidden-item');
        } else {
            element.classList.add('hidden-item');
        }
    });
}

// Add event listeners to the filter elements

const filterTitle = document.getElementById("filter-title");
const filterContent = document.getElementById("filter-content");

const allFilter = document.querySelector('.all-filter')
const uxrFilter = document.querySelector('.uxr-filter');
const wdFilter = document.querySelector('.wd-filter');
const uxFilter = document.querySelector('.ux-filter');
const iosFilter = document.querySelector('.ios-filter');
const gdFilter = document.querySelector('.gd-filter');

if(allFilter) {
    allFilter.addEventListener('click', () => {
        filterElementsByCategory('grid-item')
    
        if(filterTitle) {
            filterTitle.textContent = "All Projects";
        }
    
        if(filterContent) {
            filterContent.textContent = "A comprehensive showcase of my diverse skill set and accomplishments.";
        }
    });
    
}

if (uxrFilter) {
    uxrFilter.addEventListener('click', () => {
        filterElementsByCategory('uxr-category');

        if(filterTitle) {
            filterTitle.textContent = "UX Research";
        }
    
        if(filterContent) {
            filterContent.textContent = "Analyzing user behavior to inform and refine design choices.";
        }
    });
}

if (wdFilter) {
    wdFilter.addEventListener('click', () => {
        filterElementsByCategory('wd-category')
        
        if(filterTitle) {
            filterTitle.textContent = "Web Development";
        }
    
        if(filterContent) {
            filterContent.textContent = "Crafting responsive and interactive web experiences for diverse audiences.";
        }
    });
}

if (uxFilter) {
    uxFilter.addEventListener('click', () => {
        filterElementsByCategory('ux-category')
        
        if(filterTitle) {
            filterTitle.textContent = "UI/UX Design";
        }
    
        if(filterContent) {
            filterContent.textContent = "Prioritizing user experience with aesthetically pleasing interface designs.";
        }
    });
}

if (iosFilter) {
    iosFilter.addEventListener('click', () => {
        filterElementsByCategory('ios-category')
        
        if(filterTitle) {
            filterTitle.textContent = "iOS Development";
        }
    
        if(filterContent) {
            filterContent.textContent = "Designing and developing intuitive apps tailored for the iOS ecosystem.";
        }
    });
}

if (gdFilter) {
    gdFilter.addEventListener('click', () => {
        filterElementsByCategory('gd-category')
    
        if(filterTitle) {
            filterTitle.textContent = "Graphic Design";
        }
    
        if(filterContent) {
            filterContent.textContent = "Visual creations that capture attention and convey messages effectively.";
        }
    });
}

if (filterOptions && dropdownMenu) { 

    filterOptions.addEventListener("click", (event) => { 
        if (event.target !== dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
            if (dropdownMenu.classList.contains("hidden")) {
                dropdownMenu.classList.remove("hidden");
            } else {
                dropdownMenu.classList.add("hidden");
            }
        }
    });

    // Color changes
    dropdownMenu.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;

        const item = target.closest('div');

        if (item && dropdownMenu.contains(item)) {
            
            if (selectedFilter) {  
                selectedFilter.innerHTML = item.innerHTML;
    
                // Update color
                const newColor = item.getAttribute("data-color");
                if (newColor) {
                    colorClasses.forEach(color => {
                        selectedFilter.classList.remove(color);
                    });
                    selectedFilter.classList.add(newColor);
                }
            }
    
            dropdownMenu.classList.add("hidden");
        }
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!filterOptions.contains(event.target as Node)) {
            dropdownMenu.classList.add("hidden");
        }
    });

}

console.log("Bolla");