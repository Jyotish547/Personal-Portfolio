import createClient from '@sanity/client';

export const client = createClient({
  projectId: 'yourProjectId', // Find this in your sanity.json
  dataset: 'production', // Or the name of your dataset
  apiVersion: '2021-03-25', // Use a date at or after your project's creation
  useCdn: false, // `false` if you want to ensure fresh data
});