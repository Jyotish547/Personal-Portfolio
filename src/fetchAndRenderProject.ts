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

interface ArticleContent {
  _type: 'block';
  children: BlockChild[];
}

interface BlockChild {
  _type: 'span';
  text: string;
}

interface TextBlock {
  articleTitle: string;
  imagesWithTitle: ImageWithTitle[];
  articleContent: ArticleContent[];
}

interface SectionContent {
  sectionTitle: string;
  textBlocks: TextBlock[];
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
        <h2 class="text-2xl">${caseStudy.subtitle}</h2>
        <p>${new Date(caseStudy.date).toLocaleDateString()}</p>
      `;
  
      (caseStudy.sectionContent || []).forEach(section => {
        console.log('Rendering section:', section); // Log each section
      
        const sectionElement = document.createElement('div');
        sectionElement.innerHTML = `<h3>${section.sectionTitle}</h3>`;

        caseStudyElement.appendChild(sectionElement);

        section.textBlocks.forEach(block => {

          if(block.articleTitle) {
            const titleElement = document.createElement('h3');
            titleElement.textContent = block.articleTitle;
            sectionElement.appendChild(titleElement);
          }

          (block.imagesWithTitle || []).forEach(image => {
            const img = document.createElement('img');
            img.src = urlFor(image.image).url();
            img.alt = image.imageTitle;
            sectionElement.appendChild(img);
          });

          (block.articleContent || []).forEach(article => {
            (article.children || []).forEach(child => {
              const contentElement = document.createElement('p');
              contentElement.textContent = child.text;
              sectionElement.appendChild(contentElement);
            });

          });

        });
        
        
      });
  
      targetElement.appendChild(caseStudyElement);
      count++;
      
    });
  }).catch(error => console.error("Fetching error:", error));  
