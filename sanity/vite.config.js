// sanity/vite.config.js
import { resolve } from 'path';

// Resolve Sanity part imports
const sanityPartsResolve = () => ({
  name: 'resolve-sanity-parts',
  resolveId(source) {
    if (source.startsWith('part:@sanity/')) {
      // This path should point to the actual location of the part within the Sanity package
      const path = source.replace('part:@sanity/', '');
      return resolve(process.cwd(), `./node_modules/@sanity/${path}`);
    }
    if (source.startsWith('all:part:@sanity/')) {
      // Handle "all:" imports similarly
      const path = source.replace('all:part:@sanity/', '');
      return resolve(process.cwd(), `./node_modules/@sanity/${path}`);
    }
    return null; // Return null for all other imports
  },
});
