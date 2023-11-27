// Sanity

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'em3mffdu',
  dataset: 'production',
  apiVersion: '2023-11-27',
  useCdn: false,
});