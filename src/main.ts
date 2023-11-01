// Test Console Log

console.log("Bolla");

// CSS Declaration

import '../public/output.css';

// Icons Declaration

import '@fortawesome/fontawesome-free/css/all.css';

//  Resume Download

import resume from '../assets/resume.pdf';

const resumeDownloads = document.querySelectorAll(".download-resume");

resumeDownloads.forEach(downloadLink => {
    (downloadLink as HTMLAnchorElement).href = resume;
});

// Animejs Declaration

import anime from 'animejs/lib/anime.es.js';

// About Image Declaration

import imgAbout from '../assets/about.png';

let imgAb = document.getElementById("about-img") as HTMLImageElement;

if (imgAb) {
    imgAb.src = imgAbout;
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

document.getElementById("hero-button")?.addEventListener("click", function() {
    const targetElement = document.getElementById("contact-section");

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    }
});


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

console.log(matchedElements);

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
    targets: '#hero-content, #hero-button',
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

window.addEventListener('scroll', () => {

    const skillsTitle = document.getElementById('skills-title')?.getBoundingClientRect();
    const skillsLeft = document.getElementById('skills-left')?.getBoundingClientRect();
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
                targets: '#skills-left',
                opacity: [0, 1],
                translateX: ['-50px', '0px'],
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    }

    if(skillsRight){
        if (!animeSkillsRight && skillsRight.top <= window.innerHeight && skillsRight.bottom >= 0) {
            animeSkillsRight = true;
            anime({
                targets: '#skills-right',
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeInOutQuad',
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

// Parallax Effect for Hero Sections

document.addEventListener('scroll', () => {
    const offset: number = window.scrollY;
    const factor: number = 0.5; // Adjust for stronger/weaker parallax effect

    // Hero Section
    const heroSection: HTMLElement | null = document.querySelector('#hero-section');
    const heroContent: HTMLElement | null = document.querySelector('#hero-content');

    if (heroSection && heroContent) {
        const sectionHeight: number = heroSection.offsetHeight;
        const contentHeight: number = heroContent.offsetHeight;

        if (offset * factor + contentHeight <= sectionHeight) {
            heroContent.style.transform = `translateY(calc(${offset * factor}px))`;
        }
    }

    // Projects Hero Section
    const pHeroSection: HTMLElement | null = document.querySelector('#p-hero-section');
    const pHeroContent: HTMLElement | null = document.querySelector('#p-hero-content');

    if (pHeroSection && pHeroContent) {
        const sectionHeight: number = pHeroSection.offsetHeight;
        const contentHeight: number = pHeroContent.offsetHeight;

        if (offset * factor + contentHeight <= sectionHeight) {
            pHeroContent.style.transform = `translateY(calc(${offset * factor}px))`;
        }
    }
});

declare var particlesJS: any;

particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Loader

window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.style.display = 'none';
    }
});



