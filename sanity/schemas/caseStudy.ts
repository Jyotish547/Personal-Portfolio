export default {
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
    {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
            hotspot: true, // Enables image cropping
        },
        },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent', // This refers to a defined block content type for rich text
      },
      
      // Add more fields as needed
    ],
  };
  