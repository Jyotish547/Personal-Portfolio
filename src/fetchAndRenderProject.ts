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
  id: string,
  sectionContent: SectionContent[];
}

// Keep adding case study content IDs here as the first element
const contentArray = [
  { id: 'content-nexus', refId: 'nexus' },
  { id: 'content-clarity', refId: 'clarity' },
  { id: 'content-alethia', refId: 'alethia' },
  { id: 'content-uiDesigns', refId: 'uiDesigns'}
];
let count = 0;

client.fetch<CaseStudy[]>('*[_type == "caseStudy"]').then(cases => {
    console.log('Fetched cases:', cases); // Log the fetched data
  
    cases.forEach(caseStudy => {
      const contentItem = contentArray.find(item => item.refId === caseStudy.id); // Assuming caseStudy has an _id field
      if (!contentItem) {
        console.error(`No content item found for case study with ID ${caseStudy.id}.`);
        return;
      }

      const targetElement = document.getElementById(contentItem.id);
      if (!targetElement) {
        console.error(`Element with ID ${contentItem.id} not found.`);
        return;
      }
  
      console.log('Rendering caseStudy:', caseStudy); // Log each case study
  
      // Render title, subtitle, date
      if(targetElement) {
        targetElement.innerHTML = `
        <p class="text-base sm:text-xl mb-5">Completed on ${new Date(caseStudy.date).toLocaleDateString()}</p>
      `;
      }
  
      (caseStudy.sectionContent || []).forEach(section => {
        console.log('Rendering section:', section); // Log each section

      
        const sectionElement = document.createElement('div');

        const headerElement = document.createElement('h2');
        headerElement.textContent = `${section.sectionTitle}`;
        headerElement.classList.add('text-xl', 'sm:text-3xl', 'font-bold', 'my-5');

        sectionElement.appendChild(headerElement);

        if(targetElement) {
          targetElement.appendChild(sectionElement);
        }

        section.textBlocks.forEach(block => {

          if(block.articleTitle) {
            const titleElement = document.createElement('h3');
            titleElement.textContent = block.articleTitle;
            titleElement.classList.add('text-lg', 'sm:text-2xl', 'font-semibold', 'my-3');
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
                listItemElement.classList.add('text-base', 'sm:text-lg');
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
                            childText = `<a href="${linkDef.href}" target="_blank" class="text-lg sm:text-xl font-semibold underline decoration-4 decoration-solid text-violet-500">${childText}</a>`;
                        }
                    });
        
                    contentElement.innerHTML = childText; // Changed to innerHTML to render the tags properly
                    contentElement.classList.add('text-base', 'sm:text-lg', 'my-3');
                    sectionElement.appendChild(contentElement);
                });
            }
        });

          sectionElement.appendChild(listElement);

        });
        
        
      });
  
      if (targetElement && targetElement) {
        targetElement.appendChild(targetElement);
      } else {
        console.error('Element not found or target element is null');
      }
      count++;
      
    });
  }).catch(error => console.error("Fetching error:", error));

function IframeFunctions() {

  // Clarity Case Study
  const clarityContentDiv = document.getElementById('content-clarity');

  if (clarityContentDiv) {
      // Create a new div for the iframe
      const iframeDocContainer = document.createElement('div');

      // Document iframe
      const iframeDoc = document.createElement('iframe');
      iframeDoc.src = 'https://docs.google.com/document/d/19B8-lNKwgqyiOVUFfif-93j_GNNwqkQHeVx7xlEzJAY/';
      iframeDoc.width = '100%'; // Set the width to 100% of the container
      iframeDoc.height = '600'; // Set a fixed height, or adjust as needed
      iframeDoc.style.border = 'none'; // Optional: Remove border
      iframeDoc.scrolling = 'yes'; // Enable scrolling

      // Slideshow
      const iframeSlideContainer = document.createElement('div');

      const iframeSlides = document.createElement('iframe');
      iframeSlides.src = 'https://docs.google.com/presentation/d/e/2PACX-1vTPOnuk8GKxoTbXmsvK7y25wHvoKzjYKVhuFxtJPqdvRmeHo951BawBoih3lBWl-8hHhlQHpZRiOiXc/embed?start=false&loop=false&delayms=60000';
      iframeSlides.width = '100%'; // Set the width to 100% of the container
      iframeSlides.height = '600'; // Set a fixed height, or adjust as needed
      iframeSlides.style.border = 'none'; // Optional: Remove border
      iframeSlides.scrolling = 'yes'; // Enable scrolling

      // Append the iframe to the new container
      iframeDocContainer.appendChild(iframeDoc);

      iframeSlideContainer.appendChild(iframeSlides);

      // Find the last div in content-nexus
      const lastDiv = clarityContentDiv.lastElementChild;

      const containerDiv = lastDiv?.childNodes[6];

      // Insert the new iframe container before the last div
      if(lastDiv) {
        if (containerDiv) {
          lastDiv.insertBefore(iframeDocContainer, containerDiv);
        } else {
            // If there's no last div, just append the new container
            lastDiv.appendChild(iframeDocContainer);
        }
      }

      if(lastDiv) {
        lastDiv.appendChild(iframeSlideContainer);
      }
  }

  console.log("Published");
}

function insertFigmaIframe() {

  // Alethia

  const alethiaContainer = document.getElementById('content-alethia'); // Replace with your container ID

  if (alethiaContainer) {
      const iframeAlethia = document.createElement('iframe');
      iframeAlethia.width = '100%';
      iframeAlethia.height = '650';
      iframeAlethia.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFcFY5H9kDZ80bXzDLndfiT%2FAletheia%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Dsx8gTe4uTo7zuN98-1';
      iframeAlethia.allowFullscreen = true;

      const figmaContainer = alethiaContainer.childNodes[5];

      figmaContainer.appendChild(iframeAlethia);
  }

  // UI Designs

  const uiDesignsContainer = document.getElementById('content-uiDesigns');

  if(uiDesignsContainer) {

    // First iframe

    const iframeUIDesigns1 = document.createElement('iframe');
    iframeUIDesigns1.width = '100%';
    iframeUIDesigns1.height = '650';
    iframeUIDesigns1.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fv2FVFWTxpHGsrvVlDVql1D%2FUI%252FUX-Projects%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DiLEMmrjXMH99h6Tt-1';
    iframeUIDesigns1.allowFullscreen = true;

    const figmaUIContainer1 = uiDesignsContainer.childNodes[4];

    figmaUIContainer1.appendChild(iframeUIDesigns1);

    // Second iframe

    const iframeUIDesigns2 = document.createElement('iframe');
    iframeUIDesigns2.width = '100%';
    iframeUIDesigns2.height = '650';
    iframeUIDesigns2.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fv2FVFWTxpHGsrvVlDVql1D%2FUI%252FUX-Projects%3Ftype%3Ddesign%26node-id%3D1%253A4%26mode%3Ddesign%26t%3DiLEMmrjXMH99h6Tt-1';
    iframeUIDesigns2.allowFullscreen = true;

    const figmaUIContainer2 = uiDesignsContainer.childNodes[5];

    figmaUIContainer2.appendChild(iframeUIDesigns2);

    // Third iframe

    const iframeUIDesigns3 = document.createElement('iframe');
    iframeUIDesigns3.width = '100%';
    iframeUIDesigns3.height = '650';
    iframeUIDesigns3.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fv2FVFWTxpHGsrvVlDVql1D%2FUI%252FUX-Projects%3Ftype%3Ddesign%26node-id%3D1%253A28111%26mode%3Ddesign%26t%3DiLEMmrjXMH99h6Tt-1';
    iframeUIDesigns3.allowFullscreen = true;

    const figmaUIContainer3 = uiDesignsContainer.childNodes[6];

    figmaUIContainer3.appendChild(iframeUIDesigns3);

    // Fourth iframe

    const iframeUIDesigns4 = document.createElement('iframe');
    iframeUIDesigns4.width = '100%';
    iframeUIDesigns4.height = '650';
    iframeUIDesigns4.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fv2FVFWTxpHGsrvVlDVql1D%2FUI%252FUX-Projects%3Ftype%3Ddesign%26node-id%3D1%253A3%26mode%3Ddesign%26t%3DiLEMmrjXMH99h6Tt-1';
    iframeUIDesigns4.allowFullscreen = true;

    const figmaUIContainer4 = uiDesignsContainer.childNodes[7];

    figmaUIContainer4.appendChild(iframeUIDesigns4);

    // Fifth iframe

    const iframeUIDesigns5 = document.createElement('iframe');
    iframeUIDesigns5.width = '100%';
    iframeUIDesigns5.height = '650';
    iframeUIDesigns5.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fv2FVFWTxpHGsrvVlDVql1D%2FUI%252FUX-Projects%3Ftype%3Ddesign%26node-id%3D1%253A5%26mode%3Ddesign%26t%3DiLEMmrjXMH99h6Tt-1';
    iframeUIDesigns5.allowFullscreen = true;

    const figmaUIContainer5 = uiDesignsContainer.childNodes[8];

    figmaUIContainer5.appendChild(iframeUIDesigns5);

    // Sixth iframe

    const iframeUIDesigns6 = document.createElement('iframe');
    iframeUIDesigns6.width = '100%';
    iframeUIDesigns6.height = '650';
    iframeUIDesigns6.src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fv2FVFWTxpHGsrvVlDVql1D%2FUI%252FUX-Projects%3Ftype%3Ddesign%26node-id%3D1%253A25052%26mode%3Ddesign%26t%3DiLEMmrjXMH99h6Tt-1';
    iframeUIDesigns6.allowFullscreen = true;

    const figmaUIContainer6 = uiDesignsContainer.childNodes[9];

    figmaUIContainer6.appendChild(iframeUIDesigns6);
  }

}

// Header colors

function HeaderColors() {

  // Nexus Play

  const h3Nexus = document.querySelectorAll('#content-nexus h3') as NodeListOf<HTMLElement>;

  h3Nexus.forEach(element => {
      element.style.color = "#FF4081";
  });

  const h1h2Nexus = document.querySelectorAll('#content-nexus h1, #content-nexus h2') as NodeListOf<HTMLElement>;

  h1h2Nexus.forEach(element => {
      element.style.color = "#B191FF";
  });

  // Clarity

  const h1h2Clarity = document.querySelectorAll('#content-clarity h1, #content-clarity h2') as NodeListOf<HTMLElement>;

  h1h2Clarity.forEach(element => {
      element.classList.add('text-violet-600');
  })

  const h3Clarity = document.querySelectorAll('#content-clarity h3') as NodeListOf<HTMLElement>;

  h3Clarity.forEach(element => {
      element.classList.add('text-violet-400');
  })

  const h1h2Alethia = document.querySelectorAll('#content-alethia h1, #content-alethia h2') as NodeListOf<HTMLElement>;

  h1h2Alethia.forEach(element => {
    element.classList.add('alethia-text');
  })

  const h1h2UIDesigns = document.querySelectorAll('#content-uiDesigns h1, #content-uiDesigns h2') as NodeListOf<HTMLElement>;

  h1h2UIDesigns.forEach(element => {
    element.classList.add('text-sky-500');
  })

  const h3UIDesigns = document.querySelectorAll('#content-uiDesigns h3') as NodeListOf<HTMLElement>;

  h3UIDesigns.forEach(element => {
    element.classList.add('text-sky-400');
  })

}


window.onload = () => {
  setTimeout(IframeFunctions, 500);
  setTimeout(insertFigmaIframe, 500);
  setTimeout(HeaderColors, 500);
};