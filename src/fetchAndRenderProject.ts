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

interface MarkDef {
  _key: string;
  _type: string;
}

interface ArticleContent {
  _type: 'block';
  style?: string;
  listItem?: string;
  level?: number;
  children: BlockChild[];
  markDefs?: MarkDef[]
}

interface BlockChild {
  _type: 'span';
  children: ChildContent[];
  listItem?: string;
  text?: string;
  marks?: string;
}

interface ChildContent {
  marks?: string[];
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

          // Create the list element outside the forEach loop
          const listElement = document.createElement('ul');
          listElement.style.listStyleType = 'square';
          sectionElement.appendChild(listElement);

          // Iterate over each articleContent
          block.articleContent.forEach(article => {
            // Only proceed if the block has a listItem of type 'bullet'
            if (article.listItem === 'bullet') {
              
              const listItemElement = document.createElement('li');

              // Concatenate texts for a single bullet
              let combinedText = '';
              article.children.forEach(child => {
                // Check for strong marks and concatenate accordingly
                combinedText += child.marks && child.marks.includes('strong')
                  ? `<strong>${child.text}</strong>`
                  : child.text;
              });

              // Set the innerHTML of listItemElement to the combinedText
              listItemElement.innerHTML = combinedText;

              // Append the listItemElement to the listElement
              listElement.appendChild(listItemElement);
            }
          });

        });
        
        
      });
  
      targetElement.appendChild(caseStudyElement);
      count++;
      
    });
  }).catch(error => console.error("Fetching error:", error));  
