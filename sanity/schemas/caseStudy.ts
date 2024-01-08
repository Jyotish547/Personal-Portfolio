// Define the schema for a section that includes a title, multiple text blocks, and images with titles
const CaseStudies = {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'sectionContent',
      title: 'Section Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'textBlocks',
              title: 'Text Blocks',
              type: 'array',
              of: [
                { 
                  type: 'object',
                  fields: [
                    {
                      name: 'articleTitle',
                      title: 'Article Title',
                      type: 'string'
                    },
                    {
                      name: 'imagesWithTitle',
                      title: 'Images with Title',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            {
                              name: 'image',
                              title: 'Image',
                              type: 'image',
                              options: {
                                hotspot: true,
                              },
                            },
                            {
                              name: 'imageTitle',
                              title: 'Image Title',
                              type: 'string',
                            },
                          ],
                          preview: {
                            select: {
                              title: 'imageTitle',
                              media: 'image',
                            },
                          },
                        },
                      ],
                    },
                    {
                      name: 'articleContent',
                      title: 'Article Content',
                      type: 'array',
                      of: [{ type: 'block' }],
                    },
                  ]
                }
              ],
            },
            
          ],
          preview: {
            select: {
              title: 'sectionTitle',
            },
          },
        },
      ],
    },
  ],
};

export default CaseStudies;
