// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE6XbGBnH4ixMCgvKz7IhPPGoqTbL_GzE",
  authDomain: "personal-portfolio-cce73.firebaseapp.com",
  projectId: "personal-portfolio-cce73",
  storageBucket: "personal-portfolio-cce73.appspot.com",
  messagingSenderId: "515977901722",
  appId: "1:515977901722:web:5c6f23d82c258ac0b2d123",
  measurementId: "G-JK0VRDFH80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// @ts-ignore
const analytics = getAnalytics(app);

// logoBlack Declaration

import logoBlack from '../assets/logoBlack.png';

const logoBlackContainer = document.getElementById('logo') as HTMLImageElement;

if(logoBlackContainer) {
    logoBlackContainer.src = logoBlack;
}

import logoWhite from '../assets/logoWhite.png';

const logoWhiteContainer = document.getElementById('logoWhite') as HTMLImageElement;

if(logoWhiteContainer) {
    logoWhiteContainer.src = logoWhite;
}

// CSS Declaration

import '../public/output.css';

// Icons Declaration

import '@fortawesome/fontawesome-free/css/all.css';

// Favicon Declaration

import favicon from '../assets/favicon-white.png';

const faviconContainer = document.getElementById('favicon') as HTMLLinkElement;

if(faviconContainer) {
    faviconContainer.href = favicon;
}

//  Resume Download

import fdResume from '../assets/Front-End Development.pdf';

const fdDownloads = document.querySelectorAll(".download-fd-resume");

fdDownloads.forEach(downloadLink => {
    (downloadLink as HTMLAnchorElement).href = fdResume;
});

import uxResume from '../assets/UX Design.pdf';

const uxDownloads = document.querySelectorAll(".download-ux-resume");

uxDownloads.forEach(downloadLink => {
    (downloadLink as HTMLAnchorElement).href = uxResume;
});

// Animejs Declaration

import anime from 'animejs/lib/anime.es.js';

// About Image Declaration

import imgAbout from '../assets/about.png';

let imgAb = document.getElementById("about-img") as HTMLImageElement;

if (imgAb) {
    imgAb.src = imgAbout;
  }

// Project.html Thumbnails

import imgP1 from '../assets/Nexus Play Thumbnail.png';

import imgP2 from '../assets/Clarity Thumbnail.png';

import imgP3 from '../assets/Alethia Thumbnail.png';

import imgP4 from '../assets/UI Designs Thumbnail.png';

let pGrid1 = document.getElementById("pr-1-img") as HTMLImageElement;

if (pGrid1) {
  pGrid1.src = imgP1;
  pGrid1.style.width = "100%";
}

let pGrid2 = document.getElementById("pr-2-img") as HTMLImageElement;

if (pGrid2) {
  pGrid2.src = imgP2;
  pGrid2.style.width = "100%";
}

let pGrid3 = document.getElementById("pr-3-img") as HTMLImageElement;

if (pGrid3) {
  pGrid3.src = imgP3;
  pGrid3.style.width = "100%";
}

let pGrid4 = document.getElementById("pr-4-img") as HTMLImageElement;

if (pGrid4) {
  pGrid4.src = imgP4;
  pGrid4.style.width = "100%";
}

// Sanity

import './fetchAndRenderProject';

// Nav Bar Selected State

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        navItems.forEach(i => i.classList.remove("selected"));

        if (event.target && event.target instanceof HTMLElement) {
            // Check if the event target is the <li> element
            if (event.target === item) {
                event.target.classList.add("selected");
            } 
            // If the event target is a child of <li> (like the <a> or <i>), add the "selected" class to the parent <li>
            else if (event.target.parentElement && event.target.parentElement === item) {
                event.target.parentElement.classList.add("selected");
            }
        }
    });
});

// Navbar Scroll

window.addEventListener("DOMContentLoaded", () => {

    const navbarLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-item a');
    
    navbarLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e: Event) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith("#")) {
                const targetSection: HTMLElement | null = document.querySelector(href);
                if (targetSection) {
                    // Prevent default only if the target section exists on the page
                    e.preventDefault();

                    const navbar: HTMLElement | null = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Only run this if a hash exists and it's not being handled by the click event.
    if (window.location.hash && !document.activeElement?.classList.contains('nav-item')) {
        const targetElement: HTMLElement | null = document.querySelector(window.location.hash);
        if (targetElement) {
            // Wait a bit to let other potential scripts run, then adjust scroll.
            setTimeout(() => {
                const navbar: HTMLElement | null = document.querySelector('.navbar');
                if (navbar && targetElement) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 10);
        }
    }
});

// Hero-Button Scroll

// document.getElementById("hero-button")?.addEventListener("click", function() {
//     const targetElement = document.getElementById("contact-section");

//     if (targetElement) {
//         targetElement.scrollIntoView({
//             behavior: "smooth"
//         });
//     }
// });


// Dropdown Menu for Projects Section

document.addEventListener("DOMContentLoaded", () => {
    showAllGridItems();
});

function showAllGridItems() {
    const gridItemsClasses = document.querySelectorAll("#my-projects-container > div");


    gridItemsClasses.forEach(item => {
        
        item.classList.remove("hidden");

    });
}

const selectedFilter = document.getElementById("selected-filter") as HTMLImageElement;
const filterOptions = document.getElementById("filter-options") as HTMLImageElement;
const dropdownMenu = document.getElementById("dropdown-menu") as HTMLImageElement;
const gridItems = document.getElementById("my-projects-container") as HTMLImageElement;
const colorClasses = ["text-blue-500", "text-amber-500", "text-red-500", "text-emerald-600", "text-violet-500", "text-green-500"];

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

// Function to hide/show based on category
function filterElementsByCategory(targetCategory: string) {
    matchedElements.forEach(element => {
        if (element.classList.contains(targetCategory)) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });
}

// Add event listeners to the filter elements

const filterTitle = document.getElementById("filter-title") as HTMLImageElement;
const filterContent = document.getElementById("filter-content") as HTMLImageElement;

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

// Media Queries for Navbar Responsiveness

document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu') as HTMLElement; // Type assertion
    const navButton = document.getElementById('nav-button') as HTMLElement; // Type assertion

    if(window.innerWidth <= 1024) {
        if(navMenu) {
            navMenu.classList.add('hidden');
        }

        if(navButton) {
            navButton.classList.remove('hidden');

            navButton.addEventListener('click', function() {
                if(navMenu){
                    if(navMenu.classList.contains('hidden')){
                        navMenu.classList.remove('hidden');
                    } else {
                        navMenu.classList.add('hidden');
                    }
                }
            });

            // Close navMenu on click anywhere outside the navMenu
            document.addEventListener('click', function(event) {
                
                if (event.target instanceof Node) {
                    if (!navMenu.contains(event.target) && !navButton.contains(event.target) && !navMenu.classList.contains('hidden')) {
                        navMenu.classList.add('hidden');
                    }
                }

                if(navMenu.classList.contains('hidden')) {
                    if(navButton.innerHTML === '<i class="fa-regular fa-circle-xmark fa-lg mr-3"></i> CLOSE') {
                        navButton.innerHTML = '<i class="fa-solid fa-bars mr-3"></i> MENU';
                        navButton.classList.remove('text-red-500');
                    }
                }

            });
        }

        // Button toggling between Menu and Close

        navButton.addEventListener('click', function() {
            if (!navMenu.classList.contains('hidden')) {
                
                navButton.innerHTML = '<i class="fa-regular fa-circle-xmark fa-lg mr-3"></i> CLOSE';
                navButton.classList.add('text-red-500');
            } else {
                
                navButton.innerHTML = '<i class="fa-solid fa-bars mr-3"></i> MENU';

                if(navButton.classList.contains('text-red-500')) {
                    navButton.classList.remove('text-red-500');
                }
            }

            anime({
                targets: navButton,
                opacity: [0,1],
                duration: 500,
                easing: 'easeInOutQuad',
            });

        });
    }
});

// Animations - index.html

// Navbar

anime({
    targets: '#navbar',
    opacity: [0, 1],
    duration: 1000,
    translateY: ['-50px', '0px'],
    easing: 'easeInOutQuad'
});

if(window.innerWidth <= 1024) {

    const animeNavButton = document.getElementById('nav-button');
    const animeNavMenu = document.getElementById('nav-menu');

    if(animeNavButton) {
        animeNavButton.addEventListener('click', () => {

            anime({
                targets: animeNavButton,
                opacity: [0,1],
                duration: 500,
                easing: 'easeInOutQuad',
            });
            
            anime({
                targets: animeNavMenu,
                translateX: ['100px', '0px'],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeInOutQuad',
            });  

        });
        
    }

}

// Hero Section

anime({
    targets: '#hero-content',
    opacity: [0, 10],
    duration: 1000,
    translateX: ['-50px', '0px'],
    easing: 'easeInOutQuad',
    delay: 400
});

// About Section

let animeAboutTitle = false;
let animeAboutImg = false;
let animeAboutCont = false;

window.addEventListener('scroll', () => {

    const aboutTitle = document.getElementById('about-title')?.getBoundingClientRect();
    const aboutImgRect = document.getElementById('about-img')?.getBoundingClientRect();
    const aboutContRect = document.getElementById('about-content')?.getBoundingClientRect();

    if(aboutTitle){
        if (!animeAboutTitle && aboutTitle.top <= window.innerHeight && aboutTitle.bottom >= 0) {
            animeAboutTitle = true;
            anime({
                targets: '#about-title',
                opacity: [0, 1],
                translateY: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(aboutImgRect){
        if (!animeAboutImg && aboutImgRect.top <= window.innerHeight && aboutImgRect.bottom >= 0) {
            animeAboutImg = true;
            anime({
                targets: '#about-img',
                opacity: [0, 1],
                translateX: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(aboutContRect){
        if (!animeAboutCont && aboutContRect.top <= window.innerHeight && aboutContRect.bottom >= 0) {
            animeAboutCont = true;
            anime({
                targets: '#about-content',
                opacity: [0, 1],
                translateX: ['50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

});

// Contact Section

// TypeScript code with Anime.js for hover effects on social icon wrappers
document.addEventListener('DOMContentLoaded', () => {
    const iconWrappers = document.querySelectorAll('.icon-wrapper');
    
  
    iconWrappers.forEach((wrapper) => {
      const iconContent = wrapper.querySelector('.icon-content') as HTMLElement;
  
      wrapper.addEventListener('mouseenter', () => {
        
        anime({
          targets: iconContent,
          translateX: [-50, 0],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeInOutQuad',
          begin: () => {
            if (iconContent) {
                iconContent.style.display = 'flex';
                iconContent.classList.add('ml-3');
            }
          }
        });

        iconContent.classList.add('ml-3');

        anime({
            targets: wrapper,
            width: "fit",
            duration: 500,
            easing: 'easeInOutQuad',
          });
  
        
        
      });
  
      wrapper.addEventListener('mouseleave', () => {
        
        anime({
          targets: iconContent,
          translateX: [0, -50],
          opacity: [1, 0],
          duration: 500,
          easing: 'easeInOutQuad',
          complete: () => {
            if (iconContent) {
                iconContent.style.display = 'none';
                iconContent.classList.remove('ml-3');
            }
          }
        });
        
        anime({
            targets: wrapper,
            width: "fit",
            duration: 500,
            easing: 'easeInOutQuad'
        });

          
        // Animate the wrapper itself
      });
    });
});
  
  

// My Projects Section

let animeMyProjectsTitle = false;
let animateMyProjectsUX = false;
let animateMyProjectsFD = false;
let animateMyProjectsGD = false;
let animeMyProjectsButton = false;

window.addEventListener('scroll', () => {

    const myProjectsTitle = document.getElementById('projects-title')?.getBoundingClientRect();
    const myProjectsUX = document.getElementById('projects-ux')?.getBoundingClientRect();
    const myProjectsFD = document.getElementById('projects-fd')?.getBoundingClientRect();
    const myProjectsGD = document.getElementById('projects-gd')?.getBoundingClientRect();
    const myProjectsButton = document.getElementById('projects-button')?.getBoundingClientRect();

    if(myProjectsTitle){
        if (!animeMyProjectsTitle && myProjectsTitle.top <= window.innerHeight && myProjectsTitle.bottom >= 0) {
            animeMyProjectsTitle = true;
            anime({
                targets: '#projects-title',
                opacity: [0, 1],
                translateY: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(myProjectsUX){
        if (!animateMyProjectsUX && myProjectsUX.top <= window.innerHeight && myProjectsUX.bottom >= 0) {
            animateMyProjectsUX = true;
            anime({
                targets: '#projects-ux',
                opacity: [0, 1],
                translateX: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(myProjectsFD){
        if (!animateMyProjectsFD && myProjectsFD.top <= window.innerHeight && myProjectsFD.bottom >= 0) {
            animateMyProjectsFD = true;
            anime({
                targets: '#projects-fd',
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(myProjectsGD){
        if (!animateMyProjectsGD && myProjectsGD.top <= window.innerHeight && myProjectsGD.bottom >= 0) {
            animateMyProjectsGD = true;
            anime({
                targets: '#projects-gd',
                opacity: [0, 1],
                translateX: ['50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(myProjectsButton){
        if (!animeMyProjectsButton && myProjectsButton.top <= window.innerHeight && myProjectsButton.bottom >= 0) {
            animeMyProjectsButton = true;
            anime({
                targets: '#projects-button',
                opacity: [0, 1],
                translateY: ['50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

});

// My Skills

let animeSkillsTitle = false;
let animeSkillsLeft = false;
let animeSkillsRight = false;
let animeSkillsData = false;

// Data Values

let data1 = {
    value: 0
};

let data2 = {
    value: 0
};

let data3 = {
    value: 0
};

let skill1 = {
    value: 0
};

let skill2 = {
    value: 0
};

let skill3 = {
    value: 0
};

let skill4 = {
    value: 0
};

let skill5 = {
    value: 0
};

window.addEventListener('scroll', () => {

    const skillsTitle = document.getElementById('skills-title')?.getBoundingClientRect();
    const skillsLeft = document.getElementById('skills-left')?.getBoundingClientRect();
    const skillsData = document.getElementById('skills-data')?.getBoundingClientRect();
    const skillsRight = document.getElementById('skills-right')?.getBoundingClientRect();

    if(skillsTitle){
        if (!animeSkillsTitle && skillsTitle.top <= window.innerHeight && skillsTitle.bottom >= 0) {
            animeSkillsTitle = true;
            anime({
                targets: '#skills-title',
                opacity: [0, 1],
                translateY: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(skillsLeft){
        if (!animeSkillsLeft && skillsLeft.top <= window.innerHeight && skillsLeft.bottom >= 0) {
            animeSkillsLeft = true;
            anime({
                targets: '#skills-left, #tools',
                opacity: [0, 1],
                translateX: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    // Stats Counter
    if(skillsData) {
        if (!animeSkillsData && skillsData.top <= window.innerHeight && skillsData.bottom >= 0) {
            animeSkillsData = true;
            anime({
                targets: data1,
                value: [0, 2000],
                round: 1,
                duration: 2000,
                easing: 'easeInOutQuad',
                delay: 500,
                update: function() {
                    const data1Text = document.getElementById('data-1');
                    if(data1Text) {
                        data1Text.innerText = data1.value.toString();
                    }
                }
            });

            anime({
                targets: data2,
                value: [0, 13],
                round: 1,
                duration: 2000,
                easing: 'easeInOutQuad',
                delay: 500,
                update: function() {
                    const data2Text = document.getElementById('data-2');
                    if(data2Text) {
                        data2Text.innerText = data2.value.toString();
                    }
                }
            });

            anime({
                targets: data3,
                value: [0, 10],
                round: 1,
                duration: 2000,
                easing: 'easeInOutQuad',
                delay: 500,
                update: function() {
                    const data3Text = document.getElementById('data-3');
                    if(data3Text) {
                        data3Text.innerText = data3.value.toString();
                    }
                }
            });
        }
    }

    // Tools

    if(skillsRight){
        if (!animeSkillsRight && skillsRight.top <= window.innerHeight && skillsRight.bottom >= 0) {
            animeSkillsRight = true;
            anime({
                targets: '#skills-right',
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeInOutQuad',
            });

            anime({
                targets: skill1,
                value: [0, 90],
                round: 1,
                duration: 2000,
                easing: 'easeInOutQuad',
                delay: 500,
                update: function() {
                    const skill1Text = document.getElementById('skill-1');
                    if(skill1Text) {
                        skill1Text.innerText = skill1.value.toString();
                    }
                }
            });

            anime({
                targets: skill2,
                value: [0, 95],
                round: 1,
                duration: 2000,
                easing: 'easeInOutQuad',
                delay: 500,
                update: function() {
                    const skill2Text = document.getElementById('skill-2');
                    if(skill2Text) {
                        skill2Text.innerText = skill2.value.toString();
                    }
                }
            });

            anime({
                targets: skill3,
                value: [0, 85],
                round: 1,
                duration: 2000,
                easing: 'easeInOutQuad',
                delay: 500,
                update: function() {
                    const skill3Text = document.getElementById('skill-3');
                    if(skill3Text) {
                        skill3Text.innerText = skill3.value.toString();
                    }
                }
            });

            anime({
                targets: skill4,
                value: [0, 95],
                round: 1,
                duration: 2000,
                easing: 'easeInOutQuad',
                delay: 500,
                update: function() {
                    const skill4Text = document.getElementById('skill-4');
                    if(skill4Text) {
                        skill4Text.innerText = skill4.value.toString();
                    }
                }
            });

            anime({
                targets: skill5,
                value: [0, 80],
                round: 1,
                duration: 2000,
                easing: 'easeInOutQuad',
                delay: 500,
                update: function() {
                    const skill5Text = document.getElementById('skill-5');
                    if(skill5Text) {
                        skill5Text.innerText = skill5.value.toString();
                    }
                }
            });
        }
    }

    // Animating skills for 80%, 85%, 90%, 95%

    const skillsW80 = document.querySelectorAll('.anime-80');
    const skillsW85 = document.querySelectorAll('.anime-85');
    const skillsW90 = document.querySelectorAll('.anime-90');
    const skillsW95 = document.querySelectorAll('.anime-95');

    skillsW80.forEach((elem: Element) => {

        const w80Rect = elem.getBoundingClientRect();

        const skillsAnimated80 = elem.getAttribute('animated-80');

        if(w80Rect){
            if (w80Rect && skillsAnimated80 !== 'true' && w80Rect.top <= window.innerHeight && w80Rect.bottom >= 0) {
                
                elem.setAttribute('animated-80', 'true');

                anime({
                    targets: elem,
                    width: '80%',
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    delay: 600,
                });
            }
        }

    });

    skillsW85.forEach((elem: Element) => {

        const w85Rect = elem.getBoundingClientRect();

        const skillsAnimated85 = elem.getAttribute('animated-85');

        if(w85Rect){
            if (w85Rect && skillsAnimated85 !== 'true' && w85Rect.top <= window.innerHeight && w85Rect.bottom >= 0) {
                
                elem.setAttribute('animated-85', 'true');

                anime({
                    targets: elem,
                    width: '85%',
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    delay: 600,
                });
            }
        }

    });

    skillsW90.forEach((elem: Element) => {

        const w90Rect = elem.getBoundingClientRect();

        const skillsAnimated90 = elem.getAttribute('animated-90');

        if(w90Rect){
            if (w90Rect && skillsAnimated90 !== 'true' && w90Rect.top <= window.innerHeight && w90Rect.bottom >= 0) {
                
                elem.setAttribute('animated-90', 'true');

                anime({
                    targets: elem,
                    width: '90%',
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    delay: 600,
                });
            }
        }

    });

    skillsW95.forEach((elem: Element) => {

        const w95Rect = elem.getBoundingClientRect();

        const skillsAnimated95 = elem.getAttribute('animated-95');

        if(w95Rect){
            if (w95Rect && skillsAnimated95 !== 'true' && w95Rect.top <= window.innerHeight && w95Rect.bottom >= 0) {
                
                elem.setAttribute('animated-95', 'true');

                anime({
                    targets: elem,
                    width: '95%',
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    delay: 600,
                });
            }
        }

    });

});

// Resume Section

let animeResumeTitle = false;
let animeResumeLeft = false;
let animeResumeRight = false;
let animeResumeButton = false;

window.addEventListener('scroll', () => {

    const resumeTitle = document.getElementById('resume-title')?.getBoundingClientRect();
    const resumeLeft = document.getElementById('resume-exp')?.getBoundingClientRect();
    const resumeRight = document.getElementById('resume-edu')?.getBoundingClientRect();
    const resumeButton = document.getElementById('resume-button')?.getBoundingClientRect();

    if(resumeTitle){
        if (!animeResumeTitle && resumeTitle.top <= window.innerHeight && resumeTitle.bottom >= 0) {
            animeResumeTitle = true;
            anime({
                targets: '#resume-title',
                opacity: [0, 1],
                translateY: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(resumeLeft){
        if (!animeResumeLeft && resumeLeft.top <= window.innerHeight && resumeLeft.bottom >= 0) {
            animeResumeLeft = true;
            anime({
                targets: '#resume-exp',
                opacity: [0, 1],
                translateX: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(resumeRight){
        if (!animeResumeRight && resumeRight.top <= window.innerHeight && resumeRight.bottom >= 0) {
            animeResumeRight = true;
            anime({
                targets: '#resume-edu',
                opacity: [0, 1],
                translateX: ['50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(resumeButton){
        if (!animeResumeButton && resumeButton.top <= window.innerHeight && resumeButton.bottom >= 0) {
            animeResumeButton = true;
            anime({
                targets: '#resume-button',
                opacity: [0, 1],
                translateY: ['50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

});

// Contact Section

let animeContactTitle = false;
let animecontactLeft = false;
let animeConatctRight = false;

window.addEventListener('scroll', () => {

    const contactTitle = document.getElementById('contact-title')?.getBoundingClientRect();
    const contactLeft = document.getElementById('contact-left')?.getBoundingClientRect();
    const contactRight = document.getElementById('contact-right')?.getBoundingClientRect();

    if(contactTitle){
        if (!animeContactTitle && contactTitle.top <= window.innerHeight && contactTitle.bottom >= 0) {
            animeContactTitle = true;
            anime({
                targets: '#contact-title',
                opacity: [0, 1],
                translateY: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(contactLeft){
        if (!animecontactLeft && contactLeft.top <= window.innerHeight && contactLeft.bottom >= 0) {
            animecontactLeft = true;
            anime({
                targets: '#contact-left',
                opacity: [0, 1],
                translateX: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(contactRight){
        if (!animeConatctRight && contactRight.top <= window.innerHeight && contactRight.bottom >= 0) {
            animeConatctRight = true;
            anime({
                targets: '#contact-right',
                opacity: [0, 1],
                translateX: ['50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

});

// Animations - projects.html

// Projects Hero Section

anime({
    targets: '#p-hero-content',
    opacity: [0, 1],
    translateX: ['-50px', '0px'],
    duration: 1000,
    easing: 'easeInOutQuad',
});

anime({
    targets: '#project-hero-content',
    opacity: [0, 1],
    translateX: ['-50px', '0px'],
    duration: 1000,
    easing: 'easeInOutQuad',
});

// Projects Content Section

anime({
    targets: '#filter-title-container, .grid-item',
    opacity: [0, 1],
    translateY: ['-50px', '0px'],
    duration: 1000,
    easing: 'easeInOutQuad',
    delay: 500
});

const filterAnimeButtons = document.querySelectorAll('.filter-button');

filterAnimeButtons.forEach((elem: Element) => {
    elem.addEventListener('click', () => {

        anime({
            targets: '#filter-title-container, .grid-item',
            opacity: [0, 1],
            translateY: ['-50px', '0px'],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    });
});

// Portfolio Pages

anime({
    targets: '#p1',
    opacity: [0, 1],
    translateY: ['-50px', '0px'],
    duration: 1000,
    easing: 'easeInOutQuad',
});

// Parallax Effect for Hero Sections

document.addEventListener('scroll', () => {
    const offset: number = window.scrollY;
    const factor: number = 1; // Adjust for stronger/weaker parallax effect
    
    // Parallax for p5-container
    const p5Container: HTMLElement | null = document.querySelector('#p5-container');
    if (p5Container) {
        p5Container.style.transform = `translateY(${offset * factor}px)`;
    }

    // Hero Section
    const heroSection: HTMLElement | null = document.querySelector('#hero-section');
    const heroContent: HTMLElement | null = document.querySelector('#hero-content');
    const nameText: HTMLElement | null = document.querySelector('#name-text');

    if (heroSection && heroContent && nameText) {
        const sectionHeight: number = heroSection.offsetHeight;
        const contentHeight: number = heroContent.offsetHeight;
        const nameTextHeight: number = nameText.offsetHeight;

        if(nameText){
            if (offset * factor <= sectionHeight - (contentHeight - nameTextHeight)) {
            heroContent.style.transform = `translateY(calc(${offset * factor}px))`;
        }
    }
    }

    // Projects Hero Section
    const pHeroSection: HTMLElement | null = document.querySelector('#p-hero-section');
    const pHeroContent: HTMLElement | null = document.querySelector('#p-hero-content');
    const pNameText: HTMLElement | null = document.querySelector('#p-name-text');

    if (pHeroSection && pHeroContent) {
        const sectionHeight: number = pHeroSection.offsetHeight;
        const contentHeight: number = pHeroContent.offsetHeight;
        if(pNameText){
            const pNameTextHeight: number = pNameText.offsetHeight;

            if (offset * factor <= sectionHeight - (contentHeight - pNameTextHeight)) {
                pHeroContent.style.transform = `translateY(calc(${offset * factor}px))`;
            }
        }
    }

    // Per Project Hero section
    const projectHeroSection: HTMLElement | null = document.querySelector('#project-hero-section');
    const projectHeroContent: HTMLElement | null = document.querySelector('#project-hero-content');
    const projectNameText: HTMLElement | null = document.querySelector('#project-name-text');

    if (projectHeroSection && projectHeroContent) {
        const sectionHeight: number = projectHeroSection.offsetHeight;
        const contentHeight: number = projectHeroContent.offsetHeight;
        if(projectNameText){
            const projectNameTextHeight: number = projectNameText.offsetHeight;

            if (offset * factor <= sectionHeight - (contentHeight - projectNameTextHeight)) {
                projectHeroContent.style.transform = `translateY(calc(${offset * factor}px))`;
            }
        }
    }
});

// p5 Animation

import p5 from 'p5';

document.addEventListener('DOMContentLoaded', () => {
    let particles: Particle[] = [];

const sketch = (p: p5) => {
    p.setup = () => {
        let canvasContainer = document.getElementById('p5-container');

        if (canvasContainer) {
            // Safe to use canvasContainer here
            
            let canvasWidth = canvasContainer.offsetWidth;
            let canvasHeight = p.windowHeight;
            let canvas = p.createCanvas(canvasWidth, canvasHeight);
            canvas.parent(canvasContainer);
            canvas.parent('p5-container');

        if(window.innerWidth < 1024) {
            for (let i = 0; i < 15; i++) {
                particles.push(new Particle(p));
            }
        }

        if(window.innerWidth >= 1024) {
            for (let i = 0; i < 40; i++) {
                particles.push(new Particle(p));
            }
        }
        
            // ... rest of your code
        } else {
            console.error("Element with id 'p5-container' was not found.");
        }
        
    };

    p.draw = () => {
        p.clear();
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].display();
            for (let j = i + 1; j < particles.length; j++) {
                if (particles[i].isNear(particles[j])) {
                    p.stroke(56, 189, 248, 100);
                    p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                }
            }
        }
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

class Particle {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;

    constructor(private p: p5) {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.size = 12;
        this.vx = p.random(-1, 1) * 1.5;
        this.vy = p.random(-1, 1) * 1.5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > this.p.width) {
            this.vx *= -1;
        }
        if (this.y < 0 || this.y > this.p.height) {
            this.vy *= -1;
        }
    }

    display() {
        this.p.noStroke();
        let r = this.p.map(this.x, 0, this.p.width, 29, 100);
        let g = this.p.map(this.x, 0, this.p.width, 155, 210);
        let b = this.p.map(this.x, 0, this.p.width, 240, 255);
        this.p.fill(r, g, b);
        this.p.circle(this.x, this.y, this.size);
    }

    isNear(other: Particle) {
        let d = this.p.dist(this.x, this.y, other.x, other.y);
        return d < 100;
    }
}

new p5(sketch);

});
  
// Loader

window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.style.display = 'none';
    }
});

// Portfolio 1

document.getElementById("button-p1-1")?.addEventListener("click", function() {
    
    window.location.href = "./nexusPlay.html";

});

document.getElementById("button-p1-2")?.addEventListener("click", function() {
    
    window.open("https://www.figma.com/file/RVKGe1pXhECviwOPaDIxJZ/Nexus-Play?type=design&node-id=0%3A1&mode=design&t=RfnXBgzVmXHpbMZ0-1", "_blank");
    

});

// Portfolio 2

document.getElementById("button-p2-1")?.addEventListener("click", function() {
    
    window.location.href = "./clarity.html";

});

document.getElementById("button-p2-2")?.addEventListener("click", function() {
    
    window.open("https://docs.google.com/presentation/d/1OEzM2BjzV6B1oTR4MuU2X9c5D8j_clQQd6EEt_68NpQ/", "_blank");
    
});

// Portfolio 3

document.getElementById("button-p3-1")?.addEventListener("click", function() {
    
    window.location.href = "./alethia.html";

});

document.getElementById("button-p3-2")?.addEventListener("click", function() {
    
    window.open("https://www.figma.com/file/FcFY5H9kDZ80bXzDLndfiT/Aletheia?type=design&node-id=0%3A1&mode=design&t=sx8gTe4uTo7zuN98-1", "_blank");
    
});

// Portfolio 4

document.getElementById('button-p4-1')?.addEventListener('click', function() {
    window.location.href = "./uiDesigns.html";
});

document.getElementById('button-p4-2')?.addEventListener('click', function() {
    window.open("https://www.figma.com/file/v2FVFWTxpHGsrvVlDVql1D/UI%2FUX-Projects?type=design&node-id=0%3A1&mode=design&t=iLEMmrjXMH99h6Tt-1", "_blank");
});

// NexusPlay

import nexusScreen from '../assets/caseStudies/NexusPlayScreen.png';

const nexusScreenContainer = document.getElementById('nexus-screen') as HTMLImageElement;

if(nexusScreenContainer) {
    nexusScreenContainer.src = nexusScreen;
}

// Clarity

import clarityScreen from '../assets/caseStudies/ClarityScreen.png';

const clarityScreenContainer = document.getElementById('clarity-screen') as HTMLImageElement;

if(clarityScreenContainer) {
    clarityScreenContainer.src = clarityScreen;
}

// Alethia

import alethiaScreen from '../assets/caseStudies/AlethiaScreen.png';

const alethiaScreenContainer = document.getElementById('alethia-screen') as HTMLImageElement;

if(alethiaScreenContainer) {
    alethiaScreenContainer.src = alethiaScreen;
}

// UI Designs

import uiDesignsScreen from '../assets/caseStudies/uiDesignsScreen.png'

const uiDesignsScreenContainer = document.getElementById('uiDesigns-screen') as HTMLImageElement;

if(uiDesignsScreenContainer) {
    uiDesignsScreenContainer.src = uiDesignsScreen;
}


// window.onload = () => {
//     setTimeout(HeaderColors, 300);
// }