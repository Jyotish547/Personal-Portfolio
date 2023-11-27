declare module 'part:@sanity/base/schema-creator' {
    export default function createSchema(config: any): any;
  }
  
  declare module 'all:part:@sanity/base/schema-type' {
    const schemaTypes: any[];
    export default schemaTypes;
  }