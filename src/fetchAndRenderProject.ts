import { client } from './sanityClient';

import imageUrlBuilder from '@sanity/image-url';

// Initialize the image URL builder
interface ImageSource {
    asset: {
      _ref: string; // Reference to the image asset in Sanity
    };
}
  
  // Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Define a function to generate image URLs
function urlFor(source: ImageSource) {
return builder.image(source);
}

interface ImageWithTitle {
  image: {
    _type: 'image';
    asset: {
      _ref: string;
    };
  };
  imageTitle: string;
}

interface BlockContent {
  _type: 'block';
  children: Array<{ text: string }>;
  // ...other block-specific properties
}

interface SectionContent {
  sectionTitle: string;
  textBlocks: BlockContent[];
  imagesWithTitle: ImageWithTitle[];
}

interface CaseStudy {
  title: string;
  subtitle: string;
  date: string;
  sectionContent: SectionContent[];
}

// Keep adding case study content IDs here as the first element
const contentArray = ['content-nexus'];
let count = 0;

client.fetch<CaseStudy[]>('*[_type == "caseStudy"]').then(cases => {
    console.log('Fetched cases:', cases); // Log the fetched data
  
    cases.forEach(caseStudy => {
      const targetElement = document.getElementById(contentArray[count]);
      if (!targetElement) {
        console.error(`Element with ID ${contentArray[count]} not found.`);
        count++;
        return;
      }
  
      console.log('Rendering caseStudy:', caseStudy); // Log each case study
  
      const caseStudyElement = document.createElement('div');
  
      // Render title, subtitle, date
      caseStudyElement.innerHTML = `
        <h1 class="text-4xl">${caseStudy.title}</h1>
        <h2 class="text-2xl">${caseStudy.subtitle}</h2>
        <p>${new Date(caseStudy.date).toLocaleDateString()}</p>
      `;
  
      (caseStudy.sectionContent || []).forEach(section => {
        console.log('Rendering section:', section); // Log each section
      
        const sectionElement = document.createElement('div');
        sectionElement.innerHTML = `<h3>${section.sectionTitle}</h3>`;
      
        // Check and render textBlocks
        if (section.textBlocks && section.textBlocks.length > 0) {
          section.textBlocks.forEach(block => {
            if (block._type === 'block') {
              block.children.forEach(child => {
                const textElement = document.createElement('p');
                textElement.textContent = child.text;
                sectionElement.appendChild(textElement);
              });
            }
          });
        }
      
        // Check and render imagesWithTitle
        if (section.imagesWithTitle && section.imagesWithTitle.length > 0) {
          section.imagesWithTitle.forEach(imageWithTitle => {
            const img = document.createElement('img');
            img.src = urlFor(imageWithTitle.image).url(); // Adjust this line if you use a different method to resolve image URLs
            img.alt = imageWithTitle.imageTitle;
            sectionElement.appendChild(img);
      
            const caption = document.createElement('p');
            caption.textContent = imageWithTitle.imageTitle;
            sectionElement.appendChild(caption);
          });
        }
      
        // Append sectionElement to caseStudyElement
        caseStudyElement.appendChild(sectionElement);
      });
  
      targetElement.appendChild(caseStudyElement);
      count++;
      
    });
  }).catch(error => console.error("Fetching error:", error));  
