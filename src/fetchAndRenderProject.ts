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
  href?: string;
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
  marks?: string[];
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
  
      const caseStudyElement = document.getElementById('content-nexus');

      caseStudyElement?.classList.add('text-gray-50');
  
      // Render title, subtitle, date
      if(caseStudyElement) {
        caseStudyElement.innerHTML = `
        <p class="text-xl mb-5">Completed on ${new Date(caseStudy.date).toLocaleDateString()}</p>
      `;
      }
  
      (caseStudy.sectionContent || []).forEach(section => {
        console.log('Rendering section:', section); // Log each section

      
        const sectionElement = document.createElement('div');

        const headerElement = document.createElement('h2');
        headerElement.textContent = `${section.sectionTitle}`;
        headerElement.classList.add('text-3xl', 'font-bold', 'my-5');

        sectionElement.appendChild(headerElement);

        if(caseStudyElement) {
          caseStudyElement.appendChild(sectionElement);
        }

        section.textBlocks.forEach(block => {

          if(block.articleTitle) {
            const titleElement = document.createElement('h3');
            titleElement.textContent = block.articleTitle;
            titleElement.classList.add('text-2xl', 'font-semibold', 'my-3');
            sectionElement.appendChild(titleElement);
          }

          const imgContainer = document.createElement('div');
          imgContainer.style.width = '100%';
          imgContainer.style.overflowX = 'auto';
          imgContainer.style.whiteSpace = 'nowrap';

          imgContainer.classList.add('flex', 'flex-row', 'items-center');

          (block.imagesWithTitle || []).forEach(image => {

            const img = document.createElement('img');
            img.src = urlFor(image.image).url();
            img.alt = image.imageTitle;

            img.style.display = 'inline-block';
            img.style.width = 'auto';
            img.style.verticalAlign = 'top';
            img.classList.add('p-3');

            imgContainer.appendChild(img);

            sectionElement.appendChild(imgContainer);

          });

          // Assuming imgContainer is already defined as a reference to your div
          let imgCount = 0;

          // Count the number of image elements in the container
          imgContainer.querySelectorAll('img').forEach(() => {
              imgCount++;
          });

          // Apply justify-content based on the number of images
          if (imgCount === 1) {
              imgContainer.style.justifyContent = 'center';
          } else if (imgCount >= 2 && imgCount <= 4) {
              imgContainer.style.justifyContent = 'space-around';
          } else if (imgCount >= 5) {
              imgContainer.style.justifyContent = 'space-between';
          }

          // Create the list element outside the forEach loop
          const listElement = document.createElement('ul');
          listElement.style.listStyleType = 'square';
          

          // Iterate over each articleContent
          block.articleContent.forEach(article => {
            if (article.listItem === 'bullet') {
                const listItemElement = document.createElement('li');
                let combinedText = '';
        
                article.children.forEach(child => {
                    let childText = child.text;
        
                    child.marks?.forEach((mark: string) => {
                        if (mark === 'strong') {
                            childText = `<strong>${childText}</strong>`;
                        }
        
                        const linkDef = article.markDefs?.find((def: MarkDef) => def._key === mark);
                        if (linkDef && linkDef._type === 'link') {
                            childText = `<a href="${linkDef.href}" target="_blank">${childText}</a>`;
                        }
                    });
        
                    combinedText += childText;
                });
        
                listItemElement.innerHTML = combinedText;
                listItemElement.classList.add('text-lg');
                listElement.appendChild(listItemElement);
            } else {
                (article.children || []).forEach(child => {
                    const contentElement = document.createElement('p');
                    let childText = child.text ?? '';
        
                    child.marks?.forEach((mark: string) => {
                        if (mark === 'strong') {
                            childText = `<strong>${childText}</strong>`;
                        }
        
                        const linkDef = article.markDefs?.find((def: MarkDef) => def._key === mark);
                        if (linkDef && linkDef._type === 'link') {
                            childText = `<a href="${linkDef.href}" target="_blank" class="text-xl font-semibold underline decoration-4 decoration-solid text-violet-500">${childText}</a>`;
                        }
                    });
        
                    contentElement.innerHTML = childText; // Changed to innerHTML to render the tags properly
                    contentElement.classList.add('text-lg', 'my-3');
                    sectionElement.appendChild(contentElement);
                });
            }
        });

          sectionElement.appendChild(listElement);

        });
        
        
      });
  
      if (caseStudyElement && targetElement) {
        targetElement.appendChild(caseStudyElement);
      } else {
        console.error('Element not found or target element is null');
      }
      count++;
      
    });
  }).catch(error => console.error("Fetching error:", error));  
