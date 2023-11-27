import { client } from './sanityClient';

// Define a TypeScript interface for your project data
interface CaseStudy {
    image: string;
    title: string;
    date: string;
    description: string;
    
    // add more fields as they are defined in your Sanity schema
}

// Keep adding case study content id's here

const contentArray = ['content-nexus', 'content-play'];
let count = 0;
  
// Then, use this interface to type the parameter in your function
client.fetch<CaseStudy[]>('*[_type == "caseStudy"]').then(cases => {

cases.forEach(info => {

    const targetElement = document.getElementById(contentArray[count]);

    const infoElement = document.createElement('div');
    infoElement.innerHTML = `
    <h3 class="text-2xl pb-8">${info.title}</h3>
    
    `;
    targetElement?.appendChild(infoElement);

    count++;
    console.log(count);
});
});